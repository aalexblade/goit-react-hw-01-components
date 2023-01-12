import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #ffffff;
  font-size: 18px;
  border-radius: 4px;
  /* box-shadow: 0px 1px 1px
   rgba(0, 0, 0, 0.12),
   0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16); */
  width: 350px;
  margin: auto;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  padding-bottom: 20px;
  margin-top: 20px;
  
  
`;

export const UserName = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 8px 0;
  padding-top: 16px;
`;


export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: solid;
  `;

export const UserTag = styled.p`
  margin: 8px 0;
  color: #999999;
`;
export const UserLocation = styled.p`
  margin: 8px 0;
  color: #999999;
`;
export const StatsContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
   width: 350px;
  margin: auto;
  /* box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7); */
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px;
  background-color: #2323;
  border: 1px solid rgb(0 0 0 / 12%);
`;

export const StatsText = styled.span`
  color: #686868;
  font-size: 16px;
`;

export const StatsQuantity = styled.span`
  font-weight: 500;
`;