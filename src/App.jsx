import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TaransactionHistory from "./components/TransactionHistory/TransactionHistory";

import usersData from "./usersData.json";
import friendsData from "./friendsData.json";
import transactionsData from "./transactionsData.json";

const App = () => {
  return (
    <>
      <Profile
        name={usersData.username}
        tag={usersData.tag}
        location={usersData.location}
        image={usersData.avatar}
        stats={usersData.stats}
      />

      <FriendList friends={friendsData} />

      <TaransactionHistory items={transactionsData} />
    </>
  );
};

export default App;
