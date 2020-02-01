import * as React from "react";

interface ClickOutsideProps {
  onClickOutside: Function;
  children?: React.ReactNode | null | undefined;
}

const useClickOutside = (ref: HTMLDivElement | null, onClickOutside: Function): void => {
  const handleClickOutside = React.useCallback(
    event => {
      if (ref && !ref.contains(event.target)) {
        onClickOutside(event);
      }
    },
    [ref]
  );

  React.useEffect(() => {
    // Bind the event listener
    ["click", "touchend"].forEach(event => {
      document.addEventListener(event, handleClickOutside, true);
    });
    return (): void => {
      // Unbind the event listener on clean up
      ["click", "touchend"].forEach(event => {
        document.removeEventListener(event, handleClickOutside, true);
      });
    };
  });
};

const ClickOutside: React.FunctionComponent<ClickOutsideProps> = ({ onClickOutside, children }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef.current, onClickOutside);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;
