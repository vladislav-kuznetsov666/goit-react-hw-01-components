import styles from './profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
    return (
        <div className={styles.profile}>
          <div className={styles.description}>
            <img className={styles.avatar} src={avatar} alt={username} />
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.cardText}>@{tag}</p>
            <p className={styles.cardText}>{location}</p>
          </div>
          <ul className={styles.stats}>
            <li className={styles.CardStatsItem}>
              <span className={styles.label}>Followers</span>
              <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li className={styles.CardStatsItem}>
              <span className={styles.label}>Views</span>
              <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li className={styles.CardStatsItem}>
              <span className={styles.label}>Likes</span>
              <span className={styles.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      );
}

export default Profile;