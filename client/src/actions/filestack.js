import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE
} from '../constants/filestack';

// Triggered by the upload button
function uploadPicture() {
  return {
    type: UPLOAD_PICTURE
  };
}

// It carries the picture url to be added to the state
function uploadPictureSuccess(url) {
  return {
    type: UPLOAD_PICTURE_SUCCESS,
    url
  };
}

// In case of failure
function uploadPictureFailure() {
  return {
    type: UPLOAD_PICTURE_FAILURE
  };
}

export { uploadPicture, uploadPictureSuccess, uploadPictureFailure };
