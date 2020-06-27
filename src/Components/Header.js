import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm {name}</h1>
            <h4 style={{ color: "white" }}>
              Software Developer | Entrepreneur
            </h4>
          </div>
          <Carousel
            showArrows={true}
            useKeyboardArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <a href="https://genesiscrypto.fund">
                <img src="images/portfolio/gi.png" />
                <p className="legend">
                  Blockchain investment fund with a focus on providing simple
                  and transparent financial services
                </p>
              </a>
            </div>
            <div>
              <a href="https://livespot.tk">
                <img src="images/portfolio/livespot.jpg" />
                <p className="legend">
                  Social media application for staying connected at live events
                  via Bluetooth mesh network
                </p>
              </a>
            </div>
            <div>
              <a href="https://liquidyield.finance">
                <img src="images/portfolio/liquidyield.png" />
                <p className="legend">
                  Aave Uniswap Market pool explorer and zap into 100% ETH
                  leveraged liquidity provision
                </p>
              </a>
            </div>
            <div>
              <a href="https://groove-guide.com">
                <img src="images/portfolio/grooveguide.png" />
                <p className="legend">
                  Real-time Spotify music recommendation engine and player
                </p>
              </a>
            </div>
          </Carousel>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
