import * as React from "react";
import styles from "./CompanyStats.module.scss";
import Counter from "../Counter/Counter";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { companyStats } from "../../utils/data";
import { checkVisibility } from "../../utils/CheckVisibility";
import { throttle } from "lodash-es";

const CompanyStats: React.FunctionComponent = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [animateCounter, setAnimation] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", throttle(counterUp, 250));
  });

  const counterUp = React.useCallback(() => {
    const isVisible = ref.current && checkVisibility(ref.current);
    if (isVisible) setAnimation(true);
  }, [setAnimation]);

  return (
    <section className={styles.CompanyStats} ref={ref}>
      <div className={styles.CompanyStats_wrapper}>
        {companyStats.map(stat => (
          <Counter
            key={stat.icon}
            endNumber={stat.endNumber}
            text={stat.category}
            icon={stat.icon as IconName}
            animateCounter={animateCounter}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
