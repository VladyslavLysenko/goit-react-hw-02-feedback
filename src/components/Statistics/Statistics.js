
import React from 'react'


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>{

      return (
          <>
     
              <p>Statistics</p>
              <ul className='Statistics'>
                  <li><span>Good: {good}</span></li>
                  <li> <span>Neutral: {neutral}</span></li>
                  <li><span>Bad: {bad}</span></li>
                  <li><span>Total: {total}</span></li>
                  <li><span>Positive feedback: {Math.round(positivePercentage)}%</span></li>
                 
                  
              </ul>
        </>
          

    )
  
}

