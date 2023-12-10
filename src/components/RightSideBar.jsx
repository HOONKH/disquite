import { useRef } from "react";

const RightSideBar = () => {
  const StopRef = useRef();

  return (
    <div className="w-[276px] min-h-screen bg-pink-300 overflow-y-hidden">
      <div className="w-[276px] h-[28px] bg-red-200 mt-10">title</div>
      <div className="bg-red-500 w-[276px] h-[228px] rounded-2xl">List</div>
      <div className="bg-pink-500 w-[276px] h-[28px]">title</div>
      <div className="bg-purple-500 w-[276px] h-[228px] rounded-2xl">List</div>
      <div className="w-[276px] h-[28px]">title</div>
      <div className="bg-blue-600 w-[276px] h-[209px] rounded-2xl">List</div>
      <div className="w-[276px] h-[28px]">title</div>
      <div className="bg-yellow-500 w-[276px] h-[322px] rounded-2xl">List</div>
      <div className="w-[276px] h-[28px] ">title</div>
      <div className="bg-amber-500 w-[276px] h-[84px] rounded-2xl">list</div>
      <div className="w-[276px] h-[28px]">title</div>
      <div
        ref={StopRef}
        className="bg-purple-700 w-[276px] h-[76px] rounded-2xl "
      >
        list
      </div>
    </div>
  );
};

export default RightSideBar;
