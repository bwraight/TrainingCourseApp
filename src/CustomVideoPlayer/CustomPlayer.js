import React from 'react';
import PropTypes from 'prop-types';
import videoConnect from 'react-html5video';
import copy from './copy';
import MultiChoice from './Overlays/MultiChoice';
import PlayPause from './Overlays/PlayPause';
import Seek from './Controls/Seek/Seek';
import {
  setVolume,
  showTrack,
  toggleTracks,
  toggleMute,
  togglePause,
  setCurrentTime,
  toggleFullscreen,
  getPercentagePlayed,
  getPercentageBuffered
} from './api';

const CustomPlayer = ({videoSrc, options, video, children, onPlayPauseClick, onSeekChange, onMultiChoiceClick, ...restProps }) => {
  return (
    <div className="video-container">
      <video autoPlay muted className="video" src={videoSrc} {...restProps}>
        { children }
      </video>
      <PlayPause onClick={onPlayPauseClick} {...video}/>
      <MultiChoice options={options} onClick={onMultiChoiceClick} {...video}/>
      <div className="controls">
        <Seek
          ariaLabel={copy.seek}
          className="seek"
          onChange={onSeekChange}
          {...video} />
      </div>
    </div>
  )
};

export default videoConnect(CustomPlayer,
  ({ networkState, readyState, error, ...restState }) => ({
    video: {
      readyState,
      networkState,
      error: error || networkState === 3,
      percentagePlayed: getPercentagePlayed(restState),
      percentageBuffered: getPercentageBuffered(restState),
      ...restState
    }
  }),
  (videoEl, state) => ({
    onMultiChoiceClick: (e) => multiChoiceClick(e, videoEl, state),
    onPlayPauseClick: () => togglePause(videoEl, state),
    onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
  })
);
