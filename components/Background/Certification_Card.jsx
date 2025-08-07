import React from 'react';
import { FaLink } from 'react-icons/fa';

const Certification_Card = ({ data }) => {
    return (
        <a href={data.url} target="_blank" rel="noreferrer" className="card_stylings w-full transition px-8 py-10 flex items-center justify-between">
            <span className="text-lg text-white font-medium">{data.title}</span>
            <FaLink className="text-Green" />
        </a>
    );
};

export default Certification_Card;
