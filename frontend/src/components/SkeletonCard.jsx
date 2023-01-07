import { Skeleton } from "antd";
import React from "react";

function SkeletonCard() {
  return (
    <div className="w-full mb-5">
      <div className="w-full overflow-hidden h-[210px] rounded-xl">
        <Skeleton.Image active className="w-full h-full" />
      </div>
      <div className="text-[13px] mt-2 mb-1 text-gray flex items-center">
        <Skeleton active />
      </div>
    </div>
  );
}

export default SkeletonCard;
