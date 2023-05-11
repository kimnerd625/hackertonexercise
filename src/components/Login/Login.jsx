import React, {useState} from "react";
import axios from "axios";
import { Wrapper, LoginInput } from "./Login.styles";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await axios.post("http://localhost:8080/dev/signup", {
        username: username,
        password: password,
      }, { headers: { 'Access-Control-Allow-Origin': '*' }});

      console.log(' 잘 되었다!')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <LoginInput
        onChange={ () => setUsername()}
      />
      <LoginInput
        onChange={ () => setPassword()}
      />
      <button type="button" onClick={() => signUp()}>
        로그인
      </button>
    </Wrapper>
  )
};

export default Login;