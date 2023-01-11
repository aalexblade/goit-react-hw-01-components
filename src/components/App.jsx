
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';




import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        gap: 60,
        flexDirection: 'column',
        fontSize: 22,
        color: '#010101',
        backgroundColor: '#0101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
     
    </div>
  );
};
