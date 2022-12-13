// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgShip = (props: IconProps & SVGProps<SVGSVGElement>) => {
  const mergedStyles = {
    display: 'inline-block',
    fill: undefined,
    height: props.size || 24,
    width: props.size || 24,
  };
  return (
    <svg
      width="1em"
      height="1em"
      viewBox={props.viewBox || '0 0 24 24'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={props.color || undefined}
      style={mergedStyles}
      {...props}
    >
      <path
        d="m21.63 14.66-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.48-.19.99-.29 1.49-.29s1.01.1 1.49.29L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29Z"
        fill="currentColor"
      />
      <path
        opacity={0.4}
        d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3Z"
        fill="currentColor"
      />
      <path
        d="M14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v2Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgShip;
