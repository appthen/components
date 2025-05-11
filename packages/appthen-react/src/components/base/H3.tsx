import React from 'react';

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H3(props: H3Props) {
  return <h3 {...props} />;
} 