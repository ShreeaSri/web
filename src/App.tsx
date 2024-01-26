import React from 'react';
import { RecoilRoot } from 'recoil'
import Index from './components/Index';


function App() {
  return (
    <>
      <RecoilRoot>
        <Index />
      </RecoilRoot>
    </>
  );
}

export default App;
