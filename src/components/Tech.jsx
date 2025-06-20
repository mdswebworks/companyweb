import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
     <h1 className={`${styles.sectionSubText} text-center`}>
  Tools and Platforms We Specialize In
</h1>
      <br>
      </br>
      <br>
      </br>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
