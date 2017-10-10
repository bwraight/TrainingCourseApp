import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "Big_Buck_Bunny_Trailer_1",
    title: "Big Buck Bunny Trailer 1",
    src: "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
    options: ["option1", "option2"]
  },
  {
    id: "Big_Buck_Bunny_Trailer_2",
    title: "Big Buck Bunny Trailer 2",
    src: "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
    options: ["option1", "option2", "option3", "option4"]
  },
  {
    id: "Big_Buck_Bunny_Trailer_3",
    title: "Big Buck Bunny Trailer 3",
    src: "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
    options: ["option1", "option2", "option3"]
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
