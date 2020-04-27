import * as React from "react";
import styles from "./LoadMore.module.scss";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

interface LoadMoreProps {
  loadedProperties?: number;
  maxProperties?: number;
  onLoadMore: () => void;
  shouldNavigate: boolean;
}

const LoadMore: React.FunctionComponent<LoadMoreProps> = ({
  loadedProperties = 0,
  maxProperties = 0,
  onLoadMore,
  shouldNavigate,
}) => {
  const loadMoreButton = (
    <Button
      category="primary"
      type="button"
      label="Load more"
      onClick={onLoadMore}
      extraClasses={[styles.LoadMore_button]}
    />
  );
  return shouldNavigate ? (
    <section className={styles.LoadMore}>{loadMoreButton}</section>
  ) : loadedProperties !== maxProperties ? (
    <section className={styles.LoadMore}>
      <ProgressBar value={loadedProperties} max={maxProperties} type="properties" />
      {loadMoreButton}
    </section>
  ) : null;
};

export default LoadMore;
