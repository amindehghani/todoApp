// App.tsx
import React, { createContext, useState } from "react";
import "./styles/app.scss";
import Layout from "./components/layout";
import Header from "./components/header";
import AddItem from "./components/add-item";
import ItemList from "./components/item-list";
import { ColorMode } from "./types/color-mode";
import { ThemeProvider } from "./providers/theme-provider";
const GlobalContext = createContext({});

export default function App() {
  const [colorMode, setColorMode] = useState<ColorMode>("Light");
  

  return (
    <ThemeProvider>
    <Layout>
      <Header />
      <AddItem />
      <ItemList />
    </Layout>
    </ThemeProvider>
  );
}
