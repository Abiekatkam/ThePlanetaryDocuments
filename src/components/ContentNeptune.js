import React from "react";

import planet from "../assests/planet-neptune.svg";
import internal from "../assests/planet-neptune-internal.svg";
import geology from "../assests/geology-neptune.png";

function ContentNeptune({ data }) {
  const HandleClicked = (e) => {
    e.preventDefault();
    document.getElementById("data23").classList.remove("hidden");
    document.getElementById("data22").classList.add("hidden");
    document.getElementById("data24").classList.add("hidden");
  };
  const HandleClicked2 = (e) => {
    e.preventDefault();
    document.getElementById("data23").classList.add("hidden");
    document.getElementById("data22").classList.remove("hidden");
    document.getElementById("data24").classList.remove("hidden");
  };
  const HandleClicked3 = (e) => {
    e.preventDefault();
    document.getElementById("data22").classList.remove("hidden");
    document.getElementById("data23").classList.add("hidden");
    document.getElementById("data24").classList.add("hidden");
  };
  return (
    <div
      class="tab-pane fade"
      id="pills-neptune"
      role="tabpanel"
      aria-labelledby="neptune"
      tabindex="0"
    >
      <div className="row g-lg-5 pt-0 pb-2 content">
        <div className="col-lg-7 text-center text-lg-center imgcontainer">
          <img src={planet} alt="alt" className="images img1" id="data22" />
          <img src={internal} alt="alt" className="images hidden" id="data23" />
          <img
            src={geology}
            alt="alt"
            className="images hidden img3"
            id="data24"
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
            <button className="accordDetail " onClick={HandleClicked3}>
              Overview
            </button>
            <button className="accordDetail" onClick={HandleClicked}>
              Internal Structure
            </button>
            <button className="accordDetail" onClick={HandleClicked2}>
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

export default ContentNeptune;
