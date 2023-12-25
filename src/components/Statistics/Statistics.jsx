import styles from './Statistics.module.css';

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
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  };
  
  export default Statistics;