//
import PropTypes from 'prop-types';
import {
  UserAvatar,
  UserNickname,
  UserLocation,
  UserName,
  StatsLable,
  StatsQuantity,
  StatsItem,
  StatsList,
  DescrWrapper,
  ProfileWrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <DescrWrapper>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserNickname>@{tag}</UserNickname>
        <UserLocation>{location}</UserLocation>
      </DescrWrapper>

      <StatsList>
        <StatsItem>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};





// import {
//   UserAvatar,
//   UserNickname,
//   UserLocation,
//   UserName,
//   StatsLable,
//   StatsQuantity,
//   StatsItem,
//   StatsList,
//   DescrWrapper,
//   ProfileWrapper,
// } from './Profile.styled';

// export const Profile = ({ username, tag, location, avatar, stats }) => {
//   return (
//     <ProfileWrapper>
//       <DescrWrapper>
//         <UserAvatar src={avatar} alt="User avatar" />
//         <UserName>{username}</UserName>
//         <UserNickname>@{tag}</UserNickname>
//         <UserLocation>{location}</UserLocation>
//       </DescrWrapper>

//       <StatsList>
//         <StatsItem>
//           <StatsLable>Followers</StatsLable>
//           <StatsQuantity>{stats.followers}</StatsQuantity>
//         </StatsItem>
//         <StatsItem>
//           <StatsLable>Views</StatsLable>
//           <StatsQuantity>{stats.views}</StatsQuantity>
//         </StatsItem>
//         <StatsItem>
//           <StatsLable>Likes</StatsLable>
//           <StatsQuantity>{stats.likes}</StatsQuantity>
//         </StatsItem>
//       </StatsList>
//     </ProfileWrapper>
//   );
// };

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.objectOf(PropTypes.number.isRequired),
// };


// import React from 'react';
// import PropTypes from "prop-types";
// import styles from './Profile.module.css';

// export const Profile = ({username,tag,location,avatar,stats}) => { 
//     return (
//         <div className={styles.profile}>
//   <div className={styles.description}>
//     <img
//       src={avatar}
//       alt="User avatar"
//       className={styles.avatar}
//     />
//                 <p className={styles.name}>{ username}</p>
//                 <p className={styles.tag}>@{tag}</p>
//                 <p className={styles.location}>{location}</p>
//   </div>

//      <ul className={styles.stats}>
//           <li className={styles.itemList}>
//             <span className="label">Followers</span>
//             <p><span className={styles.quantity}> {stats.followers}</span></p>
//           </li>
//           <li className={styles.itemList}>
//             <span className="label">Views</span>
//             <p><span className={styles.quantity}> {stats.views}</span></p>
//           </li>
//           <li className={styles.itemList}>
//             <span className="label">Likes</span>
//             <p><span className={styles.quantity}> {stats.likes}</span></p>
//           </li>
//         </ul>
// </div>
//     );
// };
     
// Profile.propTypes = {
  
//     username: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     stats: PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
      
//     }),
// };