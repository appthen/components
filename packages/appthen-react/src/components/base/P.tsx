import React from 'react';

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function P(props: PProps) {
  return <p {...props} />;
} 