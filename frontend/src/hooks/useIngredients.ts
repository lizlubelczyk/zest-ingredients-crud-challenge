import { useCallback, useEffect, useState } from 'react';
import type { Ingredient } from '../types/ingredient';
import {
  getIngredients,
  createIngredient,
  deleteIngredient,
} from '../services/ingredients';

// Data-fetching + state kept out of the layout component (frontend.md).
export function useIngredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setIngredients(await getIngredients());
    } catch {
      setError("Couldn't load ingredients. Is the API running?");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const add = useCallback(async (name: string) => {
    const created = await createIngredient(name);
    // Optimistically fold the new row in, kept sorted like the API returns it.
    setIngredients((prev) =>
      [...prev, created].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }, []);

  const remove = useCallback(async (id: string) => {
    await deleteIngredient(id);
    setIngredients((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return { ingredients, loading, error, reload: load, add, remove };
}
