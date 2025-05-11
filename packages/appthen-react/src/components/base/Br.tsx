import React from 'react';

interface BrProps extends React.HTMLAttributes<HTMLBRElement> {}

export default function Br(props: BrProps) {
  return <br {...props} />;
} 