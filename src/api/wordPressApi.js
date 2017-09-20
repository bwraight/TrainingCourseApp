// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const courses_url = "http://localhost:8888/h5p_wordpress/wp-json/wp/v2/courses";

class CourseApi {
  static getAllCourses() {

    return new Promise((resolve, reject) => {
        fetch(courses_url)
          .then(response => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                reject('Status 200');
              }

              // Examine the text in the response
              response.json().then(function (data) {
                resolve (data);
              });
            }
          )
          .catch(function (err) {
            reject('Fetch Error :-S', err);
          });
    });
  }
}

export default CourseApi;
