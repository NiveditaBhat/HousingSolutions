import * as React from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  children?: React.ReactNode | null | undefined;
  onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({ children, onClose }) => {
  return (
    <section className={styles.Modal}>
      <div className={styles.Modal_close} onClick={onClose}>
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
      {children}
    </section>
  );
};

export default Modal;
