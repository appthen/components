import React from 'react';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H2(props: H2Props) {
  return <h2 {...props} />;
} 