import React from 'react';
import type { Color } from './types';
import { BOTTLE_CAPACITY } from './constants';

interface BottleProps {
  colors: Color[];
  isSelected: boolean;
  onClick: () => void;
}

export const Garrafa: React.FC<BottleProps> = ({ colors, isSelected, onClick }) => {
  const segments: Color[] = [];
  
  // Renderiza do topo para a base
  for (let i = BOTTLE_CAPACITY - 1; i >= 0; i--) {
    segments.push(colors[i] || 'transparent');
  }

  return (
    <div
      onClick={onClick}
      
    >
      {segments.map((color, idx) => (
        <div
          key={idx}
        />
      ))}
    </div>
  );
};