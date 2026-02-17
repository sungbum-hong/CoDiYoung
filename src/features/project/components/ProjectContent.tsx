import { COLORS } from '../../../constants/colors';

export default function ProjectContent({ htmlContent }: { htmlContent: string }) {
  return (
    <div 
      className="prose max-w-none"
      style={{ 
        color: COLORS.TEXT_PRIMARY,
        '--tw-prose-body': COLORS.TEXT_PRIMARY,
        '--tw-prose-headings': COLORS.TEXT_PRIMARY,
        '--tw-prose-bold': COLORS.TEXT_PRIMARY,
      } as React.CSSProperties}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
