import React from "react";
import washedClean from "./washed_clean.jpg";
import outboundBlack from "./outbound_black.png";
function Home() {
  return (
    <section id="About" className="layout">
      <>
        <div className="about-content">
          <p>
            <a target="_blank" href="https://www.onward.on-running.com/">
              <span className="about-link">
                {"On Running Onward "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            {` & `}
            <a target="_blank" href="https://generations.canadagoose.com">
              <span className="about-link">
                {"Canada Goose Generations "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            {`eCommerce sites for the On Running and Canada Goose resale programs.
            Trove's recommerce partnerships with leading fashion brands diverted
            over 2MM kg of C02 emissions in 2022. Lead front-end engineer.`}
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
            {`App for creating a Product List Page (PLP) from a list of product
            SKUs that matches the UI and feature set of the PLPs dynamically
            generated for product categories. This gives IKEA's US marketing
            team increased control over key sales initiatives. Lead front-end
            engineer.`}
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
            {`Joint initiative between FHI360 and Johnson & Johnson to increase
            interest in STEM professions among middle and high school girls.
            Lead front-end engineer and animation designer.`}
          </p>
          <p>
            <a target="_blank" href="https://www.nextengineers.org/">
              <span className="about-link">
                {"GE Next Engineers "}
                <img className="outbound-icon" src={outboundBlack} />
              </span>
            </a>
            <br />
            {`Developed by FHI360 for a General Electric initiative to increase
            the diversity of young people in engineering. Designed and developed
            interative and animated elements.`}
          </p>
        </div>
      </>
    </section>
  );
}
export default Home;
