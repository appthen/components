import React from 'react';

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H1(props: H1Props) {
  return <h1 {...props} />;
} 