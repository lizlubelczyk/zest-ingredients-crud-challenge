import { useIngredients } from '../hooks/useIngredients';
import { AddIngredientForm } from '../components/AddIngredientForm';
import { Card } from '../components/ui/Card';
import { Notice } from '../components/ui/Notice';
import { Button } from '../components/ui/Button';

// Route-level layout; data/logic come from the hook and child components.
export function IngredientsPage() {
  const { ingredients, loading, error, reload, add } = useIngredients();

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-foreground">
            Ingredients
          </h1>
          <p className="mt-2 text-muted-foreground">
            The Zest catalog — add one and it shows up in the list.
          </p>
        </header>

        <Card>
          <AddIngredientForm onAdd={add} />

          <div className="mt-6">
            {loading ? (
              <Notice>Loading ingredients…</Notice>
            ) : error ? (
              <Notice
                tone="error"
                action={
                  <Button variant="secondary" onClick={() => void reload()}>
                    Retry
                  </Button>
                }
              >
                {error}
              </Notice>
            ) : ingredients.length === 0 ? (
              <Notice>No ingredients yet. Add the first one above.</Notice>
            ) : (
              <ul className="divide-y divide-border">
                {ingredients.map((ing) => (
                  <li key={ing.id} className="py-3 text-foreground">
                    {ing.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
