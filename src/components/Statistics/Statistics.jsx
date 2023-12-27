import styles from './Statistics.module.css';
import getRandomColor from 'helpers/RandomColor';

const Statistics = ({ title, stats = [] }) => {
    const statsEl = stats.map(stat => (
      <li
        className={styles.statsElitem}
        key={stat.id}
        style={{ backgroundColor: getRandomColor() }}
      >
        {stat.label} {stat.percentage}
      </li>
    ));
  
    return (
      <div className={styles.statistics}>
        {title && <h2 className={styles.statTitle}>{title}</h2>}
        <ul className={styles.statList}>{statsEl}</ul>
      </div>
    );
  };
  
  export default Statistics;