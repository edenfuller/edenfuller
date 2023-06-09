import React from "react";
import outboundBlack from "./outbound_black.png";
function About() {
  return (
    <section id="About" className="layout">
      <div className="about-content">
        <p>
          <strong>Eden Fuller</strong> is a front-end web engineer with 8 years
          of experience building intuitive, reliable, and joyful interfaces for
          millions of users. Eden is currently the lead storefront engineer at{" "}
          <strong>Trove</strong>. She's previously worked at{" "}
          <strong>IKEA</strong>, <strong>AOL</strong>, and{" "}
          <strong>Brinkbit</strong>.
        </p>
        <p>
          Eden is also a science fiction writer whose short stories have
          appeared in <em>Nature Futures</em>, <em>Daily Science Fiction</em>,
          and <em>Asimov's Science Fiction Magazine</em>.
        </p>
        <p>
          <strong>
            <em>let's create together //</em>
          </strong>
          <br />
          <a href="mailto:fuller.eden.m@gmail.com">
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
