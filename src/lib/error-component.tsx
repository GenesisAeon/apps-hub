import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <h1 className="font-display text-2xl tracking-tight">Anzeige unterbrochen</h1>
      <p className="max-w-md text-sm leading-relaxed break-words text-muted">
        {error.message || "Ein unerwarteter Fehler ist aufgetreten."}
      </p>
      <a href="/" className="mt-4 inline-flex min-h-11 items-center text-sm text-accent hover:underline">
        Zurück zum Hub
      </a>
    </main>
  );
}
