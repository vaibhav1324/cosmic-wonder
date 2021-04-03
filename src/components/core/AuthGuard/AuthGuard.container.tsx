import React, { useEffect, useState } from 'react';

import { AuthGuardPublicProps } from 'components/core/AuthGuard/AuthGuard.props';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const AuthGuard = ({ children }: AuthGuardPublicProps): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [redirect, setRedirecting] = useState(false);

  const notFound = !Object.values(ROUTES)
    .map((r) => r.path)
    .some((p) => pathname === p);

  useEffect(() => {
    const checkRedirect = () => {
      if (notFound) {
        setRedirecting(true);

        setTimeout(() => {
          setRedirecting(false);
          history.replace(ROUTES.NOT_FOUND.path);
        }, 1000);
      }
    };

    checkRedirect();
  }, [notFound, history]);

  return <>{redirect ? <div>redirecting...</div> : <>{children}</>}</>;
};

export default React.memo(AuthGuard);
