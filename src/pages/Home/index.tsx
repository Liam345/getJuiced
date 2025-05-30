import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeBanner } from './components/WelcomeBanner';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/Navigation';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <main className="w-full px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <WelcomeBanner />
          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => navigate('/content')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home; 