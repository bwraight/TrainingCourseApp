import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><Link to={'/courses/' + course.id}>Watch</Link></td>
      <td>{course.title}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
