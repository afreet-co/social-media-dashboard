import React, { FC } from "react";
import { useAppContext } from "../contexts/AppContext";
import { OverviewData } from "../data";
import { Down, Up } from "./icons";

type OverviewCardProps = {
  item: OverviewData;
};

export const OverviewCard: FC<OverviewCardProps> = ({
  item: { Icon, difference, heading, isPositive, value },
}) => {
  const { theme } = useAppContext();
  return (
    <div
      className={`${theme.cardBackground} hover:filter hover:cursor-pointer w-full duration-150 transition-all rounded px-6 py-4 space-y-4`}
    >
      <div
        className={`${theme.textMuted} text-sm flex justify-between items-center`}
      >
        <span className="font-bold text-sm">{heading}</span>
        <Icon />
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-2xl font-bold ${theme.text}`}>{value}</span>
        <div
          className={`${
            isPositive ? "text-lime-green" : "text-bright-red"
          } text-xs font-bold flex justify-center items-center space-x-1`}
        >
          {isPositive ? <Up /> : <Down />} <span>{difference}%</span>
        </div>
      </div>
    </div>
  );
};
