import React from 'react'

export const Counter = ({onHandleGood,onHandleNeutral,onHandleBad}) =>{
      return (
          <div className='FeedbackCounter'>
              <button type='button' onClick={onHandleGood}>Good</button>
              <button type='button' onClick={onHandleNeutral}>Neutral</button>
              <button type='button' onClick={onHandleBad}>Bad</button>
          </div>     
    )
}

