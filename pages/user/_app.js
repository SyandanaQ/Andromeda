import React from 'react';
import Navbar from '@/components/layouts/Navbar';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
