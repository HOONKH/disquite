const MessageBox = ({ boxCount }) => {
  const colorList = [
    "bg-blue-500",
    "bg-red-500",
    "bg-purle-500",
    "bg-pink-500",
    "bg-purle-500",
  ];

  return (
    <div
      className={`${
        colorList[boxCount % colorList.length]
      } w-[645px] h-[400px] flex justify-center items-center`}
    >
      내용
    </div>
  );
};

export default MessageBox;
