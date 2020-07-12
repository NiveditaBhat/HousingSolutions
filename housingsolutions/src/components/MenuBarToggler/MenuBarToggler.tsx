import * as React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuBar from "../MenuBar/MenuBar";
import ClickOutside from "../ClickOutside/ClickOutside";
import styles from "./MenuBarToggler.module.scss";

const MenuBarToggler: React.FunctionComponent = () => {
  const [isMenuBarVisible, setMenuBar] = React.useState(false);

  const toggleMenuBar = (): void => setMenuBar(!isMenuBarVisible);

  const closeMenuBar = (): void => setMenuBar(false);

  return (
    <ClickOutside onClickOutside={closeMenuBar}>
      <Button
        type="button"
        category="default"
        extraClasses={[styles.MenuBarToggler]}
        onClick={toggleMenuBar}
      >
        {!isMenuBarVisible ? (
          <FontAwesomeIcon icon="bars" />
        ) : (
          <FontAwesomeIcon icon="times" size="lg" />
        )}
      </Button>
      {isMenuBarVisible && <MenuBar onMenuClick={toggleMenuBar} />}
    </ClickOutside>
  );
};

export default MenuBarToggler;
