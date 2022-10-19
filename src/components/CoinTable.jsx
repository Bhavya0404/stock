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
import { ListCoins } from "../urls";
import { CryptoState } from "../CryptoContext";
import { commaSeparate } from "../commaSeparate";
import { useNavigate } from "react-router-dom";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    const { data } = await axios.get(ListCoins("AAPL"));
    console.log(data);
    setCoins(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const handleSearch = () => {
  //     return coins.filter(
  //       (coin) =>
  //         coin.name.toLowerCase().includes(search) ||
  //         coin.symbol.toLowerCase().includes(search)
  //     );
  //   };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  // const handleSearch = () => {
  //   return coins.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search)
  //   );
  // };

  // const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
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
                <TableRow
                  sx={{
                    backgroundColor: "#16171a",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#131111",
                    },
                    fontFamily: "Montserrat",
                  }}
                  key={coins.name}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ display: "flex", gap: 15 }}
                  >
                    <img
                      src={coins?.image}
                      alt={coins?.name}
                      height="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontSize: 22,
                        }}
                      >
                        {coins.symbol}
                      </span>
                      <span style={{ color: "darkgray" }}>{coins.name}</span>
                    </div>
                  </TableCell>

                  <TableCell align="right">
                    {"Rs"} {coins.open}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      color: coins?.close > coins?.open > 0 ? "green" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {coins?.close > coins?.open && "+"}
                    {coins?.close - coins?.open}%
                  </TableCell>
                  <TableCell align="right">
                    {"Rs"} {coins?.open}M
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{
                    backgroundColor: "#16171a",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#131111",
                    },
                    fontFamily: "Montserrat",
                  }}
                  key={coins.name}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ display: "flex", gap: 15 }}
                  >
                    <img
                      src={coins?.image}
                      alt={coins?.name}
                      height="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontSize: 22,
                        }}
                      >
                        {coins.symbol}
                      </span>
                      <span style={{ color: "darkgray" }}>{coins.name}</span>
                    </div>
                  </TableCell>

                  <TableCell align="right">
                    {"Rs"} {coins.open}
                  </TableCell>

                  <TableCell
                    align="right"
                    style={{
                      color: coins?.close > coins?.open > 0 ? "green" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {coins?.close > coins?.open && "+"}
                    {coins?.close - coins?.open}%
                  </TableCell>
                  <TableCell align="right">
                    {"Rs"} {coins?.open}M
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinTable;
