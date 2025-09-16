import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.avatarWrapper}>
          <img src={image} alt="User avatar" className={styles.avatar} />
        </div>

        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            {stats.followers?.toLocaleString()}
          </span>
        </li>

        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            {stats.views?.toLocaleString()}
          </span>
        </li>

        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            {stats.likes?.toLocaleString()}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
