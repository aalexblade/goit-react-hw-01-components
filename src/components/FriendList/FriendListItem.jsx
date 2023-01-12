import PropTypes from 'prop-types'
import {
    FriendItem,
    Status,
    Avatar,
    Name,
    
} from './Friends.styled';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const FriendListItem  = ({avatar,name,isOnline}) => { 
    return (
        <FriendItem>
            <Status bgColor={isOnline} style={{backgroundColor: getRandomColor()}}></Status>
            <Avatar src={avatar}  alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};