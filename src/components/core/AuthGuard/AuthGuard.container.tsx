import React, { useEffect, useState } from 'react';

import { AuthGuardPublicProps } from 'components/core/AuthGuard/AuthGuard.props';
import { useStore } from 'effector-react';
import { UserStore } from 'effector/user/store';
import { useHistory, useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const AuthGuard = ({ children }: AuthGuardPublicProps): JSX.Element => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { id: token } = useStore(UserStore);
  const [redirect, setRedirecting] = useState(false);

  const notFound = !Object.values(ROUTES)
    .map((r) => r.path)
    .some((p) => pathname === p);

  useEffect(() => {
    const checkRedirect = (key?: string) => {
      if (key) {
        if ([ROUTES.LOGIN.path].includes(pathname)) {
          history.replace(ROUTES.DASHBOARD.path);
        }
      } else if (notFound) {
        setRedirecting(true);

        setTimeout(() => {
          setRedirecting(false);
          history.replace(ROUTES.NOT_FOUND.path);
        }, 1000);
      } else {
        history.replace(ROUTES.LOGIN.path);
      }
    };

    checkRedirect(token);
  }, [notFound, history, token]);

  return <>{redirect ? <div>redirecting...</div> : <>{children}</>}</>;
};

export default React.memo(AuthGuard);
