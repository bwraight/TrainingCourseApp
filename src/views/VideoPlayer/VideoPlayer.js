import React, {PropTypes} from 'react';

const VideoPlayer = (course) => {
  debugger;
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by10">
        <iframe src="http://localhost:8888/h5p_wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=1" className="embed-responsive-item" allowFullScreen></iframe>
        <script src="http://localhost:8888/h5p_wordpress/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js"
                charSet="UTF-8"></script>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  course: PropTypes.object.isRequired
}

export default VideoPlayer;

