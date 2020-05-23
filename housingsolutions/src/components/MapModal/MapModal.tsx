import * as React from "react";
import Modal from "../Modal/Modal";
import MapContainer from "../MapContainer/MapContainer";
import { MapOptions } from "google-map-react";
import styles from "./MapModal.module.scss";

interface MapModalProps {
  position: { lat: number; lng: number };
  onClose: () => void;
  options?: MapOptions;
}

const MapModal: React.FunctionComponent<MapModalProps> = ({ position, onClose, options }) => {
  return (
    <Modal onClose={onClose} extraClasses={[styles.MapModal_close]}>
      <MapContainer position={position} options={options} extraClasses={[styles.MapModal_Map]} />
    </Modal>
  );
};

export default MapModal;
