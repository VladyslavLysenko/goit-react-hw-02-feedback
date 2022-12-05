
import React from 'react'
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import {Notification} from './Notification/Notification'
// Main section App
import options from 'options.json';

export class App extends  React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
    
     handleIncrement = e => {
         const target = e.target.name;
    this.setState(prevState => ({
        [target]: prevState[target] + 1,
    })
    );
  };

//   handleGood = (e) => {
//       this.setState(prevState => {
//           return {
//               good: prevState.good + 1
//           }
//       })
//   }
  
//   handleNeutral = (e) => {
//       this.setState(prevState => {
//           return {
//               neutral: prevState.neutral + 1
//           }
//       })
//   }
//   handleBad = (e) => {
//       this.setState(prevState => {
//           return {
//               bad: prevState.bad + 1
//           }
//       })
//   }
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => Math.round(this.state.good / (this.countTotalFeedback() || 1) * 100);
    render() {
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        const totalFeedback = this.countTotalFeedback();
        const { good, neutral, bad } = this.state;
    return (
        <>
            <p>Please leave feedback</p>
            <FeedbackOptions
                options={options}
                onLeaveFeedback={this.handleIncrement} 
                
            />
            <p>Statistics</p>
            
            {totalFeedback
                ? (
                    <Statistics
                        valueGood={good}
                        valueNeutral={neutral}
                        valueBad={bad}
                        totalFeedback={totalFeedback}
                        positiveFeedbackPercentage={positiveFeedbackPercentage}
                    
                    />
                )
                : (
                    <Notification message="There is no feedback" />
                )
            }
        </>
      
    );
  }

};

