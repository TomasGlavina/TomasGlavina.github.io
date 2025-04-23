import React from 'react';

type CardProps = {
    title: string;
    description: string;
    thumbnail: any;
};

const Card: React.FC<CardProps> = ({title, description, thumbnail}) => (
        <div className="bg-maroon shadow-lg rounded-lg overflow-hidden">
            <img
                src={thumbnail}
                alt="Project Thumbnail"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl text-black  font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );

export default Card;
