import { Box } from "./App.styled";
import user from "../data/user.json";
import Profile from "./Profile/Profile";
import data from '../data/data.json'
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
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
