import React from "react";
import outboundBlack from "./outbound_black.png";
function About() {
  return (
    <section id="About" className="layout">
      <div className="about-content">
        <p>
          <strong>Eden Fuller</strong> is a front-end engineer with over a decade
          of experience building intuitive, reliable, and joyful interfaces for
          millions of users.
        </p>
        <p>She's currently a senior software engineer in the Office of Public Outreach at the{" "}
          <strong>Space Telescope Science Institute</strong>, NASA's astrophysics lab providing operations for the Hubble Space Telescope, James Webb Space Telescope, and Nancy Grace Roman Space Telescope.</p>
        <p>
          Eden has previously worked for orgs including: 
        </p>
        <ul>
          <li>
            <p><strong>Trove:</strong>{` `}Sustainable fashion startup providing resale operations for brands including Levi, Lululemon, REI, and Patagonia </p>
          </li>
          <li>
            <p><strong>IKEA:</strong>{` `}The world's leading furniture retailer, with one of the most-visited e-commerce sites on the Internet</p>
            </li>
          <li>
            <p><strong>FHI 360:</strong>{` `}Global nonprofit working to advance public health and education  </p>
          </li>
        </ul>
        <br />
        <p>
          <strong>
            <em>let's create together //</em>
          </strong>
          <br />
          <a href="mailto:eden.fuller@pm.me">
            <span className="about-link">
              email <img src={outboundBlack}></img>
            </span>
          </a>
          <br />
          <a href="https://linkedin.com/in/edenfuller">
            <span className="about-link">
              linkedin <img src={outboundBlack}></img>
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
export default About;
