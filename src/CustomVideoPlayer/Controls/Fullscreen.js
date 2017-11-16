import React from 'react';
import FullscreenIcon from '../../../public/img/svg/fullscreen.svg';

export default ({ onClick, className, ariaLabel }) => {
    return (
        <div className="fullscreen-component">
            <button
                type="button"
                onClick={onClick}
                aria-label={ariaLabel}
                className="fullscreen-button">
                    <FullscreenIcon
                        fill="#fff"
                        className="fullscreen-icon" />
            </button>
        </div>
    );
};
