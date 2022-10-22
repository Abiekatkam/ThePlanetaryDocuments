import React from "react";

import planet from "../assests/planet-venus.svg";
import internal from "../assests/planet-venus-internal.svg";
import geology from "../assests/geology-venus.png";

function ContentVenus({ data }) {
  const HandleClicked = (e) => {
    e.preventDefault();
    document.getElementById("data5").classList.remove("hidden");
    document.getElementById("data4").classList.add("hidden");
    document.getElementById("data6").classList.add("hidden");
  };
  const HandleClicked2 = (e) => {
    e.preventDefault();
    document.getElementById("data5").classList.add("hidden");
    document.getElementById("data4").classList.remove("hidden");
    document.getElementById("data6").classList.remove("hidden");
  };
  const HandleClicked3 = (e) => {
    e.preventDefault();
    document.getElementById("data4").classList.remove("hidden");
    document.getElementById("data5").classList.add("hidden");
    document.getElementById("data6").classList.add("hidden");
  };
  return (
    <div
      class="tab-pane fade"
      id="pills-venus"
      role="tabpanel"
      aria-labelledby="venus"
      tabindex="0"
    >
      <div className="row g-lg-5 pt-0 pb-2 content">
        <div className="col-lg-7 text-center text-lg-center imgcontainer">
          <img src={planet} alt="alt" className="images img1" id="data4" />
          <img src={internal} alt="alt" className="images hidden" id="data5" />
          <img
            src={geology}
            alt="alt"
            className="images hidden img3"
            id="data6"
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

export default ContentVenus;
