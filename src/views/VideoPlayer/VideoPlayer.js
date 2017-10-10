import React, {PropTypes} from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import MultiChoice from './Overlays/MultiChoice';

const VideoPlayer = ({course}) => {
  return (
    <div className="video-container">
      <Video muted
             controls={['Seek', 'Time', 'Volume', 'Fullscreen']}>
        <source src={course.src} type="video/mp4"/>
      </Video>
      <MultiChoice className="overlay" options={course.options}/>
    </div>
  );
}

export default VideoPlayer;

