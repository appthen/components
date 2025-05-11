import React from 'react';

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function A(props: AProps) {
  return <a {...props} />;
} 