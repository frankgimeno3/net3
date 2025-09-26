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
                className="md:mt-24 mt-6 w-fit font-bold text-2xl text-white px-5 pl-10 py-3 rounded-r-xl bg-red-600 hover:bg-red-500 transition duration-300 hover:shadow-md"
                onClick={onClick}
            >
                {label}
            </button>}
             
        </>
    );
};

export default ActionButton;

