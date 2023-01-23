import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { exChangeCoins } from "../Services/Api";
import Header from "./Header";
const Coins = () => {
  interface exchangeCoins {
    name: string;
    image: string;
    last_updated: number;
    market_cap: number;
    market_cap_change_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    symbol: string;
    total_supply: number;
    total_volume: number;
  }

  const [input, setInput] = useState("");

  const { data, isLoading } = useQuery(
    "getCoins",
    exChangeCoins
  );

  if (isLoading) {
    return <h1 style={{ textAlign: "center", color: "red" }}>Is Loading</h1>;
  }
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
        <input
          type="text"
          placeholder="Search"
          name={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            height: "40px",
            fontSize: "20px",
            borderRadius: "40px",
            textAlign: "center",
          }}
        />
      </Box>
      <Grid container spacing={10} sx={{ mt: "0px" }}>
        {data?.data
          .filter((value: exchangeCoins) =>
            value.name.toLowerCase().includes(input)
          )
          .map((value: exchangeCoins) => (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Box sx={{ ml: "100px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "red" }}>
                      Name:{value.name}
                    </Typography>
                    <img src={value.image} alt="image" />
                    <Typography>Last Update:{value.last_updated}</Typography>
                    <Typography>Market Cap:{value.market_cap}</Typography>
                    <Typography>
                      Market Cap Change 24 Hours:{value.market_cap_change_24h}
                    </Typography>
                    <Typography>
                      Price Change Percetage 34 Hours:
                      {value.price_change_percentage_24h}
                    </Typography>
                    <Typography>Symbol:{value.symbol}</Typography>
                    <Typography>Total Supply:{value.total_supply}</Typography>
                    <Typography>Total Volume:{value.total_volume}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Coins;
