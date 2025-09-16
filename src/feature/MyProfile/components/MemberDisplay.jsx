export default function MemberDisplay({ project, position = "left" }) {
  const positionStyle = position === "left" ? { left: "20px" } : {};

  return (
    <>
      {/* 크루 제목 */}
      <div
        className="absolute text-xs font-bold"
        style={{ ...positionStyle, top: "113px" }}
      >
        크루
      </div>

      {/* 크루 동그라미들 */}
      <div
        className="absolute flex gap-[20px]"
        style={{ ...positionStyle, top: "136px" }}
      >
        {project.memberBriefs && project.memberBriefs.length > 0 ? (
          project.memberBriefs.slice(0, 2).map((member, i) => (
            <div
              key={i}
              className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs"
            >
              {member.name?.[0] ?? "?"}
            </div>
          ))
        ) : (
          <>
            <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
            <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
          </>
        )}
      </div>

      {/* 기술 제목 */}
      <div
        className="absolute text-xs font-bold"
        style={{ ...positionStyle, top: "182px" }}
      >
        기술
      </div>

      {/* 기술 동그라미 */}
      <div
        className="absolute"
        style={{ ...positionStyle, top: "205px" }}
      >
        <div className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs">
          {project.techs &&
          Array.isArray(project.techs) &&
          project.techs.length > 0
            ? project.techs[0].slice(0, 2)
            : "미설정"}
        </div>
      </div>
    </>
  );
}