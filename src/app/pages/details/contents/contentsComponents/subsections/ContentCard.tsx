import React, { FC, Suspense, lazy } from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  iconName: string;
}

const ContentCard: FC<ContentCardProps> = ({ title, description, iconName }) => {
  // Import dinámico del SVG según iconName
  const IconComponent = lazy(() => import(`./svg/${iconName}`));

  return (
    <div className="w-64 flex flex-col border border-gray-400 bg-white/5 p-6 rounded-xl shadow-md justify-between text-white text-center items-center">
      <div className="flex flex-col max-w-56">
        <p className="font-bold text-xl mb-2">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex bg-red-500 w-16 h-16 items-center justify-center rounded-lg shadow mt-4">
        <Suspense fallback={null}>
          <IconComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default ContentCard;
