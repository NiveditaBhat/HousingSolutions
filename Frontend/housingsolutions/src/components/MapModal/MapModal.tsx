import * as React from "react";
import Modal from "../Modal/Modal";
import MapContainer from "../MapContainer/MapContainer";
import { MapOptions } from "google-map-react";

interface MapModalProps {
  position: { lat: number; lng: number };
  extraClasses?: string[];
  onClose: () => void;
  options?: MapOptions;
}

const MapModal: React.FunctionComponent<MapModalProps> = ({
  position,
  extraClasses,
  onClose,
  options,
}) => {
  return (
    <Modal onClose={onClose}>
      <MapContainer position={position} extraClasses={extraClasses} options={options} />
    </Modal>
  );
};

export default MapModal;
