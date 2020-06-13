import React, { Component } from 'react';


var screenshotStyle={
  width:"100%", height:"400px"
}

var figureStyle={
  width: "33%",
  textAlign: "center",
  display: "inline-block",
  paddingBottom: "30px"

}

var figureStyleLarge={
  width: "100%",
  textAlign: "center",
  display: "inline-block",
  paddingBottom: "30px"

}

class Portfolio extends Component {

  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
    var genesis = "images/portfolio/genesis1.png"
    var trove = "images/portfolio/trove1.png"
    return (
      <section id="portfolio" style={{paddingTop:'50px'}}>

      <div className="row">

         <div className="twelve columns collapsed">

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf" style={{textAlign:"center"}}>
                <img src={genesis} style={{width:"500px", height:"150px", margin: "0 auto", paddingBottom:'30px'}} alt='Genesis Logo' />
                <br></br>
                <div id="portfolio-text" style={{textAlign:'left'}}>
                <p>Genesis Investments is a full service investment company specializing in blockchain technology and built for the 21st Century. Founded by Josh Nassau-Young and myself, Genesis Investments seeks to provide simple and transparent access to an exciting new class of assets. A decentralized financial marketplace can provide incredible investment opportunities, but navigating this young, complicated, and rapidly-growing landscape requires a strong understanding of the technical and business fundamentals at play. It's easy to get overwhelmed by the hype, hysteria, and rampant price speculation of cryptocurrencies like Bitcoin and Ethereum, and overlook the merits of the technical milestones that these projects represent. At Genesis Investments, we are striving to create a welcoming and transparently profitable on-ramp to the exciting world of blockchain.   </p>
                <h5>Our Services</h5>
                <p>Our services can be broken up into two different sectors: public and private. </p>
                <p>Our public fund is managed with <a href="https://genesis.vision">Genesis Vision</a> which allows us to provide public access to our financial services with completely transparent reporting. Genesis Vision has their services broken up into two parts: programs and funds. Programs are short term investment opportunities for day traders, and funds are longer term coin holdings. We participate in both programs and funds, but our focus has been primarily been on funds given the success of and demand for our previous funds. Our <a href="https://genesis.vision/users/genesis">Genesis Vision manager page</a> is where all of our active programs and funds can be viewed. We currently operate two funds, our <a href="https://genesis.vision/invest/funds/genesis-select-fund">Genesis Select Fund</a> has been active since 2018 and as of May 2020 is the <a hreg="https://genesis.vision/invest/funds/facets/top">11th most profitable fund of all time</a> on the platform with a total profit of 65.25%. We also just launched a <a href="https://genesis.vision/invest/funds/genesis-defi-selects">Genesis DeFi Selects</a> fund with holdings in key DeFi projects. We've been thrilled with the progress that the Genesis Vision platform has made in recent months with analytics improvements, easier deposits, and more social trading features. We hope to continue improving our services and staying up-to-date with bringing you the latest investment options. The <a href="https://blog.genesis.vision/">Genesis Vision Blog</a> is a great place to learn about the platform, and gives instructions on how to make deposits and invest in programs/funds. </p>
                <p>Genesis Vision has been a game-changer for us in providing public access to our investing services, but doesn't capture the full scope of our company. We seek to provide our investors with access to the very best that the DeFi space has to offer with our private portfolio management. Currently our private fund is very limited, but a high priority for our company is to merge our public and private funds and offer our DeFi services through a seperate application or allow investing directly through our site. This merger is a work in progress as it requires integration of fund information from a variety DeFi services and Genesis Vision directly to our site dashboard.</p>
                </div>
                <hr>
                </hr>
                <img src={trove} style={{width:"300px", height:"150px", margin: "0 auto", paddingBottom:"30px"}} alt='LiveSpot Logo' />
                
                
                <div id="portfolio-text" style={{textAlign:'left'}}>
                <p>Trove Labs is a data analytics company built to increase customer loyalty and engagment for small businesses. We seek to achieve customer engagment through loyaylty programs and custom promotions pushed out through our iOS and Android mobile apps. Our product is still in development, but we hope to launch the apps in late 2019 or early 2020. Some screenshots from the iOS app are shown below.</p>
                <figure style={figureStyle}>
                  <img style={screenshotStyle} src="images/portfolio/rewards.png" alt="iOS rewards screen"></img>
                  <figcaption>iOS Rewards Screen</figcaption>
                </figure>
                <figure style={figureStyle}>
                  <img style={screenshotStyle} src="images/portfolio/redeem.png" alt="iOS redemption screen"></img>
                  <figcaption>iOS Reward Redemption Screen</figcaption>
                </figure>
                <figure style={figureStyle}>
                  <img style={screenshotStyle} src="images/portfolio/deals.png" alt="iOS deals/promotions screen"></img>
                  <figcaption>iOS Promotions Screen</figcaption>
                </figure>
                <p>In addition to mobile apps for customers, we provide merchants with a dashboard built to help business owners analyze consumer trends, and tailor promotions and other business decisions based on these insights. Our system collects consumer data through Bluetooth Low Energy sensors located inside of stores which facilitate interactions with the mobile apps. These sensors track customer movement inside the store as well as interactions with the stores loyalty and promotions programs. This data is then aggregated to our merchant dashboard, a sample of which and the associated code is shown below. Our eventual goal for the product is to implement a payment system into our mobile apps which will greatly increase the value of our product to both consumers and merchants. There a number of technical and regulatory hurdles that we must work through in order to reach this state, but in the meantime we are working to build up our rewards and promotions platform and a base of merchants to implement our system.</p>
                </div>

                <figure style={figureStyleLarge}>
                  <img style={screenshotStyle} src="images/portfolio/dashboard.PNG" alt="Admin Dashboard Screenshot"></img>
                  <figcaption>Admin Dashboard Screenshot</figcaption>
                </figure>


                
                <hr></hr>
                <div style={{textAlign:"center", paddingBottom:"40px"}}>
                  <h3>Additional Projects</h3>
                </div>
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
