import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Map, TileLayer } from "react-leaflet";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const MapContainer = styled.main`
  height: 100vh;
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <MapContainer>
        <GlobalStyle />
        <Map
          zoom={13}
          style={{ height: "100vh", width: "100vw" }}
          center={[52.520008, 13.404954]}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            accessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
            id="mapbox.streets"
          />
        </Map>
      </MapContainer>
    );
  }
}

export default App;
