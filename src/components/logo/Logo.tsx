import React from "react";
import { BsRobot } from "react-icons/bs";

const Logo = () => {
  return (
    <span className="flex gap-2 justify-center items-center">
      <BsRobot className="w-10 h-10 text-gray-600 dark:text-gray-400" />
      <span className="text-gray-600 text-3xl dark:text-gray-400">
        Resume{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          AI
        </span>
      </span>
    </span>
  );
};

export default Logo;
