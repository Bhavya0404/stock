import {
  Container,
  LinearProgress,
  Pagination,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AllTheStocks, ListCoins } from "../urls";
import { CryptoState } from "../CryptoContext";
import { commaSeparate } from "../commaSeparate";
import { useNavigate } from "react-router-dom";
import { TopStocks } from "../urls";

const CoinTable = () => {
  var allStocksArray = [];
  const [coins, setCoins] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
 
  // const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    const data1 = await axios.get(TopStocks());
    const neww = data1.data["ranking"];
    var temp = 0;
    for (var key in neww) {

      // console.log(neww[key]["portfolio"])
      if(temp>5){
        break;
      }
      temp=temp+3;
      const ne = neww[key]["portfolio"];
      for (var key1 in ne) {
        allStocksArray.push(ne[key1]);
        //  console.log(ne[key1]["symbol"]); //ye share ke naam h
        //  console.log(ne[key1]["shares"]); //ye no. of share h dono ko screen pe dikhana h
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    setCoins(allStocksArray);

    console.log(coins);
   
  }, []);
  coins.map((x) => {
    console.log(x.symbol);
  });
 
  //   const handleSearch = () => {
  //     return coins.filter(
  //       (coin) =>
  //         coin.name.toLowerCase().includes(search) ||
  //         coin.symbol.toLowerCase().includes(search)
  //     );
  //   };

  const open = 0;
  const close = 100;

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleSearch = () => {
    return coins.filter((coin) => coin.symbol.toLowerCase().includes(search));
  };

  // const navigate = useNavigate();

  return (
    // , backgroundColor: "#14161A"
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Stock Prices by Market Cap
        </Typography>
        <TextField
          sx={{
            backgroundColor: "black",
            marginBottom: 2,
            width: "100%",
          }}
          label="Search for Cryptos"
          variant="outlined"
          //   onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
          {isLoading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin Name", "Price", "24h Change", "Market Cap"].map(
                    (header) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: 700,
                          fontFamily: "Montserrat",
                        }}
                        key={header}
                        align={header === "Coin Name" ? "" : "right"}
                      >
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {coins
                  .map((stock) => {
                    return (
                      <TableRow
                        sx={{
                          backgroundColor: "#16171a",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#131111",
                          },
                          fontFamily: "Montserrat",
                        }}
                        key={stock.symbol}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ display: "flex", gap: 15 }}
                        >
                          <img
                            src={stock?.image}
                            alt={stock?.symbol}
                            height="50px"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {stock.symbol}
                            </span>
                            <span style={{ color: "darkgray" }}>
                              {stock.symbol}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinTable;
