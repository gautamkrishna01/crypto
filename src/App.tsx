import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import CoinDetails from './Components/CoinDetails'
import Coins from './Components/Coins'
import Exchange from './Components/Exchange'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/exchange' element={<Exchange/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coinsdetails' element={<CoinDetails/>}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>

    </>
  )
}

export default App