import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import { Router } from './lib/router';
import { queryClient } from './lib/query';

import { Toaster } from '@/components/shadcn-ui/sonner';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <Router />
        <Toaster />
      </CookiesProvider>
    </QueryClientProvider>
  </StrictMode>
);
