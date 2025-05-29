import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle, Plus, Edit2, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from './components/ui/alert';

const PRODUCTION_APP_ID = 'sq0idp-LxFBW4bk1zUAh0SVFnPaCA';
const PRODUCTION_ACCESS_TOKEN = 'sq0csp-zfcQyFr97czgKHK3Y59UtyD9o5rAjxM_xm-cAwn-5cI';

const SquareCalendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [services, setServices] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Check for OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    if (authCode) {
      handleOAuthCallback(authCode);
    } else if (window.location.pathname === '/callback') {
      // If we're on the callback page but no code, show error
      setError('No authorization code received');
      setLoading(false);
    } else {
      // Only initialize calendar if we're not on the callback page
      initializeCalendar();
    }
  }, []);

  const initializeCalendar = async () => {
    // Check for stored token
    const storedToken = localStorage.getItem('square_access_token');
    if (storedToken) {
      setAccessToken(storedToken);
      try {
        await fetchLocations();
        await fetchServices();
        await fetchTeamMembers();
        await fetchAppointments();
      } catch (err) {
        setError('Failed to initialize calendar');
        // If we get an authorization error, clear the stored token
        if (err.message === 'Unauthorized') {
          localStorage.removeItem('square_access_token');
          setAccessToken('');
        }
      }
    }
    setLoading(false);
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading calendar data...</div>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please authenticate with Square first.
              <a
                href={`https://connect.squareup.com/oauth2/authorize?client_id=${PRODUCTION_APP_ID}&scope=APPOINTMENTS_READ APPOINTMENTS_WRITE CUSTOMERS_READ CUSTOMERS_WRITE&redirect_uri=${encodeURIComponent(window.location.origin + '/callback')}`}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                Connect with Square
              </a>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

};

export default SquareCalendar;
