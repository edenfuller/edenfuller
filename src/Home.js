import React from "react";
import washedClean from "./washed_clean.jpg";
import outboundBlack from "./outbound_black.png";
function Home() {
  return (
    <section id="About" className="layout">
      <>
        <div className="about-content">
          <p>
            <a target="_blank" href="https://spacetelescopelive.org/">
              <span className="about-link">
                {"Space Telescope Live "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Lead front-end engineer, motion designer</strong>
            <br />
            {`Interactive web app for NASA on behalf of the Space Telescope Science Institute. Shows observation target and status for the Hubble Space Telescope and James Webb Space Telescope in real time, with information on the research program for each. Calendar and timeline tools enable the public to explore the entire history of over 30,000 JWST observations and 2,000,000 Hubble observations, spanning over 35 years.`}
          </p>
          <p>
            <a target="_blank" href="https://generations.canadagoose.com">
              <span className="about-link">
                {"Canada Goose Generations "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Lead front-end engineer</strong>
            <br />
            {`eCommerce site for the Canada Goose resale program.
            Trove's recommerce partnerships with leading fashion brands diverted
            over 2MM kg of C02 emissions in 2022.`}
          </p>
          <p>
            <a
              target="_blank"
              href="https://www.ikea.com/us/en/campaigns/affordable-home-essentials-pubfbd3fdc0"
            >
              <span className="about-link">
                {"IKEA Home Essentials "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Lead front-end engineer</strong>
            <br />
            {`App for creating a Product List Page (PLP) from a list of product
            SKUs that matches the UI and feature set of the PLPs dynamically
            generated for product categories. This gives IKEA's US marketing
            team increased control over key sales initiatives.`}
          </p>
          <p>
            <a
              target="_blank"
              href="https://explorestem2d.fhi360.org/index.html"
            >
              <span className="about-link">
                {"STEM Careers Quiz "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Lead front-end engineer, motion designer</strong>
            <br />
            {`Joint initiative between FHI360 and Johnson & Johnson to increase
            interest in STEM professions among middle and high school girls.`}
          </p>
          <p>
            <a target="_blank" href="https://www.nextengineers.org/">
              <span className="about-link">
                {"GE Next Engineers "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Front-end engineer, motion designer</strong>
            <br />
            {`Developed by FHI360 for a General Electric initiative to increase
            the diversity of young people in engineering.`}
          </p>
          <p>
            <a target="_blank" href="https://dress-code.surge.sh/">
              <span className="about-link">
                {"dress/code "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            <strong>Front-end engineer, designer (solo project)</strong>
            <br />
            {`An app I built to experiment with Data-Driven Documents (d3.js). It renders a radar chart that describes the dress code for an event via 5 traits. The chart animates as the user chooses different events from a dropdown.`}
          </p>
        </div>
      </>
    </section>
  );
}
export default Home;
