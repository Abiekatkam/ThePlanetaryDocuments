import React from "react";

import planet from "../assests/planet-mercury.svg";
import internal from "../assests/planet-mercury-internal.svg";
import geology from "../assests/geology-mercury.png";

function ContentMercury({ data }) {
  const HandleClicked = (e) => {
    e.preventDefault();
    document.getElementById("data2").classList.remove("hidden");
    document.getElementById("data1").classList.add("hidden");
    document.getElementById("data3").classList.add("hidden");
  };
  const HandleClicked2 = (e) => {
    e.preventDefault();
    document.getElementById("data2").classList.add("hidden");
    document.getElementById("data1").classList.remove("hidden");
    document.getElementById("data3").classList.remove("hidden");
  };
  const HandleClicked3 = (e) => {
    e.preventDefault();
    document.getElementById("data1").classList.remove("hidden");
    document.getElementById("data2").classList.add("hidden");
    document.getElementById("data3").classList.add("hidden");
  };

  return (
    <div
      class="tab-pane fade show active"
      id="pills-mercury"
      role="tabpanel"
      aria-labelledby="mercury"
      tabindex="0"
    >
      <div className="row g-lg-5 pt-0 pb-2 content">
        <div className="col-lg-7 text-center text-lg-center imgcontainer">
          <img src={planet} alt="alt" className="images img1" id="data1" />
          <img src={internal} alt="alt" className="images hidden" id="data2" />
          <img
            src={geology}
            alt="alt"
            className="images hidden img3"
            id="data3"
          />
        </div>
        <div className="col-md-10 mx-auto py-5 col-lg-5">
          <h1 className="display-4 fw-bold lh-1 head1">{data.name}</h1>
          <p className="col-lg-10 para">{data.overview.content}</p>
          <span className="para2">Source</span>{" "}
          <a href={data.overview.source} className="anchor">
            Wikipedia
          </a>
          <div className="accords">
            <button
              className="accordDetail "
              id="over1"
              onClick={HandleClicked3}
            >
              Overview
            </button>
            <button className="accordDetail" id="over2" onClick={HandleClicked}>
              Internal Structure
            </button>
            <button
              className="accordDetail"
              id="over3"
              onClick={HandleClicked2}
            >
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className="container px-4 py-3 content2">
        <div className="data1">
          <p>Rotation Time</p>
          <h1 className="display-4 fw-bold lh-1 ">{data.rotation}</h1>
        </div>
        <div className="data1">
          <p>Revolution Time</p>
          <h1 className="display-4 fw-bold lh-1 ">{data.revolution}</h1>
        </div>
        <div className="data1">
          <p>Radius</p>
          <h1 className="display-4 fw-bold lh-1 ">{data.radius}</h1>
        </div>
        <div className="data1">
          <p>Average Temp</p>
          <h1 className="display-4 fw-bold lh-1 ">{data.temperature}</h1>
        </div>
      </div>
    </div>
  );
}

export default ContentMercury;
