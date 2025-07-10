import { useEffect } from 'react';

export default function ExtensionRedirect() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ type: 'FIXPROM_LOGIN_SUCCESS' }, '*');
      setTimeout(() => {
        window.close();
      }, 500); // small delay to ensure message is sent
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h2>Login successful!</h2>
      <p>This window will close automatically.</p>
    </div>
  );
}
