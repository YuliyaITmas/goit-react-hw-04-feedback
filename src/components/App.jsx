import React, { useReducer} from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

import { Container } from './App.styled';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      return state;
  }
};


const App = () => {

   const [feedback, dispatch] = useReducer(reducer, initialState);

  const handleLeaveFeedback = option => {
     dispatch({ type: 'INCREMENT', payload: option });
   };

   const { good, neutral, bad } = feedback;
   const total = good + neutral + bad;
   const positivePercentage = total ? Math.round((good / total) * 100) : 0;

    return (
      <Container>
        <Section title="Please, leave a feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
}


export default App;