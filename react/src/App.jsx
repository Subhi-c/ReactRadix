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
  Heading,
} from "@radix-ui/themes";

const viewdata = [
  {
    id: "1",
    name: "FeatherIcons",
    content:
      "are known for their clean lines and simplicity. Each icon is meticulously designed to convey its meaning with clarity, making them a visual delight without overwhelming your design.",
    img: "https://images.unsplash.com/photo-1573655695613-004614d4366b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "2",
    name: "Garry's house",
    content:
      "This residence is a true work of art, boasting a unique architectural design that stands out in the neighborhood.You'll be captivated by the distinctive aesthetic to detail.",
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: "3",
    name: "Food ad Sale",
    content:
      "Dive into a world of gourmet excellence with our chef-inspired dishes. From succulent grilled meats to flavorful vegetarian options, our gourmet meals are crafted with passion and precision.",
    img: "https://images.unsplash.com/photo-1613865342914-5c41d188d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBhbmQlMjBzYWxlfGVufDB8fDB8fHww",
  },
];
function App() {
  return (
    <>
      <HeaderComponent />
      <Theme>
        <Flex gap="3" align="center" justify="center">
          {viewdata.map((data) => (
            <ContentComponent content={data} key={data.id} />
          ))}
        </Flex>
      </Theme>
    </>
  );
}

function HeaderComponent() {
  return (
    <>
      <Flex align="start" direction="row" justify="between">
        <Heading size="2">Marketing Website</Heading>
        <ul className="Links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </Flex>
    </>
  );
}

function ContentComponent({ content }) {
  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={content.img}
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
          }}
        />
      </Inset>
      <Text as="p" size="3">
        <Strong> {content.name} </Strong>
        {content.content}
      </Text>
      <Button variant="solid" color="cyan">
        view wesite
      </Button>
    </Card>
  );
}
export default App;
