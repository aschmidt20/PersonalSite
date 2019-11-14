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
                <p>Genesis Investments is an investment company that I co-founded with <a href="https://www.linkedin.com/in/jnassauyoung/">Josh Nassau-Young</a> in 2017. The mission of our company is to provide simple, transparent, and accessible financial services to people looking to invest in cryptocurrency and other blockchain assets. Our services can be broken up into two categories: Portfolio Management and Trading Algorithms.</p>
                <h5>Porftolio Management:</h5><p> Currently we operate two different kinds of portfolios: private and public. Our private holdings are managed through our company <a href="https://genesiscrypto.fund">website</a>. On this site we offer an online dashboard for asset/balance tracking, and insights into recent trades and performance. In order to offer our services to a larger audience, we also transitioned to offering a public fund avaiable through <a href="https://genesis.vision/">Genesis Vision</a> (not affiliated with us by the way). This platform allows us to offer our investing services to anyone, and provides potential investors with transparent insights into fund performances and trading history. </p>
                <h5>Trading Algorithms:</h5><p>Our trading algorithms are the foundations upon which our company was built. The company began with a simple observation, that accumulating Bitcoin was possible with simple methods of analyzing indicators. I wrote the company's initial algorithms while enrolled in CSE 331 (Algorithms and Data Structures), and this system led to promising results and the eventual formation of Genesis Investments. Over time our algorithms have undergone many iterations as we've experimented with a variety of methods. We currently utilize k-means clustering to group currencies into categories, a random forest classifiers to estimate the profitability of trades between clusters, another random forest classifier to estimate the profitability of currencies within the clusters, and regression models paired with a Recurrent Neural Network to determine entry and points for trades.</p>
                <h5>Current State and Looking Ahead to the Future: </h5>
                <p>The state of the cryptocurrrency marketplace today is very different than when our company was founded. Given the volatile downturn of the cryptocurrency marketplace, the current most profitable strategy for our company is to hold our profits in USD and continue to refine our trading algorithm and search for re-entry points into the marketplace. In addition to refining our cryptocurrency trading algorithms, we are also looking to generalize our algorithms to work with other assets. </p>

<p>
It was a difficult decision to cease trading this year given the effort that we’ve put into the development of our company growth and algorithms, but this decision has proved to be in the best interest of the company this year as cryptocurrency has continued its downturn. Altcoins have been hit the hardest this year and seeing that our algorithms are almost exclusively built upon trading amongst these coins, the decision to hold USD and wait for strategic re-entry points has proved to be very effective. We are anxiously awaiting a point where sustained profitability through trading is a possibility once again so we can re-open our public fund. </p>

                </div>
                <hr>
                </hr>
                <img src={trove} style={{width:"300px", height:"150px", margin: "0 auto", paddingBottom:"30px"}} alt='Trove Logo' />
                
                
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
