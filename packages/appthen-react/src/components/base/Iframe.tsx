import React from 'react';

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

export default function Iframe(props: IframeProps) {
  return <iframe {...props} />;
} 