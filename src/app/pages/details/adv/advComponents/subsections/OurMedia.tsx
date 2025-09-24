import React, { FC } from 'react';

interface OurMediaProps {
      lang: 'ENG' | 'ESP';
}

const OurMedia: FC<OurMediaProps> = ({lang }) => {
  return (
    <div>OurMedia</div>
  );
};

export default OurMedia;