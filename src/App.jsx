import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@radix-ui/themes/styles.css";
import "./App.css";
import {
  Theme,
  Flex,
  Card,
  Inset,
  Box,
  Text,
  Strong,
  Button,
} from "@radix-ui/themes";
function App() {
  return (
    <>
      <HeaderComponent />
      <Theme>
        <Flex gap="3" align="center" justify="center">
          <ContentComponent />

          <ContentComponent />
          <ContentComponent />
          <ContentComponent />
          <ContentComponent />
        </Flex>
      </Theme>
    </>
  );
}

function HeaderComponent() {
  return <header>Marketing Website</header>;
}
function ImageComponent() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image of marketing"
      />
    </div>
  );
}

function ContentComponent() {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
          }}
        />
      </Inset>
      <Text as="p" size="3">
        <Strong>Shoping Easy</Strong> is the start up to make your work easy in
        Shoping.
      </Text>
    </Card>
  );
}
export default App;
