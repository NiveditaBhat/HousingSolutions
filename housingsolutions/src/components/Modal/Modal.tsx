import * as React from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface ModalProps {
  children?: React.ReactNode | null | undefined;
  onClose: () => void;
  extraClasses?: string[];
}

const Modal: React.FunctionComponent<ModalProps> = ({ children, onClose, extraClasses }) => {
  return (
    <section className={styles.Modal}>
      <div className={classNames(styles.Modal_close, extraClasses)} onClick={onClose}>
        <FontAwesomeIcon icon="times" size="lg" />
      </div>
      <div className={styles.Modal_children}>{children}</div>
    </section>
  );
};

export default Modal;
