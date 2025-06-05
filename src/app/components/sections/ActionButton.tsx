import React, { FC } from 'react';

interface ActionButtonProps {
    label: string;
    onClick: () => void;
    align: string;
}

const ActionButton: FC<ActionButtonProps> = ({ label, onClick, align }) => {
    return (
        <>
            {align == "left" && <button
                className="mt-6 w-fit  text-md text-white px-8 py-2 rounded-r-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md"
                onClick={onClick}
            >
                {label}
            </button>}
            {align == "right" && <button
                className="mt-6 w-fit  text-md text-white px-8 py-2 rounded-l-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md"
                onClick={onClick}
            >
                {label}
            </button>}
        </>
    );
};

export default ActionButton;

