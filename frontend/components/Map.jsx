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

const api1 = [
  {
    "id": 5,
    "title": "Example Title",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1.5,
    "problem_type": 1,
    "balance": 50,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "D7mRHrot9mjTp4m9pCDL2jBBZ3uox2d9Xt1xHm3jMB7k",
    "is_over": false,
    "location": "41.0082,28.9784",
    "check_out": 0
  },
  {
    "id": 8,
    "title": "Acil Tedavi",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1,
    "problem_type": 2,
    "balance": 800,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "7jVL6zCWQWL6WxbaHg5DaNM5tKTXeyUaVMGb4e5LtTaB",
    "is_over": false,
    "location": "39.9334,32.8597",
    "check_out": 0
  },
  {
    "id": 8,
    "title": "Acil Tedavi",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1.5,
    "problem_type": 3,
    "balance": 500,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "7jVL6zCWQWL6WxbaHg5DaNM5tKTXeyUaVMGb4e5LtTaB",
    "is_over": false,
    "location": "37.8713,32.4847",
    "check_out": 0
  },
  {
    "id": 8,
    "title": "Acil Tedavi",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1.5,
    "problem_type": 4,
    "balance": 500,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "7jVL6zCWQWL6WxbaHg5DaNM5tKTXeyUaVMGb4e5LtTaB",
    "is_over": false,
    "location": "36.8841,30.7056",
    "check_out": 0
  },
  {
    "id": 8,
    "title": "Acil Tedavi",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1.5,
    "problem_type": 5,
    "balance": 500,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "7jVL6zCWQWL6WxbaHg5DaNM5tKTXeyUaVMGb4e5LtTaB",
    "is_over": false,
    "location": "38.4192,27.1287",
    "check_out": 0
  },
  {
    "id": 8,
    "title": "Acil Tedavi",
    "describe": "Example Description",
    "personInvolved": 3,
    "emergency_level": 1.5,
    "problem_type": 6,
    "balance": 500,
    "amount": 1000,
    "created_at": "2023-12-16T00:00:00.000Z",
    "updated_at": "2023-12-16T00:00:00.000Z",
    "text": "Example Text",
    "publicid": "7jVL6zCWQWL6WxbaHg5DaNM5tKTXeyUaVMGb4e5LtTaB",
    "is_over": false,
    "location": "40.1826,29.0671",
    "check_out": 0
  }
]


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
  const [showSubButtons, setShowSubButtons] = useState(false);
  const [problemType, setProblemType] = useState(null);


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
        <button onClick={() => {setActiveTab('disease'); setProblemType(6)}} className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Hastalık</button>
        <button onClick={() => setActiveTab('emergency')} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Acil Yardım</button>
      </nav>
      {showSubButtons && activeTab === 'disaster' && (
        <nav className="flex justify-center space-x-4 my-4">
          <button  onClick={() => setProblemType(1)} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Kıyafet</button>
          <button  onClick={() => setProblemType(2)} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Yiyecek-İçecek</button>
          <button  onClick={() => setProblemType(3)} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Çadır</button>
          <button  onClick={() => setProblemType(4)} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">İş Makinesi</button>
          <button  onClick={() => setProblemType(5)} className="px-4 py-2 text-white bg-black rounded hover:bg-red-600">Elektronik Malzemeler</button>
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
                <p class="font-normal text-gray-700 dark:text-gray-400">Description: {selectedLocation.describe}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Emergency Level: {selectedLocation.emergency_level}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Person Involved: {selectedLocation.personInvolved}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Problem Type: {selectedLocation.problem_type}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Balance: {selectedLocation.balance}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Amount: {selectedLocation.amount}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Created At: {selectedLocation.created_at}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Updated At: {selectedLocation.updated_at}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Text: {selectedLocation.text}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Public ID: {selectedLocation.publicid}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Is Over: {selectedLocation.is_over ? 'Yes' : 'No'}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Check Out: {selectedLocation.check_out}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">Enlem: {parseFloat(selectedLocation.location.split(",")[0])} Boylam: {parseFloat(selectedLocation.location.split(",")[1])}</p>
              </div>
              <br />
              <br />
              <p class="font-bold text-gray-700 dark:text-gray-400">Progress: {(selectedLocation.balance / selectedLocation.amount) * 100}%</p>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(selectedLocation.balance / selectedLocation.amount) * 100}%` }}></div>
              </div>
              <button onClick={() => window.open(`https://www.google.com/maps/dir//${parseFloat(selectedLocation.location.split(",")[0])},${parseFloat(selectedLocation.location.split(",")[1])}`, "_blank")} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Yol Tarifi Al</button>
          <Link href="/odeme">
                <div style={{width:'98px'}} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Ödeme Yap</div>
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  ) : <></>

}

export default Map;


