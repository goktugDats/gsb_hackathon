"use client"
import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Link from 'next/link';

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
      { "visibility": "on" },
      { "color": "#000000" },

    ]
  },

  {
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  }
];







const Map = () => {

  const [api, setApi] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/wisher/all');
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      const data = await response.json();
      setApi(data);
    }

    fetchData();
  }, []);
  console.log(api);
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

  const [activeTab, setActiveTab] = useState('disaster');
  const [showSubButtons, setShowSubButtons] = useState(false);
  const [problemType, setProblemType] = useState('2');


  const [selectedLocation, setSelectedLocation] = React.useState(null);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (

    <>
      <nav className="flex justify-center space-x-4 my-4">
        <button onClick={() => {
          setActiveTab('disaster');
          setShowSubButtons(!showSubButtons);
        }} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Doğal Afet</button>
        <button onClick={() => { setActiveTab('disease'); setProblemType('6') }} className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Hastalık</button>
        <button onClick={() => {setActiveTab('emergency'); setProblemType('7')}} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Acil Yardım</button>
      </nav>
      {showSubButtons && activeTab === 'disaster' && (
        <nav className="flex justify-center space-x-4 my-4">
          <button onClick={() => setProblemType('1')} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Kıyafet</button>
          <button onClick={() => setProblemType('2')} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Yiyecek-İçecek</button>
          <button onClick={() => setProblemType('3')} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Çadır</button>
          <button onClick={() => setProblemType('4')} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">İş Makinesi</button>
          <button onClick={() => setProblemType('5')} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Elektronik Malzemeler</button>
        </nav>
      )}
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
        {api.filter(item => item.problem_type === problemType).map((item, i) => {
          const location = {
            lat: parseFloat(item.location.split(",")[0]),
            lng: parseFloat(item.location.split(",")[1])
          };
          return (
            <Marker
              key={i}
              position={location}
              icon={markerIcon}
              onClick={() => {
                setSelectedLocation(item);
              }}
            />
          );
        })}

        {selectedLocation && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedLocation.location.split(",")[0]),
              lng: parseFloat(selectedLocation.location.split(",")[1])
            }}
            onCloseClick={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedLocation.title}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Açıklama: {selectedLocation.describe}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Öncelik Seviyesi: {selectedLocation.emergency_level}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">İlgili Kişi: {selectedLocation.personInvolved}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Problem Tipi: {selectedLocation.problem_type}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Toplanan: {selectedLocation.balance}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Hedef: {selectedLocation.amount}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Oluşturma Tarihi: {selectedLocation.created_at}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Değiştirme Tarihi: {selectedLocation.updated_at}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Public ID: {selectedLocation.publicid}</p>
                {/* <p class="font-normal text-gray-700 dark:text-gray-400">: {selectedLocation.is_over ? 'Yes' : 'No'}</p> */}
                <p class="font-normal text-gray-700 dark:text-gray-400">Çekilen Miktar: {selectedLocation.check_out}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Enlem: {parseFloat(selectedLocation.location.split(",")[0])} Boylam: {parseFloat(selectedLocation.location.split(",")[1])}</p>
              </div>
              <br />
              <br />
              <p class="font-bold text-gray-700 dark:text-gray-400">İlerleme: {(selectedLocation.balance / selectedLocation.amount) * 100}%</p>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(selectedLocation.balance / selectedLocation.amount) * 100}%` }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => window.open(`https://www.google.com/maps/dir//${parseFloat(selectedLocation.location.split(",")[0])},${parseFloat(selectedLocation.location.split(",")[1])}`, "_blank")} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Yol Tarifi Al</button>
                <Link href="/odeme">
                  <div className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Ödeme Yap</div>
                </Link>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  ) : <></>

}

export default Map;


