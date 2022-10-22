import React from "react";

import styled from "styled-components";

function NavbarData() {
  return (
    <NavbarSection>
      <div class="container-fluid">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-2 ">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-md-0 me-md-auto  head1"
          >
            The Planetary
          </a>

          <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="mercury"
                data-bs-toggle="pill"
                data-bs-target="#pills-mercury"
                type="button"
                role="tab"
                aria-controls="pills-mercury"
                aria-selected="true"
              >
                mercury
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="venus"
                data-bs-toggle="pill"
                data-bs-target="#pills-venus"
                type="button"
                role="tab"
                aria-controls="pills-venus"
                aria-selected="false"
              >
                venus
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="earth"
                data-bs-toggle="pill"
                data-bs-target="#pills-earth"
                type="button"
                role="tab"
                aria-controls="pills-earth"
                aria-selected="false"
              >
                earth
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="mars"
                data-bs-toggle="pill"
                data-bs-target="#pills-mars"
                type="button"
                role="tab"
                aria-controls="pills-mars"
                aria-selected="false"
              >
                mars
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="jupiter"
                data-bs-toggle="pill"
                data-bs-target="#pills-jupiter"
                type="button"
                role="tab"
                aria-controls="pills-jupiter"
                aria-selected="false"
              >
                jupiter
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="saturn"
                data-bs-toggle="pill"
                data-bs-target="#pills-saturn"
                type="button"
                role="tab"
                aria-controls="pills-saturn"
                aria-selected="false"
              >
                saturn
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="uranus"
                data-bs-toggle="pill"
                data-bs-target="#pills-uranus"
                type="button"
                role="tab"
                aria-controls="pills-uranus"
                aria-selected="false"
              >
                uranus
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="neptune"
                data-bs-toggle="pill"
                data-bs-target="#pills-neptune"
                type="button"
                role="tab"
                aria-controls="pills-neptune"
                aria-selected="false"
              >
                neptune
              </button>
            </li>
          </ul>
        </header>
      </div>
    </NavbarSection>
  );
}

const NavbarSection = styled.section`
  width: 1440px;

  .head1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 700;
    font-family: var(--antonio);
    letter-spacing: 0.15rem;
  }

  .nav-link {
    font-family: var(--spartan);
    font-size: 1.1rem;
    color: var(--dim);
    font-weight: 400;
    border-radius: 1px solid #000;
    background-color: #000;
    text-transform: capitalize;
    letter-spacing: 0.04rem;
  }

  .nav-link:hover {
    border-bottom: 1px solid var(--skinwhite);
    border-radius: 0;
    transition: all 0.3s ease-in-out;
    color: var(--skinwhite);
  }

  .nav-link.active {
    font-family: var(--spartan);
    font-size: 1.1rem;

    background-color: #000;
    color: #fff;
    border-radius: 0;
    border-bottom: 1px solid var(--skinwhite);
    transition: all 0.3s ease-in-out;
  }
`;

export default NavbarData;
