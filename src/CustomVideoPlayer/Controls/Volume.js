import React from 'react';
import VolumeOff from '../../../public/img/svg/volume_off.svg';
import VolumeUp from '../../../public/img/svg/volume_up.svg';

export default ({ onChange, onClick, volume, muted, ariaLabelMute, ariaLabelUnmute, ariaLabelVolume }) => {
    const volumeValue = muted
        ? 0
        : +volume;
    const isSilent = muted || volume <= 0;
    return (
        <div className="volume-component">
            <button
                aria-label={isSilent
                    ? ariaLabelUnmute
                    : ariaLabelMute}
                className="volume-button"
                onClick={onClick}
                type="button">
                { isSilent
                    ? <VolumeOff
                        height={20}
                        width={20}
                        className="volume-icon"
                        fill="#fff" />
                    : <VolumeUp
                        height={20}
                        width={20}
                        className="volume-icon"
                        fill="#fff"/> }
            </button>
            <div className="volume-slider">
                <div className="volume-track">
                    <div
                        className="volume-fill"
                        style={{
                            height: `${volumeValue * 100}%`
                        }} />
                    <input
                        min="0"
                        step={0.1}
                        max="1"
                        type="range"
                        orient="vertical"
                        onChange={onChange}
                        aria-label={ariaLabelVolume}
                        className="volume-input"
                        value={volumeValue} />
                </div>
            </div>
        </div>
    );
};
