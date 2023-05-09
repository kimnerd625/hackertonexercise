import React from 'react';

import { Wrapper, UserInfo } from "./User.styles";

function User() {
  return (
    <>
      <Wrapper>
        <UserInfo>
          <li>이름</li>
          <li>나이</li>
        </UserInfo>
      </Wrapper>
    </>
  );
};

export default User;