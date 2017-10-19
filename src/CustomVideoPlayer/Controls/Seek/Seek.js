import React from 'react';

export default ({ onChange, percentagePlayed, percentageBuffered, className, ariaLabel }) => {
  debugger;
  return (
        <div className="control-component">
            <div className="track">
                <div
                    className="buffer"
                    style={{
                        width: `${percentageBuffered || 0}%`
                    }} />
                <div
                    className="fill"
                    style={{
                        width: `${percentagePlayed || 0}%`
                    }} />
                <input
                    min="0"
                    step={1}
                    max="100"
                    type="range"
                    orient="horizontal"
                    onChange={onChange}
                    aria-label={ariaLabel}
                    className="control-input"
                    value={percentagePlayed} />
            </div>
        </div>
    );
};
