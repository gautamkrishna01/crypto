
import axios from "axios"
const apis=axios.create({
    baseURL:"https://api.coingecko.com/api/v3"
})


//exchanges api

export const exchangeCoins=async()=>
{
    try {
    const data=apis.get("/exchanges")
    return data
    } catch (error) {
    console.log("Unable to frtch data",error)    
    }
}
//coins api

export const exChangeCoins=async()=>
{
    try {
        const data=apis.get("/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        return data
    
    } catch (error) {
        console.log("Unable to fetch data",error)        
    }
}