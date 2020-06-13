import React, { Component } from 'react';


class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         
            <h1 className="responsive-headline">Hi, I'm {name}</h1>
            <h4 style={{color: 'white'}}>Software Developer | Entrepreneur</h4>
            <hr />
            <h4 style={{color:'white'}}>&#8595; Check out my company websites &#8595;</h4> 
               <hr />
               <div className="company-panel" style={{display:'inline-block'}}><a href="https://genesiscrypto.fund"><img src="images/portfolio/genesis2.png" alt="Genesis Investments Logo"></img></a></div>
               <div className="company-panel" style={{display:'inline-block'}}><a href="https://livespot.tk"><img src="images/portfolio/livespot.png" alt="LiveSpot Logo"></img></a></div>
         </div>
        </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
