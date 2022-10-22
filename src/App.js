import React from "react";
import styled from "styled-components";
import ContentInfo from "./components/ContentInfo";
import NavbarData from "./components/Navbar";

// import url from "./data.json";
import { url } from "./data";

function App() {
  return (
    <BodySection>
      <NavbarData />
      <ContentInfo data={url} />
    </BodySection>
  );
}

const BodySection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: fit-content;
  min-height: 700px;
`;

export default App;
