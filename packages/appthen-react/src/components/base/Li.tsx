import React from 'react';

interface LiProps extends React.HTMLAttributes<HTMLLIElement> {}

export default function Li(props: LiProps) {
  return <li {...props} />;
} 