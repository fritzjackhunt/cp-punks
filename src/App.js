/* eslint-disable no-unused-vars */
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xa73FcF8C69aaef74a8114eF86A6489202e062bC8&order_direction=asc'
        )
      setPunkListData(openseaData.data.assets) 
    }
    getMyNfts()  
    .catch(console.error, 'kiii')
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main 
            punkListData={punkListData}
            selectedPunk={selectedPunk}
          />

          <Punklist 
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk} 
          />
        </>
      )}
      
    </div>
  )
}

export default App;
