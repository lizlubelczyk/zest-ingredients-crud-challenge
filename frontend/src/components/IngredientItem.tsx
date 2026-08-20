import { useState } from 'react';
import type { Ingredient } from '../types/ingredient';

interface Props {
  ingredient: Ingredient;
  onDelete: (id: string) => Promise<void>;
}

// One list row: the name plus an inline two-step delete (Delete → Confirm/Cancel)
// with its own pending/error state. Avoids window.confirm(), which is unreliable
// in embedded browsers.
export function IngredientItem({ ingredient, onDelete }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    setError(false);
    try {
      await onDelete(ingredient.id);
      // On success the row is removed from the list, so no further state needed.
    } catch {
      setError(true);
      setDeleting(false);
      setConfirming(false);
    }
  }

  return (
    <li className="flex items-center gap-3 py-3">
      <span className="flex-1 text-foreground">{ingredient.name}</span>
      {error && <span className="text-sm text-primary">Failed</span>}

      {confirming ? (
        <>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {deleting ? 'Deleting…' : 'Confirm'}
          </button>
          <button
            onClick={() => setConfirming(false)}
            disabled={deleting}
            className="rounded-full px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary disabled:opacity-50"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={() => setConfirming(true)}
          aria-label={`Delete ${ingredient.name}`}
          className="rounded-full px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          Delete
        </button>
      )}
    </li>
  );
}
