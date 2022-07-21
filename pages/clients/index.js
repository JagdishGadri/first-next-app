import React from "react";
import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "jagdish", name: "Jagdish" },
    { id: "kalp", name: "Kalp" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
