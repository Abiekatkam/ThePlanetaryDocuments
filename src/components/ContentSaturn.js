import React from "react";
import planet from "../assests/planet-saturn.svg";
import internal from "../assests/planet-saturn-internal.svg";
import geology from "../assests/geology-saturn.png";

function ContentSaturn({ data }) {
  const HandleClicked = (e) => {
    e.preventDefault();
    document.getElementById("data17").classList.remove("hidden");
    document.getElementById("data16").classList.add("hidden");
    document.getElementById("data18").classList.add("hidden");
  };
  const HandleClicked2 = (e) => {
    e.preventDefault();
    document.getElementById("data17").classList.add("hidden");
    document.getElementById("data16").classList.remove("hidden");
    document.getElementById("data18").classList.remove("hidden");
  };
  const HandleClicked3 = (e) => {
    e.preventDefault();
    document.getElementById("data16").classList.remove("hidden");
    document.getElementById("data17").classList.add("hidden");
    document.getElementById("data18").classList.add("hidden");
  };
  return (
    <div
      class="tab-pane fade"
      id="pills-saturn"
      role="tabpanel"
      aria-labelledby="saturn"
      tabindex="0"
    >
      <div className="row g-lg-5 pt-0 pb-2 content">
        <div className="col-lg-7 text-center text-lg-center imgcontainer">
          <img src={planet} alt="alt" className="images img1" id="data16" />
          <img src={internal} alt="alt" className="images hidden" id="data17" />
          <img
            src={geology}
            alt="alt"
            className="images hidden img3"
            id="data18"
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

export default ContentSaturn;