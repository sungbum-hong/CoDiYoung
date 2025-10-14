import { FaEllipsisH } from "react-icons/fa";

export default function ProjectSection() {
  return (
    <div className="mb-20">
      <div className="flex justify-between mb-20">
        <h1 className="text-2xl">프로젝트</h1>
        <button className="p-2 rounded-full text-white bg-[#FF0066]">
          <FaEllipsisH size={20} />
        </button>
      </div>
      <div className="flex justify-between">
        <div class="border border-indigo-600 w-25 h-25 rounded-3xl"></div>
      </div>
    </div>
  );
}
