import React from 'react';
import PropTypes from 'prop-types';
import videoConnect from 'react-html5video';
import copy from './copy';
import MultiChoice from './Overlays/Overlay_MultiChoice';
import Overlay_PlayPause from './Overlays/Overlay_PlayPause';
import Seek from './Controls/Seek';
import Volume from './Controls/Volume';
import Time from './Controls/Time';
import PlayPause from './Controls/PlayPause';
import Fullscreen from './Controls/Fullscreen';

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

const CustomPlayer = ({
  videoSrc,
  options,
  question,
  video,
  children,
  onPlayPauseClick,
  onSeekChange,
  onFullscreenClick,
  onVolumeChange,
  onVolumeClick,
  onMultiChoiceClick,
  ...restProps
  }) => {
  return (
    <div className="video-container">
      <video autoPlay muted className="video" src={videoSrc} {...restProps}>
        { children }
      </video>
      <MultiChoice options={options} question={question} onClick={onMultiChoiceClick} {...video}/>
      <div className="controls">
        <PlayPause
          ariaLabelPlay={copy.play}
          ariaLabelPause={copy.pause}
          onClick={onPlayPauseClick}
          {...video} />
        <Seek
          ariaLabel={copy.seek}
          onChange={onSeekChange}
          {...video} />
        <Time
          {...video} />
        <Volume
          onClick={onVolumeClick}
          onChange={onVolumeChange}
          ariaLabelMute={copy.mute}
          ariaLabelUnmute={copy.unmute}
          ariaLabelVolume={copy.volume}
          {...video} />
        <Fullscreen
          ariaLabel={copy.fullscreen}
          onClick={onFullscreenClick}
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
    onFullscreenClick: () => toggleFullscreen(videoEl.parentElement),
    onVolumeClick: () => toggleMute(videoEl, state),
    onPlayPauseClick: () => togglePause(videoEl, state),
    onVolumeChange: (e) => setVolume(videoEl, state, e.target.value),
    onSeekChange: (e) => setCurrentTime(videoEl, state, e.target.value * state.duration / 100)
  })
);
