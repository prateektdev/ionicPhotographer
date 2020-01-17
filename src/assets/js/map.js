let map;

// locations

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(23.1765, 75.7885),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        heading: 90,
        tilt: 45,
        rotateControl: true,

    });
    let infowindow = new google.maps.InfoWindow();
    let marker, i;
    /* for (i = 0; i < locations.length; i++) {
        var infowindow = new google.maps.InfoWindow();
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
        });
        if (locations[i].staging == '') {
            var info = '<a class="link" href="details/' + locations[i].id + '"><div><strong>' + locations[i].address + '<br>Capacity: ' + locations[i].capacity + ' K.L</strong></div></a>';
        } else {
            var info = '<a class="link" href="details/' + locations[i].id + '"><div><strong>' + locations[i].address + '<br>Staging: ' + locations[i].staging + ' meters<br>Capacity: ' + locations[i].capacity + ' K.L</strong></div></a>';
        }
        infowindow.setContent(info);
        infowindow.open(map, marker);
    } */
}

function rotate90() {
    let heading = map.getHeading() || 0;
    map.setHeading(heading + 90);
}

