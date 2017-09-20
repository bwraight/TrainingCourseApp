import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }
}

export default CourseApi;
