import React, { useState, useEffect } from "react";

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({ github_username, techs, latitude, longitude });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Usuário do GitHub
        <input
          name="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </label>

      <label>
        Tecnologias
        <input
          name="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </label>

      <div className="input-block">
        <label>
          Latitude
          <input
            name="latitude"
            required
            readOnly
            type="number"
            value={latitude}
          />
        </label>

        <label>
          Latitude
          <input
            name="longitude"
            required
            readOnly
            type="number"
            value={longitude}
          />
        </label>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
