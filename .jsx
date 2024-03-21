import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = () => {
  const defaultCenter = { lat: -34.397, lng: 150.644 };
  
  return (
    <MapContainer>
      <LoadScript
        googleMapsApiKey="YOUR_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={defaultCenter}
          zoom={10}
        >
          {/* Child components, such as markers, can be added here */}
        </GoogleMap>
      </LoadScript>
    </MapContainer>
  );
};

function App() {
  return (
    <div>
      <h1>Welcome to our Google Maps Landing Page!</h1>
      <p>Explore the world with Google Maps.</p>
      <Map />
    </div>
  );
}

export default App;
