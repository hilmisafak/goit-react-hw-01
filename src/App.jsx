import Profile from "./components/profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import usersData from "./usersData.json";
import friendsData from "./friendsData.json";
import transactionsData from "./transactionsData.json";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Profiles</h2>
          <Profile
            name={usersData.username}
            tag={usersData.tag}
            location={usersData.location}
            image={usersData.avatar}
            stats={usersData.stats}
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Friends</h2>
          <FriendList friends={friendsData} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Transaction History</h2>
          <TransactionHistory items={transactionsData} />
        </section>
      </div>
    </>
  );
};

export default App;
