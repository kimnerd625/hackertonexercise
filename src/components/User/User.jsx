import React, { useState } from 'react';
import axios from "axios";


import { Wrapper, UserInfo } from "./User.styles";

function User() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  const getUserInfo = async () => {
    try {
      const data = await axios.get("https://qetv7546o3.execute-api.ap-northeast-2.amazonaws.com/2023-05-09/board");
      console.log(data);
      setName(data.data.name);
      setAge(data.data.age);
      setHobby(data.data.hobby);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Wrapper>
        <button type="button" onClick={() => getUserInfo()}>
          정보 불러오기
        </button>
        <UserInfo>
          <li>
            <span>이름:</span>
            <span>{name}</span>
          </li>
          <li>
            <span>나이:</span>
            <span>{age}</span>
          </li>
          <li>
            <span>취미:</span>
            <span>{hobby}</span>
          </li>
        </UserInfo>
      </Wrapper>
    </>
  );
};

export default User;