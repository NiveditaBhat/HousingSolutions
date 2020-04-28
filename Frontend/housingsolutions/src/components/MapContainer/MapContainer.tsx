import * as React from "react";
import styles from "./MapContainer.module.scss";
import GoogleMapReact, { MapOptions } from "google-map-react";
import classNames from "classnames";

interface MapContainerProps {
  extraClasses?: string[];
  position: { lat: number; lng: number };
  title?: string;
  options?: MapOptions;
}

const MapContainer: React.FunctionComponent<MapContainerProps> = ({
  extraClasses,
  position,
  title,
  options,
}) => {
  const renderMarkers = (map: any, maps: any): void => {
    new maps.Marker({
      position: position,
      map,
    });
  };

  return (
    <div className={classNames(styles.MapContainer, extraClasses)}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDa7i5x92aP8bXFH3RNw0YKlIkJL5TNwo4" }}
        defaultCenter={position}
        defaultZoom={8}
        onGoogleApiLoaded={({ map, maps }): void => renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals={true}
        options={options}
      >
        {title && <span className={styles.MapContainer_marker}>{title}</span>}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
