import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export default function Link(props: LinkProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  // 如果不在 Router 上下文中，回退到普通的 a 标签
  if (!location) {
    return <a href={to} {...rest} />;
  }

  return <RouterLink to={to} {...rest} />;
} 