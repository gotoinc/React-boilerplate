import { useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router-dom';

const useMatch = () => {
  const { match } = useContext(RouterContext);
  return match;
};

export default useMatch;
