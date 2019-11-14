import React, { Component } from 'react';

class Resume extends Component {
  
  render() {
    if(this.props.data){
      console.log(this.props.data.education);
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul><li>{education.gpa}</li><li>{education.extra}</li><li>{education.courses}</li></ul>
        
    </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
        <ul style={{listStyleType:'circle'}}>
            <li>Python (Pandas, NumPy, scikit-learn, TensorFlow, Keras, matplotlib)</li>
            <li>Java (Spring)</li>
            <li>C++</li>
            <li>Web Development with HTML, CSS, PHP, ReactJS, Django</li>
            <li>Data Management with SQL and Firebase</li>
            <li>Data Mining: Preprocessing, Classification, Clustering, Association Rule Mining and Regression</li>
            <li>Data Visualization: matplotlib, seaborn, and dashboards with Django/Reactjs</li>
            <li>Strong written and verbal communication skills</li>

        </ul>

				
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;


