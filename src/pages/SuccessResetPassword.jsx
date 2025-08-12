import ColorButton from "../ui/ColorButton";

export default function SuccessResetPassword({ onClose }) {
  return (
    <div className="flex flex-col h-full justify-center items-center p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        비밀번호 변경 완료!!
      </h2>
      
      <ColorButton 
        onClick={onClose}
        className="px-12 py-3 rounded-[5px] text-base"
      >
        확인
      </ColorButton>
    </div>
  );
}