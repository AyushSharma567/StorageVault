import React from 'react';
import { Block } from 'baseui/block';
import './App.css';
import Tabs from './components/tabs/Tabs';

const App = (): JSX.Element => {
  return (
    <Block className="page--header">
      <h1>Storage Vault</h1>
      <h4>
        StorageVault is a safe and decentralized service to share code snippets, notes, pdf, files and many more upto 5GB.
        Paste anything and share with your friends.
        Your goto destination for secure data sharing.
      </h4>
      <Tabs />
    </Block>
  );
};

export default App;
