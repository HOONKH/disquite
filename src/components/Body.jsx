import { useEffect, useRef, useState } from "react";
import ModalShareTalk from "./ModalShareTalk";
import DetectedArea from "./DetectedArea";
import MessageBox from "./MessageBox";

const Body = () => {
  const [boxCompList, setBoxCompList] = useState([
    <MessageBox boxCount={1} />,
    <MessageBox boxCount={2} />,
    <MessageBox boxCount={3} />,
    <MessageBox boxCount={4} />,
    <MessageBox boxCount={5} />,
  ]);
  const [boxCount, setBoxCount] = useState(6);

  const [isOpen, setIsOpen] = useState(false);

  const onModalOpen = () => {
    setIsOpen(true);
  };
  const onModalClose = () => {
    setIsOpen(false);
  };

  const detectedRef = useRef();

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("감지");
          setBoxCompList([
            ...boxCompList,
            <MessageBox boxCount={boxCount} />,
            <MessageBox boxCount={boxCount + 1} />,
            <MessageBox boxCount={boxCount + 2} />,
            <MessageBox boxCount={boxCount + 3} />,
            <MessageBox boxCount={boxCount + 4} />,
          ]);
          setBoxCount(boxCount + 5);
        }
      },
      { threshold: 1 }
    );
    observer.current.observe(detectedRef.current);

    return () => observer.current.unobserve(detectedRef.current);
  }, [boxCompList]);

  return (
    <div className=" w-[645px] ml-[312px] min-h-screen mx-auto bg-indigo-500">
      <div className="bg-slate-700 mt-10 w-[645px] h-[74px] ">
        <ul>
          <ul className="flex items-center">
            <span className="rounded-full bg-yellow-600 w-12 h-12">id</span>
            <button
              onClick={onModalOpen}
              className="bg-blue-400 w-[597px] h-[34px] rounded-xl mx-2"
            >
              클릭
            </button>
          </ul>
          <ul className="ml-14 flex gap-1 text-xs">
            <button className="border-2 rounded-md">공유</button>
            <button className="border-2 rounded-md">클럽만들기</button>
            <button className="border-2 rounded-md">팀만들기</button>
          </ul>
        </ul>
        {boxCompList.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
        <DetectedArea detectedRef={detectedRef} />
      </div>
      <ModalShareTalk isOpen={isOpen} onModalClose={onModalClose} />
    </div>
  );
};

export default Body;
