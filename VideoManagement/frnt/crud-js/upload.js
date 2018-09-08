$(document).ready(() => {
  $("#Submit").click((event) => {
    event.preventDefault();
    uploadVideo();
  });
});

function uploadVideo() {
  var form = document.getElementById("formUpload");
  var data = new FormData(form);

  $.ajax({
    type: "POST",
    //enctype: 'multipart/form-data',
    url: "http://localhost:8081/api/uploadfile",
    enctype: "multipart/form-data",
    data: data,
    processData: false, //prevent jQuery from automatically transforming the data into a query string
    contentType: false,
    cache: false,
    success: (data) => {
      $("#listVideos").text(data);
    },
    error: (e) => {
      console.log(JSON.stringify(e));
    }
  })
}