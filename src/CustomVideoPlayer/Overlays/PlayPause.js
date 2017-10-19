import React, { Component } from 'react';
import PlayArrow from '../../../public/img/svg/play_arrow.svg';
import Spin from '../../../public/img/svg/spin.svg';
import Report from '../../../public/img/svg/report.svg';

export default class PlayPauseOverlay extends Component {

  renderContent() {

    const {
      error,
      paused,
      loading,
      ended
      } = this.props;


    if (error) {
      return (
        <div className="play-pause-inner">
                    <Report className="play-pause-icon" />
                </div>
      );
    } else if (loading) {
      return (
        <div className="play-pause-inner">
                    <Spin className="play-pause-icon"/>
                </div>
      );
    }
    else if (ended) {
        return (
          <div/>
        );
    } else if (paused) {
      return (
        <div className="play-pause-inner">
                    <PlayArrow className="play-pause-icon" />
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
