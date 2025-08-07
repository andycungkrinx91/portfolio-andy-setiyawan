import React from 'react';

const Project_Card = ({ data }) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = data.desc.split(urlRegex);

    return (
        <div className="card_stylings w-full transition px-8 py-10">
            <div className="text-lg text-white font-medium">{data.title}</div>
            <div className="text-sm text-gray-400 my-2">
                {parts.map((part, index) => {
                    if (part.match(urlRegex)) {
                        return <a key={index} href={part} target="_blank" rel="noreferrer" className="text-Green hover:underline">{part}</a>
                    }
                    return <React.Fragment key={index}>{part}</React.Fragment>
                })}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {data.tech.map((item) => (
                    <span key={item} className="text-xs bg-Green/10 text-Green px-2 py-1 rounded-full">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Project_Card;
