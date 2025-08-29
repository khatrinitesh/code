import React from "react";
import {
  FaUserFriends,
  FaExclamationCircle,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { cardData } from "../../constants/constants";

const iconMap = {
  FaUserFriends: <FaUserFriends size={30} color="#fff" />,
  FaExclamationCircle: <FaExclamationCircle size={30} color="#fff" />,
  FaHandHoldingUsd: <FaHandHoldingUsd size={30} color="#fff" />,
};

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex w-full rounded-[10px] overflow-hidden shadow-md"
        >
          {/* Left Side */}
          <div
            className={`flex flex-col justify-center flex-[2] text-white p-5`}
            style={{ backgroundColor: card.leftColor }}
          >
            <div className="text-2xl font-bold">{card.number}</div>
            <div className="text-sm mt-1">{card.headtitle}</div>
          </div>

          {/* Right Side */}
          <div
            className="flex items-center justify-center flex-1"
            style={{ backgroundColor: card.rightColor }}
          >
            {iconMap[card.rightIcon]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
