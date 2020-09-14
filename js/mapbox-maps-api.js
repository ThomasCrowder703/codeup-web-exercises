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
            zoom: 9 // starting zoom
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

        var restaurantsArray =[
            {
                name: "Villarta Grill",
                location:"18940 K St, Somerset, TX 78069"
            },
            {
                name: "Constantino's Pizza",
                location: "7300 S Loop 1604 W, Somerset, TX 78069",
            },
            {
              name:"Bill Millers",
              location: "3939 Rockport Rd, San Antonio, TX 78264"
            }

        ]

        restaurantsArray.forEach(function (restaurant) {
            console.log(restaurant.name)
        })



});
