import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><Link to={'/courses/' + course.id}>Watch</Link></td>
      <td>{course.acf.title}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
