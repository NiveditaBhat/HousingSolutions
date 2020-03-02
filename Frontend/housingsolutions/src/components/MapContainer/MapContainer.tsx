import * as React from "react";
import styles from "./MapContainer.module.scss";
import GoogleMapReact from "google-map-react";

const MapContainer: React.FunctionComponent = () => {
  const renderMarkers = (map: any, maps: any) => {
    new maps.Marker({
      position: { lat: 51.43337, lng: 5.47727 },
      map,
      title: "HousingSolutions",
    });
  };

  return (
    <div className={styles.MapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDa7i5x92aP8bXFH3RNw0YKlIkJL5TNwo4" }}
        defaultCenter={{
          lat: 51.43337,
          lng: 5.47727,
        }}
        defaultZoom={8}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        <span className={styles.MapContainer_marker}>HousingSolutions</span>
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
