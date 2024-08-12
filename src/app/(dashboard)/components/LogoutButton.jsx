'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {

        router.push('/login');
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleLogout} disabled={isLoading} >
      {isLoading ? <div className="flex items-center justify-center bg-transparent">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black"></div>
      </div> : <div className='flex items-center gap-2'>
        <LogOut className="w-6 h-6" />
        <span>Logout</span>
      </div>}
    </button>
  );
};

export default LogoutButton;
