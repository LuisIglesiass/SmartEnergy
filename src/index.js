import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <RootLayout>
  </RootLayout>
);
