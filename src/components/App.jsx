

import React from 'react'
import { Counter } from './FeedbackCounter/FeedbackCounter'
import {Statistics} from './Statistics/Statistics'
// Main section App

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
    }));
  };

  handleGood = (e) => {
      this.setState(prevState => {
          return {
              good: prevState.good + 1
          }
      })
  }
  
  handleNeutral = (e) => {
      this.setState(prevState => {
          return {
              neutral: prevState.neutral + 1
          }
      })
  }
  handleBad = (e) => {
      this.setState(prevState => {
          return {
              bad: prevState.bad + 1
          }
      })
  }
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => this.state.good / (this.countTotalFeedback() || 1) * 100;
    render() {
    return (
        <>
        <p>Please leave feedback</p>
            <Counter
                onHandleGood={this.handleGood}
                onHandleNeutral={this.handleNeutral}
                onHandleBad={this.handleBad}   
            />

            {/* <FeedbackOptions options={} onLeaveFeedback={}/> */}
            
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>  
      </>
    );
  }

};
// Counter
