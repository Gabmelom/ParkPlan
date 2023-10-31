var map; // used by both functions

function initialize() { 
    // Remove unrelated icons from the map
    const styles = [
        {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
    ]

    // Locations of the markers and map centering
    const startlatlng = new google.maps.LatLng(45.3875885, -75.6985907);
    const destlatlng = new google.maps.LatLng(45.4254741, -75.6920461);
    const lotAlatlng = new google.maps.LatLng(45.4261269, -75.6906387);
    const lotBlatlng = new google.maps.LatLng(45.4214847, -75.691800);

    var options = { 
        zoom: 15, center: startlatlng, 
        mapTypeId: google.maps.MapTypeId.ROADMAP ,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: styles,
    }; 
    
    // Get map element or return if not found
    var mapElement = document.getElementById("map");
    if (!mapElement) {
        return;
    }

    // Initialize the map
    map = new google.maps.Map(mapElement, options); 

    // Icons for the parking areas
    const iconSize = 40
    const iconA = {
        url: "https://cdn-icons-png.flaticon.com/512/3448/3448628.png", // url
        scaledSize: new google.maps.Size(iconSize, iconSize), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(iconSize / 2, iconSize), // anchor
        labelOrigin: new google.maps.Point(80, 45)
    };
    
    const iconB = {
        url: "https://cdn-icons-png.flaticon.com/512/3448/3448628.png", // url
        scaledSize: new google.maps.Size(iconSize, iconSize), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(iconSize / 2, iconSize), // anchor
        labelOrigin: new google.maps.Point(20, 45)
    };

    // Add the markers
    const lotAMarker = new google.maps.Marker({
        position: lotAlatlng,
        map,
        icon: iconA,
        label: "CF Rideau Centre Parking"
    });

    const lotBMarker = new google.maps.Marker({
        position: lotBlatlng,
        map,
        icon: iconB,
        label: "City Hall Underground"
    });

    const desinationMarker = new google.maps.Marker({
        position: destlatlng,
        map,
        icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            labelOrigin: new google.maps.Point(75, 32),
            size: new google.maps.Size(32, 32),
            anchor: new google.maps.Point(16, 32)
        },
        label: {
            text: "CF Rideau Centre",
            color: "#C70E20",
            fontWeight: "bold"
        }
    });

    // This is the red circle at the bottom of desination marker
    var measle = new google.maps.Marker({
        position: destlatlng,
        map: map,
        icon: {
            url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png",
            size: new google.maps.Size(7, 7),
            anchor: new google.maps.Point(4, 4)
        }
    });

    // Select the parking area when the marker is clicked
    lotAMarker.addListener("click", () => {
        DotNet.invokeMethodAsync("ParkPlan", "SelectParkingAsync", "CF Rideau Centre Parking");
    });

    lotBMarker.addListener("click", () => {
        DotNet.invokeMethodAsync("ParkPlan", "SelectParkingAsync", "City Hall Underground");
    });
}

// Recenter the map to the destination
function updateLocation() {
    var destlatlng = new google.maps.LatLng(45.4254741, -75.6920461);

    map.setCenter(destlatlng);
}