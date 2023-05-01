import { Box } from "./App.styled";
import user from "../data/user.json";
import Profile from "./Profile/Profile";
import data from '../data/data.json'
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/Friends";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import TransactionHistory from "./Transactions/Transactions";

export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Box>
  );
};




// import PropTypes from 'prop-types';
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   })
// }