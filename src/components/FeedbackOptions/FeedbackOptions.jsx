import PropTypes, {arrayOf} from 'prop-types';
import { FeedbackWrap, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {options.map(option => {
        return (
          <Button
            onClick={() => onLeaveFeedback(option)}
            type="button"
            name={option}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;