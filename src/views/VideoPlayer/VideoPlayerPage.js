import React, {Input} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CustomPlayer from '../../CustomVideoPlayer/CustomPlayer';
import Stately from 'stately.js';

class VideoPlayerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      fsm: Object.assign({}, this.setupFSM(this.props.course)),
    };

    this.changeState = this.changeState.bind(this);
    this.setupFSM = this.setupFSM.bind(this);
    this.getMultiChoiceOptions = this.getMultiChoiceOptions.bind(this);
    this.getVideoSrc = this.getVideoSrc.bind(this);
    this.statesFormattedForStately = this.statesFormattedForStately.bind(this);
    this.getMultiChoiceQuestion = this.getMultiChoiceQuestion.bind(this);

  }

  setupFSM(course) {
    debugger;
    if (course.states) {
      return Stately.machine(this.statesFormattedForStately(course.states));
    }
  }

  statesFormattedForStately(states) {
    let stringStates = "";
    states.forEach(state => {
      stringStates += ( JSON.stringify(state.state) + ':{' + state.transitions.map(transition => {
        return JSON.stringify(transition.transition) + ': ' + JSON.stringify(transition.transitionState)
      }) + '},' )
    });

    return JSON.parse('{' + stringStates.substr(0, stringStates.length - 1) + '}');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course),
        fsm: Object.assign({}, this.setupFSM(nextProps.course))
      });
    }
  }

  getVideoSrc() {
    if (this.state.fsm.getMachineState) {
      let videoSrc = this.state.course.states.filter(
        source => source.state == this.state.fsm.getMachineState()
      );
      return videoSrc[0].src;
    }
  }

  getMultiChoiceOptions() {
    if (this.state.fsm.getMachineEvents) {
      return this.state.fsm.getMachineEvents();
    }
  }

  getMultiChoiceQuestion() {
    if (this.state.fsm.getMachineState) {
      let videoSrc = this.state.course.states.filter(
        source => source.state == this.state.fsm.getMachineState()
      );
      return videoSrc[0].question;
    }
  }

  changeState(e) {
    console.log(e.target.name);
    this.state.fsm[e.target.name]();
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
        <CustomPlayer videoSrc={this.getVideoSrc()} question={this.getMultiChoiceQuestion()} options={this.getMultiChoiceOptions()}
                      onMultiChoiceClick={this.changeState}/>
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
