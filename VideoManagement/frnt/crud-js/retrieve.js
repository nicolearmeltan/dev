$(document).ready(() => {
  var url = window.location;

  $('#GetFiles').click((event) => { 
    event.preventDefault();

  })

  function retrieveVideos(){
    $.ajax({
      type: "GET",
      url : "localhost:8081/api/files/getall",
			success: (data) => {
				//clear old data
				$("#listVideos").html("");
				
				/*
					render list of files
				*/
				$("#listVideos").append('<ul>');
				$.each(data, (index, file) => {
					$("#listVideos").append('<li><a href=' + url + 'api/files/' + file.id +'>' + file.name + '</a></li>');
				});
				$("#listVideos").append('</ul>');
			},
			error : (err) => {
				$("#listVideos").html(err.responseText);
			}
    })
  }
})