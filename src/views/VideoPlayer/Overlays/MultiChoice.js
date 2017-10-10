import React, {PropTypes} from 'react';
import {Button} from 'reactstrap';

const MultiChoice = ({options}) => {
  debugger;
  return (
    <div className="multi-choice">
      {options.map(option =>
        <div className="multi-choice-button">
          <Button outline color="secondary">{option}</Button>
        </div>
      )}
    </div>
  );
};

export default MultiChoice;
