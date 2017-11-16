import React from 'react';
import PlayArrow from '../../../public/img/svg/play_arrow.svg';
import Pause from '../../../public/img/svg/pause.svg';

export default ({ onClick, paused, ariaLabelPlay, ariaLabelPause }) => {
    return (
        <div className="play-pause-component">
            <button
                className="play-pause-button"
                onClick={onClick}
                aria-label={ paused
                    ? ariaLabelPlay
                    : ariaLabelPause }
                type="button">
                { paused
                    ? <PlayArrow
                        className="play-pause-icon"
                        fill="#fff" />
                    : <Pause
                        className="play-pause-icon"
                        fill="#fff" /> }
            </button>
        </div>
    );
};
