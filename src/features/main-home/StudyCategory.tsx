import StudyCategoryApi from "./StudyCategoryApi";
import StudyCategoryMock from "./StudyCategoryMock";

// 개발 중에는 true로 설정하여 Mock 컴포넌트 사용
// 배포 시에는 false로 변경하거나 환경 변수로 제어
const IS_MOCK_MODE = true;

export default function StudyCategory() {
  if (IS_MOCK_MODE) {
    return <StudyCategoryMock />;
  }
  
  return <StudyCategoryApi />;
}