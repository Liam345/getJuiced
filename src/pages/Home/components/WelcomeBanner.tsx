import React from 'react';

interface WelcomeBannerProps {
  userName?: string;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome{userName ? `, ${userName}` : ''}!
      </h1>
      <p className="text-xl">
        Discover our amazing features and start your journey today.
      </p>
    </div>
  );
}; 