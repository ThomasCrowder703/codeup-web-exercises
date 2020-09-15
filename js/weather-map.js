  mapboxgl.accessToken = weatherMapToken

  geocode("300 Alamo Plaza, San Antonio, TX 78205", weatherMapToken).then(function (result) {
        console.log(result);
      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: result, // starting position [lng, lat]
          zoom: 9 // starting zoom

      })
  });