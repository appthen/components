import React from 'react';

interface EmProps extends React.HTMLAttributes<HTMLElement> {}

export default function Em(props: EmProps) {
  return <em {...props} />;
} 