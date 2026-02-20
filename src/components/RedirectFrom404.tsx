import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * When GitHub Pages serves 404.html, we redirect to /?redirect=/requested-path.
 * This component reads the redirect param and navigates to the correct route,
 * then removes the param so the URL is clean.
 */
export default function RedirectFrom404() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirect = searchParams.get('redirect');

  useEffect(() => {
    if (redirect && redirect.startsWith('/')) {
      setSearchParams({}); // remove query params
      navigate(redirect, { replace: true });
    }
  }, [redirect, navigate, setSearchParams]);

  return null;
}
