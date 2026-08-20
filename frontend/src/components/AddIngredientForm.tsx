import { useState, type FormEvent } from 'react';
import { Button } from './ui/Button';

interface Props {
  onAdd: (name: string) => Promise<void>;
}

// Presentational form; submission logic is delegated to the parent via onAdd.
export function AddIngredientForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Please enter a name.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await onAdd(trimmed);
      setName('');
    } catch {
      setError("Couldn't add that ingredient. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Tomato"
          aria-label="Ingredient name"
          className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Adding…' : 'Add'}
        </Button>
      </div>
      {error && <p className="text-sm text-primary">{error}</p>}
    </form>
  );
}
