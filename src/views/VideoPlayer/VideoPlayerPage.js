import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VideoPlayer from './VideoPlayer';

class VideoPlayerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  render() {
    debugger;
    return (
      <div className="container">
        <VideoPlayer course={this.state.course}/>
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
