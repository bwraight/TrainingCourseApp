import React, {PropTypes, Input} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomPlayer from './VideoPlayer';
import StateMachine from 'javascript-state-machine';

class VideoPlayerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      fsm: new StateMachine({
        init: 'solid',
        transitions: [
          { name: 'melt',     from: 'solid',  to: 'liquid' },
          { name: 'freeze',   from: 'liquid', to: 'solid'  },
          { name: 'vaporize', from: 'liquid', to: 'gas'    },
          { name: 'condense', from: 'gas',    to: 'liquid' }
        ],
        methods: {
          onMelt:     function() { console.log('I melted')    },
          onFreeze:   function() { console.log('I froze')     },
          onVaporize: function() { console.log('I vaporized') },
          onCondense: function() { console.log('I condensed') }
        }
      })
    };

    this.changeState = this.changeState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  changeState() {
    console.log(this.state.fsm.state);
    this.state.fsm.melt();
    console.log(this.state.fsm.state);
  }

  render() {
    return (
      <div className="container">
        <CustomPlayer
          autoPlay
          src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"/>
      </div>
    );
  }
}

function getCourseById(courses, courseId) {
  let course = courses.filter(course => course.id == courseId);
  if (course.length) {
    return course[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {

  let course = {};

  const courseId = ownProps.match.params.id;

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course
  }
}

VideoPlayerPage.propTypes = {
  course: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(VideoPlayerPage);
