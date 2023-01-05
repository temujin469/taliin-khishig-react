import React from "react";
import { useAdminContext } from "../../contexts/AdminStateContext";

const MyButton = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  onPress,
}) => {
  const { setIsClicked, initialState } = useAdminContext();

  return (
    <button
      type="button"
      onClick={() => {
        setIsClicked(initialState);
        onPress && onPress();
      }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default MyButton;
