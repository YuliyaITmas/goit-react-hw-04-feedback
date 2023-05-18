import PropTypes from 'prop-types';
import { StatisticCard } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatisticCard>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </StatisticCard>
  );
  
  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };
  export default Statistics;