import React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  tags?: string[];
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  thumbnail,
  tags,
  className,
  imageClassName,
  contentClassName,
}) => (
  <div
    className={cn(
      "bg-ctp-surface0 border border-ctp-surface2 shadow-md rounded-md overflow-hidden",
      className
    )}
  >
    <img
      src={thumbnail}
      alt="Project Thumbnail"
      className={cn("w-full h-32 object-cover", imageClassName)}
    />
    <div className={cn("p-4", contentClassName)}>
      <h3 className="text-base text-ctp-green font-semibold">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-ctp-subtext0">{description}</p>
      )}
      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ctp-overlay0 px-2.5 py-1 text-xs font-semibold text-ctp-text"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

export default Card;
