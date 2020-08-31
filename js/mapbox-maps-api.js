mapboxgl.accessToken = mapboxToken
// geocode("7335 S Zarzamora St, San Antonio, TX 78224", mapboxToken).then(function (result) {
//     console.log(result)
// })

geocode("7335 S Zarzamora St, San Antonio, TX 78224", mapboxToken)
    .then(function (result) {
        console.log(result)

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
            center: result, // starting position [lng, lat]
            zoom: 17 // starting zoom
        });

        var markerOptions={
            color: "blueviolet",
            draggable:true,

        }

        var popup = new mapboxgl.Popup({})
            .setText("Mama Margies Mexican Restaurant");


        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .addTo(map)
            .setPopup(popup)

    });

