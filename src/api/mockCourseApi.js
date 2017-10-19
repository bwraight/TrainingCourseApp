import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "Big_Buck_Bunny_Trailer_1",
    title: "Big Buck Bunny Trailer 1",
    videoSources: [
      { 'state': 'OPEN', 'src': "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" },
      { 'state': 'CLOSED', 'src': "https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" },
      { 'state': 'LOCKED', 'src': "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" }
    ],
    statesObject: {
      'OPEN': {
        'close': 'CLOSED'
      },
      'CLOSED': {
        'open': 'OPEN',
        'lock': 'LOCKED'
      },
      'LOCKED': {
        'unlock': 'CLOSED'
      }
    }
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
