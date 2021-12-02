import React, { ReactNode } from 'react';
import classNames from 'classnames';

type CSSClasses = string | string[];

interface BootstrapCardProps {
  title: string;
  children: ReactNode;
  titleLevel?: string;
  headerClasses?: CSSClasses;
  bodyClasses?: CSSClasses;
  className?: CSSClasses;
}

function headerWrapper( text: string, level = '4' ): JSX.Element {
  switch ( level ) {
  case '1':
    return <h1>{text}</h1>;
  case '2':
    return <h2>{text}</h2>;
  case '3':
    return <h3>{text}</h3>;
  case '5':
    return <h5>{text}</h5>;
  case '6':
    return <h6>{text}</h6>;
  default:
    return <h4>{text}</h4>;
  }
}

export default function BootstrapCard( {
  title,
  titleLevel,
  headerClasses,
  bodyClasses,
  children,
  className,
}: BootstrapCardProps ): JSX.Element {
  return (
    <div className={classNames( 'card', className )}>
      <div className={classNames( 'card-header', headerClasses )}>
        {headerWrapper( title, titleLevel )}
      </div>
      <div className={classNames( 'card-body', bodyClasses )}>{children}</div>
    </div>
  );
}
