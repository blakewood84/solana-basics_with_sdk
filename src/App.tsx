import { useState } from 'react';
import './App.css';

import * as Web3 from '@solana/web3.js';

function App(props: any) {
  const [count, setCount] = useState(0)

  const handleCheckBalance = async (address: string): Promise<number> => {
    const key: Web3.PublicKey = new Web3.PublicKey(address);
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    return connection.getBalance(key).then(balance => {
      console.log('Balance: ', (balance / Web3.LAMPORTS_PER_SOL))
      return balance;
    });
  }

  return (
    <div className="App">
      <button onClick={() => handleCheckBalance('EF5hFVSBAPSJyBavjCLBPFMdCpuE5T76iDrJ7WSfuYow')}>Check Balance</button>
    </div>
  )
}

export default App
