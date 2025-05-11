import React from 'react';

interface UlProps extends React.HTMLAttributes<HTMLUListElement> {}

export default function Ul(props: UlProps) {
  return <ul {...props} />;
} 