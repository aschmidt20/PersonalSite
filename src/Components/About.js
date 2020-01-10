import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns" style={{width:'35%'}}>
            <img className="profile-pic"  src={profilepic} style={{width: "300px", height:"375px"}} alt="Andrew Schmidt Profile Pic" />
            <div style={{color: 'white', textAlign: 'center'}}><p style={{marginBottom:'0px', color: 'white'}}> &#x2193; Check out my music below &#x2193;</p></div>
            <iframe src="https://open.spotify.com/embed/artist/1ZYwU0XJAEe1gUejqyqkhv" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         </div>
         <div className="nine columns main-col" style={{width:'65%'}}>
            <h2>About Me</h2>

            <p style={{color:"white"}}>In my senior year of high school, I was awarded the Alumni Distinguished Full Ride Scholarship to attend Michigan State University.</p><p style={{color:"white"}}>

My scholarship covered four years of education and I made it my mission to learn and do as many things as possible in these four years. I graduated with by B.S., Computer Science with a minor in Math in 2 1/2 years. I was a member of Smash Club, Vice President of Poker Club, and Founding Father of Sigma Tau Gamma Fraternity. I have also been involved with the <a href='http://msuhatch.com/'>MSU Hatch and Spartan Innovations</a> to launch two startup companies: Genesis Investments and Trove Labs. 

</p><p style={{color:"white"}}>I'm currently in my fourth year, and I'm on track to graduate with a Master's in Computer Science in May, 2020. This year I've continued working as an entrepreneur and picked up a position as a graduate teaching assistant. I'm looking to find a full-time job in the area of software engineering.</p>
            <div className="row">
               <div className="columns contact-details">
                  <br></br>
                  <h2>Contact Details</h2>
                  <p className="address" style={{color:"white"}}>
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span><a href="mailto:schmi651@msu.edu">Email Me</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <br></br>
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
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
