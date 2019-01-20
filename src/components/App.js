import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Map, TileLayer } from "react-leaflet";

import { BERLIN_CENTER } from "../constants";
import { fetchData } from "../helpers";

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
  state = {
    data: [],
    error: null,
    loading: true
  };

  componentDidMount() {
    fetchData.then(data => this.setState({ data, loading: false }));
  }

  render() {
    return (
      <MapContainer>
        <GlobalStyle />
        <Map
          zoom={13}
          style={{ height: "100vh", width: "100vw" }}
          center={BERLIN_CENTER}
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
