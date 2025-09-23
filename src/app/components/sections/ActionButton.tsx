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
                className="mt-6 w-fit font-bold text-md text-white px-8 py-2 rounded-r-xl bg-red-600 hover:bg-red-500 transition duration-300 hover:shadow-md"
                onClick={onClick}
            >
                {label}
            </button>}
            {align == "right" && <button
                className="mt-6 w-fit font-bold text-md text-white px-8 py-2 rounded-l-xl bg-red-600 hover:bg-red-500 transition duration-300 hover:shadow-md"
                onClick={onClick}
            >
                {label}
            </button>}
        </>
    );
};

export default ActionButton;

