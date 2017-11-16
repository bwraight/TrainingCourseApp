import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const MultiChoice = ({options, question, onClick, ended}) => {

  if(ended && options && options.length > 0) {
    return (
      <div className="component">
        <div className="overlay-multi-choice-inner">
          <p>{question}</p>
          {options.map(option =>
              <Button key={option} outline color="secondary" onClick={ (e) => onClick(e)} name={option}>{option}</Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div/>
  )
};

export default MultiChoice;
