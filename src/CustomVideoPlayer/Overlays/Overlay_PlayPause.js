import React, { Component } from 'react';
import PlayArrow from '../../../public/img/svg/play_arrow.svg';
import Spin from '../../../public/img/svg/spin.svg';
import Report from '../../../public/img/svg/report.svg';

export default class PlayPauseOverlay extends Component {

  renderContent() {

    const {
      error,
      paused,
      loading
      } = this.props;


    if (error) {
      return (
        <div className="overlay-play-pause-inner">
          <Report className="overlay-play-pause-icon"/>
        </div>
      );
    } else if (loading) {
      return (
        <div className="overlay-play-pause-inner">
          <Spin className="overlay-play-pause-icon"/>
        </div>
      );
    } else if (paused) {
      return (
        <div className="overlay-play-pause-inner">
          <PlayArrow className="overlay-play-pause-icon"/>
        </div>
      );
    }
  }

  render() {
    const { className, onClick } = this.props;
    return (
      <div className="component"
           onClick={onClick}>
        { this.renderContent() }
      </div>
    );
  }
}
