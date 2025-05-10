import React, { FC } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="relative w-full max-w-md mt-8">
      {/* Fondo de la barra */}
      <div className="w-full h-2 bg-white shadow-md rounded-full">
        {/* Barra flotante */}
        <div
          className="h-2 bg-gray-500 rounded-full"
          style={{ width: `${progress}%`, padding: '0.5px' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
