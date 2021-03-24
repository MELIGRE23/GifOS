var image = document.getElementById('imageGif')

function captureCamera(callback) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function (camera) {
    callback(camera);
  }).catch(function (error) {
    alert('Unable to capture your camera. Please check console logs.');
    console.error(error);
  });
}

function stopRecordingCallback() {
  image.src = URL.createObjectURL(recorder.getBlob());
  recorder.camera.stop();
  recorder.destroy();
  recorder = null;
}

var recorder; // globally accessible

document.getElementById('btn-start-recording').onclick = function () {
  this.disabled = true;
  captureCamera(function (camera) {
    document.querySelector('h1').innerHTML = 'Waiting for Gif Recorder to start...';
    recorder = RecordRTC(camera, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function () {
        document.querySelector('h1').innerHTML = 'Gif recording started.';
      },
      onGifPreview: function (gifURL) {
        image.src = gifURL;
      }
    });

    recorder.startRecording();

    // release camera on stopRecording
    recorder.camera = camera;

    document.getElementById('btn-stop-recording').disabled = false;
  });
};

document.getElementById('btn-stop-recording').onclick = function () {
  this.disabled = true;
  recorder.stopRecording(stopRecordingCallback);
};