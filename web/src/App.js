import React, { useState, useEffect } from "react";
import "./services/api";
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";
import api from "./services/api";
import DevItem from "./components/dev-item";
import DevForm from "./components/dev-form";

function App() {
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  return (
    <div className="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem {...dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
