$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var formData = {
      query: $("#ip").val(),
    };
	var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
	var token = "3b262e0e81c99cffffbc00169a301ac7ab90c7fe";

  fetch(url + query, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    }
  })

  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
  });
});