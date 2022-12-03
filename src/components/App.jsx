

import React from 'react'
// Main section App
export const App = () => {
  return (
    <>
        <p>Please leave feedback</p>
          <Counter />
          
    </>
  );
};
// Counter
class Counter extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGood = (event) => {
        console.log(this.state.good )
        console.log(event.type)
        this.setState(prevState => {
            return {
                good: prevState.good +1
            }
        })
    }
   
    handleNeutral = (event) => {
        console.log(this.state.neutral)
        console.log(event.type)
        this.setState(prevState => {
            return {
                neutral: prevState.neutral +1
            }
        })
    }
    handleBad = (event) => {
        console.log(this.state.bad)
        console.log(event.type)
         this.setState(prevState => {
            return {
                bad: prevState.bad +1
            }
        })
    }

  render() {
      return (
          <>
          <div className='FeedbackCounter'>
              <button type='button' onClick={this.handleGood}>Good</button>
              <button type='button' onClick={this.handleNeutral}>Neutral</button>
              <button type='button' onClick={this.handleBad}>Bad</button>
              </div>
              <p>Statistics</p>
              <ul className='Statistics'>
                  <li><span>Good: {this.state.good}</span></li>
                  <li> <span>Neutral: {this.state.neutral}</span></li>
                  <li><span>Bad: {this.state.bad}</span></li>
                  
              </ul>
        </>
          

    )
  }
}
