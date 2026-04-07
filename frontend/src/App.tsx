import React, { useEffect, useState } from "react";

interface HealthStatus {
  status: string;
}

const App: React.FC = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null);

  useEffect(() => {
    fetch("/api/health/")
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setHealth({ status: "unreachable" }));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>SymplyChain</h1>
      <p>Supply-chain management — hackathon MVP</p>
      <p>
        Backend status:{" "}
        <strong>{health ? health.status : "checking…"}</strong>
      </p>
    </main>
  );
};

export default App;
