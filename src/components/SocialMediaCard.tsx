import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { MainData } from "../data";
import { Down, Up } from "./icons";

type SocialMediaCardProps = {
  item: MainData;
};

export const SocialMediaCard: FC<SocialMediaCardProps> = ({
  item: {
    Icon,
    borderBackground,
    caption,
    difference,
    isPositive,
    username,
    value,
  },
}) => {
  const { theme } = useAppContext();
  return (
    <div>
      <div
        className={`pt-1 ${borderBackground} rounded-t overflow-hidden`}
      ></div>
      <div
        className={`${theme.cardBackground} hover:filter hover:cursor-pointer w-full flex flex-col justify-between items-center px-10 py-6 duration-150 transition-all space-y-4 rounded-b`}
      >
        <div
          className={`${theme.textMuted} text-sm flex justify-center items-center space-x-2`}
        >
          <Icon /> <span className="text-sm font-bold">{username}</span>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className={`text-4xl font-bold ${theme.text}`}>{value}</span>
          <div
            className={`uppercase tracking-most-widest ${theme.textMuted} text-sm`}
          >
            {caption}
          </div>
        </div>
        <div
          className={`${
            isPositive ? "text-lime-green" : "text-bright-red"
          } text-sm  flex justify-center items-center space-x-1`}
        >
          {isPositive ? <Up /> : <Down />} <span>{difference} Today</span>
        </div>
      </div>
    </div>
  );
};
