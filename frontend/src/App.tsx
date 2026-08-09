function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-3xl font-extrabold text-foreground">
          Ingredients challenge
        </h1>
        <p className="mt-3 text-muted-foreground">
          Replace this with a page that lists ingredients from{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">GET /ingredients</code> and a
          form that adds a new one via{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">POST /ingredients</code>. See{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">CHALLENGE.md</code>.
        </p>
      </div>
    </div>
  );
}

export default App;
