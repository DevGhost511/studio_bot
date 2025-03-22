import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';

// Lazy load the settings layout component
const SettingsLayout = lazy(() => import('./components/SettingsLayout'));

export function Settings() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SettingsLayout />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-10 h-10 text-[#904af2] animate-spin mx-auto mb-4" />
        <p className="text-lg font-medium">Loading settings...</p>
        <p className="text-sm text-zinc-400 mt-2">This may take a moment</p>
      </div>
    </div>
  );
}

export default Settings;