import { useEffect, useState } from "react";

const useMedia = (query: string, defaultState = false): boolean => {
  const [state, setState] = useState(defaultState);
  // change target when inside iframe
  const target = window.parent || window;

  useEffect(() => {
    let mounted = true;
    const mql = target.matchMedia(query);
    const onChange = (): void => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return (): void => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query, target]);

  return state;
};

export default useMedia;
