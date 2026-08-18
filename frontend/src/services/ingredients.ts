import type { Ingredient } from '../types/ingredient';

// Centralized HTTP calls (frontend.md): no scattered fetch across components.
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function getIngredients(): Promise<Ingredient[]> {
  return fetch(`${API_URL}/ingredients`).then((r) => handle<Ingredient[]>(r));
}

export function createIngredient(name: string): Promise<Ingredient> {
  return fetch(`${API_URL}/ingredients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  }).then((r) => handle<Ingredient>(r));
}

export async function deleteIngredient(id: string): Promise<void> {
  // DELETE returns 204 with no body, so there's nothing to parse.
  const res = await fetch(`${API_URL}/ingredients/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
}
