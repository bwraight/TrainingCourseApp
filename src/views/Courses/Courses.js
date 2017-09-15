import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import CourseList from './CourseList';

class Courses extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <CourseList courses={this.props.courses}/>
      </div>
    )
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(Courses);
