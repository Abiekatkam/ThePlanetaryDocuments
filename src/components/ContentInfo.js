import React from "react";
import styled from "styled-components";
import ContentEarth from "./ContentEarth";
import ContentJupiter from "./ContentJupiter";
import ContentMars from "./ContentMars";
import ContentMercury from "./ContentMercury";
import ContentNeptune from "./ContentNeptune";
import ContentSaturn from "./ContentSaturn";
import ContentUranus from "./ContentUranus";
import ContentVenus from "./ContentVenus";

function ContentInfo({ data }) {
  const mercury = data[0];
  const venus = data[1];
  const earth = data[2];
  const mars = data[3];
  const jupiter = data[4];
  const saturn = data[5];
  const uranus = data[6];
  const neptune = data[7];

  return (
    <ContentInfoSection>
      <div className="container px-4 my-4 tab-content" id="pills-tabContent">
        <ContentMercury data={mercury} />
        <ContentVenus data={venus} />
        <ContentEarth data={earth} />
        <ContentMars data={mars} />
        <ContentJupiter data={jupiter} />
        <ContentSaturn data={saturn} />
        <ContentUranus data={uranus} />
        <ContentNeptune data={neptune} />
      </div>
    </ContentInfoSection>
  );
}

const ContentInfoSection = styled.section`
  width: 100%;
  height: 830px;

  .content {
    height: 630px;
  }

  .accords {
    margin-top: 1.5rem;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 200px;
    border: 0;
  }

  .accordDetail {
    width: 100%;
    background-color: #000;
    display: block;
    height: 3rem;
    display: flex;
    color: var(--white);
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-family: var(--spartan);
    border: 1px solid var(--dim);
    border-radius: 0;
  }

  ${
    "" /* .accordDetail:hover {
    background-color: var(--skinwhite);
    transition: all 0.3s ease-in-out;
  } */
  }

  .hidden {
    display: none;
  }

  .content2 {
    height: 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 130px;
    gap: 20px;
  }

  .data1 {
    border: 1px solid var(--greyish);
    padding: 0.85rem;
  }

  .data1 p {
    text-transform: uppercase;
    color: var(--dim);
    font-family: var(--spartan);
    margin-bottom: 0.35rem;
  }

  .data1 h1 {
    font-family: var(--antonio);
    font-size: 3rem;
    color: var(--white);
    height: 4rem;
  }

  .imgcontainer {
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .images {
    postion: relative;
    margin-bottom: -7rem;
  }

  .img3 {
    width: 160px;
    ${"" /* postion: relative; */}
    z-index: 1;
    translate: 0 -10%;
  }

  .img3:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }

  ${
    "" /* .images {
    height: 550px;
    width: 80%;
  } */
  }

  .head1 {
    text-transform: uppercase;
    font-family: var(--antonio);
    font-size: 4.2rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }

  .para {
    color: var(--white);
    font-size: 1.15rem;
    letter-spacing: 0.004rem;
    font-family: var(--spartan);
  }

  .para2 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.82rem;
    color: var(--dim);
  }

  .anchor {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--white);
    padding-left: 0.3rem;
  }

  .anchor:hover {
    text-decoration: underline;
    color: var(--skinwhite);
    transition: all 0.25s ease-in-out;
  }
`;

export default ContentInfo;
