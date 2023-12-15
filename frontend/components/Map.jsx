"use client"
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '1500px',
  height: '500px',
  borderRadius: "50px"
};

const center = {
  lat: 39.2, 
  lng: 37.2
};

const mapStyles = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      { "color": "#0000ff" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "color": "#000000" }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#afafaf" }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "color": "#343332" }
    ]
  },
  
  {
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

const locations = [
  { lat: 41.0082, lng: 28.9784 }, // Istanbul
  { lat: 39.9334, lng: 32.8597 }, // Ankara
  { lat: 39.9208, lng: 32.8541 }, // Erzurum
  { lat: 37.8713, lng: 32.4847 }, // Konya
  { lat: 36.8623, lng: 34.6415 }, // Mersin
  { lat: 38.4192, lng: 27.1287 }, // Izmir
  { lat: 41.2049, lng: 32.6277 }, // Karabük
];



const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API
  })

  const [map, setMap] = React.useState(null)

  const markerIcon = isLoaded ? {
    url: '../assets/icons/point.png',
    scaledSize: new window.google.maps.Size(30, 30), 
  } : null;

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const [selectedLocation, setSelectedLocation] = React.useState(null);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: mapStyles, disableDefaultUI: true }}
    >
      {locations.map((location, i) => (
        <Marker
          key={i}
          position={location}
          icon={markerIcon}
          onClick={() => {
            setSelectedLocation(location);
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          position={selectedLocation}
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
        >
          <div>
            <h2>Selected Location</h2>
            <p>Lat: {selectedLocation.lat}</p>
            <p>Lng: {selectedLocation.lng}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>
}

export default Map;

