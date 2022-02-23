import { useState } from "react";

function Signup(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function sendData(event) {
    event.preventDefault();
    if (data.password === data.passwordConfirmation) {
      props.addNewUser(data);
      setMessage("Cadastrado com sucesso");
    } else {
      setMessage("Senhas não são as mesmas");
    }
  }

  return (
    <section className="signup">
      <form>
        <h2>Cadastre-se agora!</h2>
        <p>
          <label htmlFor="first_name">Nome</label>
          <input
            type="text"
            id="first_name"
            onChange={handleChange}
            name="firstName"
          />
        </p>
        <p>
          <label htmlFor="last_name">Sobrenome</label>
          <input
            type="text"
            id="last_name"
            onChange={handleChange}
            name="lastName"
          />
        </p>
        <p>
          <label htmlFor="account_email">E-mail</label>
          <input
            type="email"
            id="account_email"
            onChange={handleChange}
            name="email"
          />
        </p>
        <p>
          <label htmlFor="account_password">Senha</label>
          <input
            type="password"
            id="account_password"
            onChange={handleChange}
            name="password"
          />
        </p>
        <p>
          <label htmlFor="account_password_confirmation">
            Confirme a sua senha
          </label>
          <input
            type="password"
            id="account_password_confirmation"
            onChange={handleChange}
            name="passwordConfirmation"
          />
        </p>
        <p>
          <button onClick={sendData}>Enviar!</button>
        </p>
        <a onClick={props.signupToggle} className="toggle">
          Já estou cadastrado no site
        </a>
        <p>{message}</p>
      </form>
    </section>
  );
}

export default Signup;
