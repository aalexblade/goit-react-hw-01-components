import styled from 'styled-components';

export const UserAvatar = styled.img`
 border-radius: 50%;
width: 180px;
margin-bottom: 20px;
`;
export const UserNickname = styled.p`
 color: #646464;
margin-bottom: 12px;
`;
export const UserLocation = styled.p`
 color: #646464;
margin-bottom: 12px;
`;
export const UserName = styled.p`
 font-size: 24px;
font-weight: 600;
margin-bottom: 12px;
`;
export const StatsLable = styled.span`
 color: #646464;
`;
export const StatsQuantity = styled.span` 
font-size: 24px;
font-weight: 600;
`;
export const StatsItem = styled.li`
 display: flex;
flex-direction: column;
text-align: center;
padding: 10px;
border: 1px solid #a8a8a8;
width: calc(100% / 3);
`;
export const StatsList = styled.ul`
display: flex;
background-color: #dedede;
`;
export const DescrWrapper = styled.div`
text-align: center;
padding: 20px;
`;
export const ProfileWrapper = styled.div`
width: 350px;
margin: 10px;
box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.7);
`;


/* .stats {

    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    margin: 0 0;
    padding: 0 0;
}

.itemList {
    background-color: #f3f6f9;
    border: solid;
    margin: 0 0;
    padding: 60px 0px 60px;
    font-size: 20px;
    text-align: center;
    width: 250px;
}

.profile {
    display: flex;
    justify-content: center;
    flex-direction: column;

    border: solid;

    width: 450px;
    margin-bottom: 50px;
    position: relative;
    top: 50%;
    left: 40%;
}

.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    height: 450px;
}

.quantity {
    font-weight: bold;
}

.name {
    font-weight: bold;
}

.imgLogo {

    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid;
}

.avatar {
    width: 250px;
    height: 250px;
    border-radius: 50%;

} */