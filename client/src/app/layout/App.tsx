import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NavBar from "./NavBar";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/*It removes the default browser css styles*/}
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle, #1e3aba, #111B27)"
            : "radial-gradient(circle, #baecf9, #f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
