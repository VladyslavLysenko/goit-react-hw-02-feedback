import React from 'react';
import PropTypes from 'prop-types';
import {BtnList,Btn} from './FeedbackOptions.styled'
export const FeedbackOptions = ({options, onLeaveFeedback }) => (
  
    <BtnList>
      {options.map(item => (
        <li key={item.name}>
          <Btn type="button" onClick={onLeaveFeedback} name={item.name} >
            {item.value}
          </Btn>
        </li>
      ))}
    </BtnList>
  
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};