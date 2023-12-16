"use client"
import React, { useState,useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '1600px',
  height: '600px',
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

const locations1 = [
  { lat: 41.0082, lng: 28.9784 }, // Istanbul
  { lat: 39.9334, lng: 32.8597 }, // Ankara
  { lat: 39.9208, lng: 32.8541 }, // Erzurum
  { lat: 37.8713, lng: 32.4847 }, // Konya
  { lat: 36.8623, lng: 34.6415 }, // Mersin
  { lat: 38.4192, lng: 27.1287 }, // Izmir
  { lat: 41.2049, lng: 32.6277 }, // Karabük
];
const locations2 = [
  { lat: 41.0082, lng: 28.9784 }, // Istanbul
  { lat: 39.9334, lng: 32.8597 }, // Ankara
  { lat: 39.9208, lng: 32.8541 }, // Erzurum
  { lat: 37.8713, lng: 32.4847 }, // Konya
  { lat: 36.8623, lng: 34.6415 }, // Mersin
];
const locations3 = [
  { lat: 41.0082, lng: 28.9784 }, // Istanbul
  { lat: 39.9334, lng: 32.8597 }, // Ankara
  { lat: 39.9208, lng: 32.8541 }, // Erzurum
  { lat: 37.8713, lng: 32.4847 }, // Konya
  { lat: 36.8623, lng: 34.6415 }, // Mersin
  { lat: 38.4192, lng: 27.1287 }, // Izmir
];



const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API
  })

  useEffect(() => {
    const imgElement = document.querySelector('img[alt="Google"]');
    if (imgElement) {
      imgElement.remove();
    }
  }, []);

  const [map, setMap] = React.useState(null)

  const markerIcon = isLoaded ? {
    url: '../assets/icons/point.png',
    scaledSize: new window.google.maps.Size(30, 30),
  } : null;

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const [activeTab, setActiveTab] = useState('disaster');

  const [selectedLocation, setSelectedLocation] = React.useState(null);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    
    <>
        <nav className="flex justify-center space-x-4 my-4">
          <button onClick={() => setActiveTab('disaster')} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Doğal Afet</button>
          <button onClick={() => setActiveTab('disease')} className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Hastalık</button>
          <button onClick={() => setActiveTab('emergency')} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Acil</button>
        </nav>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: mapStyles, disableDefaultUI: true
        }}
      >
        
        {(activeTab === 'disaster' ? locations1 : activeTab === 'disease' ? locations2 : locations3).map((location, i) => (
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
              <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bilgi Kartı</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Enlem: {selectedLocation.lat} Boylam: {selectedLocation.lng}</p>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
    ) : <></>

}

export default Map;


