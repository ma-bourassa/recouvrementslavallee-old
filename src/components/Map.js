import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ address }) => {
  const mapContainerRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.4461868, 45.0698815],
      zoom: 10,
      dragPan: false,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-left");
    map.scrollZoom.disable();
    const popup = new mapboxgl.Popup({ focusAfterOpen: false }).setMaxWidth("300px").setText(address);
    const marker = new mapboxgl.Marker().setLngLat([-73.4461868, 45.0698815]).setPopup(popup).addTo(map);
    marker.togglePopup();
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      <a
        className="font-sans z-50 absolute left-12 top-2 btn btn-blue py-1 px-4"
        href="https://www.google.com/maps/dir//166+Rang+Saint-Andr%C3%A9,+Saint-Bernard-de-Lacolle,+QC+J0J+1V0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon="location-arrow" color="white" className="" /> Obtenir l&apos;itinéraire
      </a>
    </div>
  );
};

Map.propTypes = {
  address: PropTypes.string,
};

export default Map;
