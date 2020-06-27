import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/portfolio/grad.jpg";

      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns" style={{ width: "35%" }}>
            <img
              className="profile-pic"
              src={profilepic}
              style={{ width: "300px", height: "273px" }}
              alt="Andrew Schmidt Profile Pic"
            />
            <div style={{ color: "white", textAlign: "center" }}>
              <p style={{ marginBottom: "0px", color: "white" }}>
                {" "}
                &#x2193; Check out my music below &#x2193;
              </p>
            </div>
            <iframe
              src="https://open.spotify.com/embed/artist/1ZYwU0XJAEe1gUejqyqkhv"
              width="300"
              height="300"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div className="nine columns main-col" style={{ width: "65%" }}>
            <h2>About Me</h2>

            <p style={{ color: "white" }}>
              In my senior year of high school, I was awarded the Alumni
              Distinguished Full Ride Scholarship to attend Michigan State
              University.
            </p>
            <p style={{ color: "white" }}>
              My scholarship covered four years of education and I made it my
              mission to learn and do as many things as possible in these four
              years. I graduated with by B.S., Computer Science with a minor in
              Math in 2 1/2 years. I was a member of Smash Club, Vice President
              of Poker Club, and Founding Father of Sigma Tau Gamma Fraternity.
              I have also been involved with the{" "}
              <a href="http://msuhatch.com/">
                MSU Hatch and Spartan Innovations
              </a>{" "}
              to launch two startup companies: Genesis Investments and LiveSpot
              (formerly Trove Labs LLC).
            </p>
            <p style={{ color: "white" }}>
              I just finished my final semester and graduated with my Masters of
              Computer Science in May 2020. Throughout graduate school I worked
              as a teaching assistant under{" "}
              <a href="https://www.cse.msu.edu/~cbowen/">Dr. Charles Owen</a>{" "}
              helping students in Web Application Development and Object
              Oriented Programming. Currently I'm continuing to work on both
              start-ups and I'm also searching for permanent employment as a
              full-time software engineer. I have proven leadership, desire to
              learn, software engineering and experience with a wide variety of
              technologies and software/product development. I have a passion
              for leveraging software and data to make a difference in peoples
              lives, and I'm seeking to apply my skillset and ideas in a full
              time Software Engineering role.{" "}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <br></br>
                <h2>Contact Details</h2>
                <p className="address" style={{ color: "white" }}>
                  <span>{name}</span>

                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>
                    <a href="mailto:schmi651@msu.edu">Email Me</a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <br></br>
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
