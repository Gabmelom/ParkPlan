function initialize() { 
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
    
    var latlng = new google.maps.LatLng(45.4254741, -75.6920461);
    var lotAlatlng = new google.maps.LatLng(45.4261269, -75.6906387);
    var lotBlatlng = new google.maps.LatLng(45.4214847, -75.691800); 
    var options = { 
        zoom: 15, center: latlng, 
        mapTypeId: google.maps.MapTypeId.ROADMAP ,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: styles,
    }; 
    var map = new google.maps.Map(document.getElementById("map"), options); 

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
        position: latlng,
        map,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
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

    var measle = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: {
            url: "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle.png",
            size: new google.maps.Size(7, 7),
            anchor: new google.maps.Point(4, 4)
        }
    });

    lotAMarker.addListener("click", () => {
        DotNet.invokeMethodAsync("ParkPlan", "SelectParkingAsync", "CF Rideau Centre Parking");
    });

    lotBMarker.addListener("click", () => {
        DotNet.invokeMethodAsync("ParkPlan", "SelectParkingAsync", "City Hall Underground");
    });
}