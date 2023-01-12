import styled from "styled-components";

export const FriendsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
  padding: 12px;
  width: 329px;
  margin: auto;
   border-radius: 4px;
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${p => (p.bgColor ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 68px;
  height: 68px;
  background-color: whitesmoke;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;