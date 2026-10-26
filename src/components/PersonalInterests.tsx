import React from 'react';
import { Life } from './Life';

// Re-export Life as PersonalInterests for backward compatibility
export const PersonalInterests: React.FC = () => {
  return <Life />;
};
