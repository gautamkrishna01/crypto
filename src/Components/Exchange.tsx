import { Box } from "@mui/system";
import React, { useState } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { useQuery } from "react-query";
import { exchangeCoins } from "../Services/Api";
import Header from "./Header";
const Exchange = () => {
  interface exchangeData {
    country: string;
    id: number;
    image: string;
    name: string;
    trade_volume_24h_btc: number;
    trade_volume_24h_btc_normalized: number;
    trust_score: number;
    trust_score_rank: number;
    url: string;
    year_established: number;
  }

  const [input, setInput] = useState("");

  const { data, isLoading } = useQuery(
    "getAllCoins",
    exchangeCoins
  );
  console.log(data);

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
          value={input}
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
          .filter((value: exchangeData) => value.name.toLowerCase().includes(input))
          .map((value: exchangeData) => (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Box sx={{ ml: "100px" }}>
                    <Typography sx={{ fontWeight: "bold", color: "red" }}>
                      Country:{value.country}
                    </Typography>
                    <Typography>Id:{value.id}</Typography>
                    <img src={value.image} alt="Image" />
                    <Typography>name:{value.name}</Typography>
                    <Typography>
                      trade_volume_24h_btc:{value.trade_volume_24h_btc}
                    </Typography>
                    <Typography>
                      trade_volume_24h_btc_normalized:
                      {value.trade_volume_24h_btc_normalized}
                    </Typography>
                    <Typography>trust_score:{value.trust_score}</Typography>
                    <Typography>
                      trust_score_rank:{value.trust_score_rank}
                    </Typography>
                    <Typography>Url:{value.url}</Typography>
                    <Typography>
                      year_established:{value.year_established}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Exchange;
