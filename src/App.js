import { useState } from "react";

import Signin from "./components/Signin";

import "./app.css";
import Signup from "./components/Signup";

function App() {
  const [cadastro, setCadastro] = useState(true);

  const [signin, setSignin] = useState(false);

  const [loginMessage, setLoginMessage] = useState("");

  function signupToggle() {
    setCadastro(!cadastro);
  }

  const [userData, setUserData] = useState([
    { email: "tiago@gmail.com", password: "123" },
  ]);

  function addNewUser(data) {
    setUserData((prevUserData) => [...prevUserData, data]);
  }

  function login(user) {
    const userEmail = userData.map((data) => data.email === user.user);

    if (user.password === user.password) {
      setSignin(true);
      setLoginMessage("");
    } else {
      setLoginMessage("Usuario ou senha incoretos");
    }
  }

  return (
    <div className="App">
      <div className="container">
        {!signin ? (
          <div className="card">
            {cadastro ? (
              <Signin signupToggle={signupToggle} login={login} />
            ) : (
              <Signup signupToggle={signupToggle} addNewUser={addNewUser} />
            )}
          </div>
        ) : (
          <p>Você está logado</p>
        )}
        <p>{loginMessage}</p>
      </div>
    </div>
  );
}

export default App;
