import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "Big_Buck_Bunny_Trailer_1",
    title: "Big Buck Bunny Trailer 1",
    states: [
      {
        'state': 'OPEN',
        'src': "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        'question': 'The door is open. What action do you want to perform?',
        'transitions': [
          {'transition': 'Close the door.', 'correct' : true, 'transitionState': 'CLOSED'}
        ]
      },
      {
        'state': 'CLOSED',
        'src': "https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4",
        'question': 'The door is closed. What action do you want to perform?',
        'transitions': [
          {'transition': 'Open the door.', 'correct' : false, 'transitionState': 'OPEN'},
          {'transition': 'Lock the door.', 'correct' : true, 'transitionState': 'LOCKED'}
        ]
      },
      {
        'state': 'LOCKED',
        'src': "http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
        'question': 'The door is locked. What action do you want to perform?',
        'transitions': [
          {'transition': 'Unlock the door.', 'correct' : true, 'transitionState': 'CLOSED'}
        ]
      }
    ]
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
