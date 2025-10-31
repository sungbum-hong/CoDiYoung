import { calculateBarHeight } from '../../../utils/chartUtils';

/**
 * 차트 바 컴포넌트
 */
export default function ChartBar({ data, maxValue }) {
  const height = calculateBarHeight(data.value, maxValue);

  return (
    <div className="h-40 flex items-end justify-center pb-2">
      <div
        className="bg-[#FF0066] rounded-t"
        style={{
          width: '40px',
          height: `${height}px`
        }}
      ></div>
    </div>
  );
}