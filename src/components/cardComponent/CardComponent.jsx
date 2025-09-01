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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {cardData.map((card, index) => (
        <div key={index} className="flex w-full overflow-hidden shadow-md">
          {/* Left Side */}
          <div
            className={`flex flex-col justify-center flex-[2] text-white p-[20px]`}
            style={{ backgroundColor: card.leftColor }}
          >
            <h2 className="text-subTitle montserrat-bold leading-[20px] ">
              {card.number}
            </h2>
            <span className="text-sm mt-1">{card.headtitle}</span>
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
