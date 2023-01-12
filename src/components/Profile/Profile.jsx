import PropTypes from 'prop-types';

import {
  UserAvatar,
  UserName,
  UserTag,
  UserLocation, 
  StatsText,
  StatsQuantity,
  ProfileContainer,
  ProfileDescription,
  StatsContainer,
  StatsItem,
} from './Profile.styled';



export const Profile = ({username, tag, location, avatar, stats}) => { 
  return (
    <ProfileContainer>
      <ProfileDescription>
        <UserAvatar src={avatar} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescription>

      <StatsContainer>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>likes</StatsText>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsContainer>
</ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
