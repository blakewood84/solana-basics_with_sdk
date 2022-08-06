import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import * as solanaWeb3 from '@solana/web3.js';

function App(props: any) {
  const [count, setCount] = useState(0)

  const handleCheckBalance = async (address: string): Promise<number> => {
    const key: solanaWeb3.PublicKey = new solanaWeb3.PublicKey(address);
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));
    return connection.getBalance(key).then(balance => {
      console.log('Balance: ', (balance / solanaWeb3.LAMPORTS_PER_SOL))
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
