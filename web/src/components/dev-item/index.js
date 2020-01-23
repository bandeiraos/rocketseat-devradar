import React from "react";
import './styles.css'

export default function DevItem({
  _id,
  avatar_url,
  name,
  github_username,
  techs,
  bio
}) {
  return (
    <li className="dev-item" key={_id}>
      <header>
        <img src={avatar_url} alt={name} />
        <div className="user-info">
          <strong>{name ? name : github_username}</strong>
          <span>{techs.toString()}</span>
        </div>
      </header>
      <p>{bio}</p>
      <a href={`https://github.com/${github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}
