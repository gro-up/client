import { ROUTER_PATH } from '@/router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const RouterGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate(-1)) {
      navigate(-1);
    } else {
      navigate(`${ROUTER_PATH.PRIVATE.PARENT.APP}/${ROUTER_PATH.PRIVATE.CHILD.TODAY}`);
    }
  }, [navigate]);

  return <div />;
};
