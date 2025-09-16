import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TaransactionHistory from "./components/TransactionHistory/TransactionHistory";

import usersData from "./usersData.json";
import friendsData from "./friendsData.json";
import transactionsData from "./transactionsData.json";
import styles from "./app.module.css";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Profile
            name={usersData.username}
            tag={usersData.tag}
            location={usersData.location}
            image={usersData.avatar}
            stats={usersData.stats}
          />
        </div>

        <div className={styles.friendList}>
          <FriendList friends={friendsData} />
        </div>

        <div className={styles.transactionHistory}>
          <TaransactionHistory items={transactionsData} />
        </div>
      </div>
    </>
  );
};

export default App;
