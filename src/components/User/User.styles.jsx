import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.ul`
  width: 80%;
  display : flex;
  margin: 10px;
  padding : 10px;
  flex-direction : column;
  justify-content: center; //좌우정렬
  align-items: center; 
  border : 1px solid red;
  list-style : none;

  li {
    border : 1px solid blue ;
    width: 100%;
    display: flex;
    flex-direction: row; //가로배열
    justify-content: space-between; //좌우정렬
    align-items: center; //위아래 정렬
    list-style: none; //닷 없애기
    padding : 10px;
  }
`;
const ChangeButton = styled.button`
    border-radius : 10px;
    background-color: blue;
    color: white;
    border-style: none;
    padding : 5px 10px;
    cursor : pointer;
    &:hover{
      background-color : skyblue;
    }
`;

export {
  Wrapper,
  UserInfo,ChangeButton,
};