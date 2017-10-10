// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
import * as urls from './urls';

class CourseApi {
  static getAllCourses() {

    return new Promise((resolve, reject) => {
        fetch(urls.COURSE_URL)
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
