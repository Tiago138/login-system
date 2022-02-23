import { useState } from "react";

function Signin(props) {
  const [user, setUser] = useState({ user: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function send(event) {
    event.preventDefault();
    props.login(user);
  }

  return (
    <section className="signin">
      <form>
        <h2>Entrar no site</h2>
        <p>
          <label htmlFor="user_email">E-mail</label>
          <input
            type="email"
            id="user_email"
            name="user"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="user_password">Senha</label>
          <input
            type="password"
            id="user_password"
            name="password"
            onChange={handleChange}
          />
        </p>
        <p>
          <button onClick={send}>Enviar!</button>
        </p>
        <a onClick={props.signupToggle} className="toggle">
          Quero me cadastrar
        </a>
      </form>
    </section>
  );
}

export default Signin;
