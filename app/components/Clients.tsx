import { useEffect, useState } from "react";

import { fetchClients, type Client } from "~/lib/comics";

export function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadClients() {
      setLoading(true);
      setError(null);

      try {
        const clientList = await fetchClients();
        if (!cancelled) {
          setClients(clientList);
        }
      } catch {
        if (!cancelled) {
          setError("Could not load clients. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadClients();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="clients" aria-labelledby="clients-title">
      <h2 id="clients-title" className="clients-title">
        Clients
      </h2>

      {loading && (
        <p className="clients-status">Loading clients...</p>
      )}

      {error && (
        <p className="clients-status clients-status-error">{error}</p>
      )}

      {!loading && !error && clients.length === 0 && (
        <p className="clients-status">No clients yet.</p>
      )}

      {!loading && !error && clients.length > 0 && (
        <ul className="clients-list">
          {clients.map((client) => (
            <li key={client.id} className="clients-item">
              <img
                src={client.url}
                alt={client.name}
                className="clients-logo"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
