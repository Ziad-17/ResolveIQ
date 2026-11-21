import { useEffect, useState } from "react";
import { getHealth } from "../api/client";

type State = "loading" | "success" | "failure";

export default function HealthBadge() {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    getHealth()
      .then(() => setState("success"))
      .catch(() => setState("failure"));
  }, []);

  if (state === "loading") return <p>Checking backend...</p>;
  if (state === "success") return <p>Backend: online ✅</p>;
  return <p>Backend: unreachable ❌ (is the API running?)</p>;
}