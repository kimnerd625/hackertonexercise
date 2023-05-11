import React, { useState } from 'react';
import axios from "axios";


import { Wrapper, UserInfo, ChangeButton } from "./User.styles";

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
            <span>닉네임</span>
            <span>김너드</span>
          </li>
          <li>
            <span>이메일</span>
            <span>jihunkim625@yonsei.ac.kr</span>
          </li>
          <li>
            <span>비밀번호</span>
            <ChangeButton>변경하기</ChangeButton>
          </li>
          <li>
            <span>생년월일</span>
            <span>2000-02-02</span>
          </li>
          <li>
            <span>캐시 잔액</span>
            <span>89,575원</span>
          </li>
        </UserInfo>
      </Wrapper>
    </>
  );
};

export default User;