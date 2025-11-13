// components/FavoriteSupermarketsGrid.tsx

"use client";

import * as React from 'react';
// import { Supermarket, fakeSupermarkets } from '@/data/supermarkets';
import { SupermarketCard } from './SupermarketCard';
import { Supermarket } from './data/supermakets';

interface FavoriteSupermarketsGridProps {
  supermarkets: Supermarket[];
}

export const FavoriteSupermarketsGrid: React.FC<FavoriteSupermarketsGridProps> = ({ 
  supermarkets 
}) => {
  // In a real app, you might manage the favorite state here or in a global store
  const [localSupermarkets, setLocalSupermarkets] = React.useState(supermarkets);

  const handleToggleFavorite = (id: string) => {
    setLocalSupermarkets(prevSupermarkets => 
      prevSupermarkets.map(sm => 
        sm.id === id ? { ...sm, isFavorite: !sm.isFavorite } : sm
      )
    );
    // In a real app, you'd also make an API call here to update the backend
    console.log(`Toggled favorite status for supermarket ID: ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-16">
      {localSupermarkets.map((supermarket) => (
        <SupermarketCard
          key={supermarket.id} 
          supermarket={supermarket} 
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
};