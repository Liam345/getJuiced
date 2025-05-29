import React from 'react';
// import { Button } from ;
import { WelcomeBanner } from './components/WelcomeBanner';
import { Button } from '@/components/ui/Button';
import { Navigation } from '@/components/ui/Navigation';

export const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <WelcomeBanner />
        <div className="mt-8">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home; 