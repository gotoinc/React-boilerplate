import { useDispatch, useSelector } from 'react-redux';
import { localeSelector } from '../store/selectors/localeSelectors';
import { changeLocale } from '../store/actions/localeActions';
import { RedirectRouter } from '../routes';

const useLocale = () => {
  const locale = useSelector(localeSelector);
  const dispatch = useDispatch();

  const handleChangeLocale = nextLocale => {
    const pathnameArray = RedirectRouter.history.location.pathname.split('/');
    pathnameArray.splice(1, 1, nextLocale);
    const replacedPathname = pathnameArray.join('/');
    RedirectRouter.history.replace(replacedPathname);
    dispatch(changeLocale.success(nextLocale));
  };

  return [locale, handleChangeLocale];
};

export default useLocale;
