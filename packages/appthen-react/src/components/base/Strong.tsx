import React from 'react';

interface StrongProps extends React.HTMLAttributes<HTMLElement> {}

export default function Strong(props: StrongProps) {
  return <strong {...props} />;
} 