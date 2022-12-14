// Auto-generated file
import * as React from 'react';
import { SVGProps } from 'react';
type IconProps = {
  size?: number;
};
const SvgTriangle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
        d="M12 2.59v11.02l-9.35 6.54c-.85-1.01-.9-2.54.05-4.25l3.12-5.61L8.76 5c.89-1.6 2.06-2.41 3.24-2.41Z"
        fill="currentColor"
      />
      <path
        opacity={0.6}
        d="M21.35 20.15c-.65.79-1.78 1.26-3.29 1.26H5.94c-1.51 0-2.64-.47-3.29-1.26L12 13.61l9.35 6.54Z"
        fill="currentColor"
      />
      <path
        opacity={0.4}
        d="M21.35 20.15 12 13.61V2.59c1.18 0 2.35.81 3.24 2.41l2.94 5.29 3.12 5.61c.95 1.71.9 3.24.05 4.25Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgTriangle;
