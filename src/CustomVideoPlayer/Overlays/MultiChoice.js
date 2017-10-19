import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const MultiChoice = ({options, onClick, ended}) => {

  if(ended && options && options.length > 0) {
    return (
      <div className="component">
        <div className=" multi-choice">
          {options.map(option =>
            <li key={option} className="multi-choice-button">
              <Button outline color="secondary" onClick={ (e) => onClick(e)} name={option}>{option}</Button>
            </li>
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
