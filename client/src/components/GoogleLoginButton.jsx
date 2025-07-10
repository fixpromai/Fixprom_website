import { useGoogleLogin } from '@react-oauth/google';

export default function useGoogleSignIn() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const googleUser = await res.json();

        const userData = {
          email: googleUser.email,
          name: googleUser.name,
          googleId: googleUser.sub,
          photo: googleUser.picture,
        };

        // 👇 Step 1: Send to backend
        const backendRes = await fetch('http://localhost:5000/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(userData),
        });

        const data = await backendRes.json();

        // 👇 Step 2: Get login source from query param
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('source');

        // 👇 Step 3: Handle redirect based on source
        if (data?.user) {
          localStorage.setItem('fixpromToken', data.token);


          if (source === 'extension') {
            window.location.href = '/extension-redirect';
          } else {
            window.location.href = '/'; // normal login
          }
        } else {
          alert('Login failed.');
        }
      } catch (err) {
        console.error('Login error:', err);
      }
    },
    onError: () => {
      alert('Google login failed');
    },
    flow: 'implicit',
  });

  return login;
}
