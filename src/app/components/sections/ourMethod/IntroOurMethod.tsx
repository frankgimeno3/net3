import React, { FC } from 'react';

interface IntroOurMethodProps {
  lang:string
}

const IntroOurMethod: FC<IntroOurMethodProps> = ({lang}) => {
  return (
    <div>
        <p>Our Method</p>
        <p>{lang}</p>

    </div>
  );
};

export default IntroOurMethod;