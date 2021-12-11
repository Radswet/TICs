import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import JSONPretty from "react-json-pretty";
//import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div class="grid justify-items-center">
        <img src={user.picture} alt={user.name} class="rounded-full"/>
        <h2><b>Nombre:</b> {user.given_name}</h2>
        <h2><b>Apellido:</b> {user.family_name}</h2>
        <h2><b>Email:</b> {user.email}</h2>
        {//<JSONPretty data={user} />;
        }
      </div>
    )
  );
};

export default Profile;
