export const GOOGLE_CONFIG = {
  clientId:
    '995150319645-o3hi5jmnk5r58i5trk26qlokatji1sp2.apps.googleusercontent.com',
  clientSecret: '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',
  authEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.send',
    'openid',
  ],
  redirectUri: import.meta.env.DEV
    ? 'http://localhost:5173/auth/callback'
    : 'https://harmonious-blini-c4e5d0.netlify.app/auth/callback',
} as const;

export const SQUARE_CONFIG = {
  clientId: 'sq0idp-LxFBW4bk1zUAh0SVFnPaCA',
  clientSecret: 'sq0csp-zfcQyFr97czgKHK3Y59UtyD9o5rAjxM_xm-cAwn-5cI',
  scopes: ['APPOINTMENTS_READ', 'APPOINTMENTS_WRITE', 'CUSTOMERS_READ', 'CUSTOMERS_WRITE'],
  redirectUri: import.meta.env.DEV
    ? 'http://localhost:5173/auth/callback'
    : 'https://harmonious-blini-c4e5d0.netlify.app/auth/callback',
} as const;