import { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log("Supabase response:", { data, error });
    };

    testConnection();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supabase Connected</h1>
      <p>Open browser console to verify.</p>
    </div>
  );
}

export default App;
