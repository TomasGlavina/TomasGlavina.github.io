import React from "react";

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  tags: any;
};

const Card: React.FC<CardProps> = ({ title, description, thumbnail, tags }) => (
  <div className="bg-maroon shadow-lg rounded-lg overflow-hidden">
    <img
      src={thumbnail}
      alt="Project Thumbnail"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl text-ctp-mauve  font-semibold ">{title}</h3>
    </div>
  </div>
);

export default Card;
