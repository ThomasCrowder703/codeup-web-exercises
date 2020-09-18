  mapboxgl.accessToken = weatherMapToken
  //
  geocode("300 Alamo Plaza, San Antonio, TX 78205", weatherMapToken).then(function (result) {
      console.log(result);
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: result, // starting position [lng, lat]
          zoom: 9 // starting zoom

      })
  });



  document.getElementById('userSubmit').addEventListener('click', function(e) {
      e.preventDefault();
      var newCity = (document.getElementById("userCity").value);

      $("#current-city").empty().append("Current City: " + newCity)

      geocode(newCity, weatherMapToken).then(function (result) {
          console.log(result);
          var map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
              center: result, // starting position [lng, lat]
              zoom: 9 // starting zoom

          })
          var markerOptions = {
              color: "red",
              draggable: true,
          }

          var marker = new mapboxgl.Marker(markerOptions)
              .setLngLat(result)
              .addTo(map)

      });

  //
  //
      //ajax begins
      $.get("http://api.openweathermap.org/data/2.5/forecast/", {
          "APPID": weatherAPI,
          "q": newCity,
          "units": "imperial"
      }).done(function (data) {

          console.log(data)
          $("#date").empty().append(data.list[0].dt_txt);
          $("#tempToday").empty().append(data.list[0].main.temp);
          $("#descriptionToday").empty().append("Description: " + data.list[0].weather[0].description);
          $("#humidToday").empty().append("Humidity: " + data.list[0].main.humidity + "%");
          $("#windToday").empty().append("Wind: " + Math.floor(data.list[0].wind.speed) + " mph");
          $("#pressureToday").empty().append("Pressure: " + data.list[0].main.pressure)


          $("#date2").empty().append(data.list[2].dt_txt);
          $("#temp2").empty().append(data.list[2].main.temp);
          $("#description2").empty().append("Description: " + data.list[2].weather[0].description);
          $("#humidity2").empty().append("Humidity:" + data.list[2].main.humidity);
          $("#wind2").empty().append("Wind: " + Math.floor(data.list[2].wind.speed));
          $("#pressure2").empty().append("Pressure: " + data.list[2].main.pressure);

          $("#date3").empty().append(data.list[10].dt_txt);
          $("#temp3").empty().append(data.list[10].main.temp);
          $("#description3").empty().append("Description: " + data.list[10].weather[0].description);
          $("#humidity3").empty().append("Humidity:" + data.list[10].main.humidity);
          $("#wind3").empty().append("Wind: " + Math.floor(data.list[10].wind.speed));
          $("#pressure3").empty().append("Pressure: " + data.list[10].main.pressure);

          $("#date4").empty().append(data.list[18].dt_txt);
          $("#temp4").empty().append(data.list[18].main.temp);
          $("#description4").empty().append("Description: " + data.list[18].weather[0].description);
          $("#humidity4").empty().append("Humidity:" + data.list[18].main.humidity);
          $("#wind4").empty().append("Wind: " + Math.floor(data.list[18].wind.speed));
          $("#pressure4").empty().append("Pressure: " + data.list[18].main.pressure);

          $("#date5").empty().append(data.list[26].dt_txt);
          $("#temp5").empty().append(data.list[26].main.temp);
          $("#description5").empty().append("Description: " + data.list[26].weather[0].description);
          $("#humidity5").empty().append("Humidity:" + data.list[26].main.humidity);
          $("#wind5").empty().append("Wind: " + Math.floor(data.list[26].wind.speed));
          $("#pressure5").empty().append("Pressure: " + data.list[26].main.pressure);
      });

      $("li").css("list-style", "none");

      $("#currentCity").empty()

  });







