import styled from "styled-components";

export const IsOff = styled.span`
     background-color: red;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;
export const IsOn = styled.span`
     background-color: green;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;


export const FriendItem = styled.li`
        display: flex;
        gap: 5px;
    flex-direction: column;
    align-items: center;
    p{
        margin: 0;
    }
`;

export const FriendListBlock = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
`;

export const BoxFriend = styled.div`
       width: 100%;
    background-color: aqua;
    display: flex;
    justify-content: center;
    padding: 15px;
`;
