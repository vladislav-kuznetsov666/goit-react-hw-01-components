import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.friendItem}>
    <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
    <img className={styles.friendAvatar} src={avatar} alt={name} width="58" />
    <h3 className={styles.friendName}>{name}</h3>
  </li>
);

export default FriendListItem;