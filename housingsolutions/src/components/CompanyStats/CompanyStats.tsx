import * as React from "react";
import styles from "./CompanyStats.module.scss";
import Counter from "../Counter/Counter";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { companyStats } from "../../utils/data";
import { checkVisibility } from "../../utils/CheckVisibility";
import { throttle } from "lodash-es";
import houses from "../../static/images/houses-night.jpg";

const CompanyStats: React.FunctionComponent = () => {
  const ref = React.useRef<HTMLElement>(null);
  const [animateCounter, setAnimation] = React.useState(false);

  const counterUp = (): void => {
    const isVisible = ref.current && checkVisibility(ref.current);
    if (isVisible) setAnimation(true);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", throttle(counterUp, 250));
    return (): void => {
      window.removeEventListener("scroll", throttle(counterUp, 250));
    };
  });

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
      <img src={houses} alt="houses-background" className={styles.CompanyStats_background} />
    </section>
  );
};

export default CompanyStats;
