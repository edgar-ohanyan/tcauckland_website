import React from 'react';
import './AboutUs.css';
import founderImage from '../../assets/images/founder.png';
import directorImage from '../../assets/images/director.png';
const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At <strong>The Collaborative</strong>, we stand at the crossroads of education and employment within the 
          Middle East and North Africa (MENA) region—a vital nexus that supports over 300 million people. Recognizing 
          the profound impact of education on the region's future, we have aligned our efforts with business leaders 
          and educational holding companies across the Gulf Cooperation Council (GCC) countries to deliver exceptional 
          value in the labor market and prepare our youth for the challenges ahead.
        </p>
        <p>
          Founded on the principles of innovation and excellence, The Collaborative is a premier provider of educational 
          services. We specialize in placing highly qualified professionals—including teachers, principals, and 
          university lecturers—from the UK, the US, Australia, and New Zealand into prime educational roles, aiming to 
          nurture and elevate the next generation of leaders.
        </p>
        <p>
          Our approach is distinguished by a commitment to tailored solutions, reflecting the unique needs of each 
          institution we partner with. By integrating advanced strategies and fostering cultural and social advancement, 
          we empower schools to become leaders in their fields.
        </p>
        <p>
          Embracing the core values of <strong>Transparency, Simplicity, and Integrity</strong>, The Collaborative 
          believes in clear, effective communication and straightforward processes. This commitment ensures not only 
          openness across all levels of our operations but also superior outcomes for the educational communities we 
          support. Through our work, we strive to achieve lasting impacts, enhancing the educational landscape for 
          generations to come.
        </p>
      </section>

      <section className="leadership-team">
        <h2>Meet The Leadership Team</h2>

        <div className="leader">
          <img src={founderImage} alt="Sondos Al-Fadhly" className="leader-image" />
          <div className="leader-info">
            <h3>MEET OUR FOUNDER & CEO</h3>
            <h4>Sondos Al-Fadhly</h4>
            <p>
              Sondos Al-Fadhly is a distinguished leader in the field of education, with over 15 years of experience 
              shaping the minds of young people. Holding a PGCE in Secondary Business Studies and a Master's in 
              Educational Leadership from the University of Auckland, she has been at the forefront of educational 
              innovation and excellence. As the visionary founder and CEO of The Collaborative, Sondos has dedicated her 
              career to transforming educational landscapes across the Middle East and North Africa. Her unwavering 
              commitment to education is driven by a child-centered philosophy, ensuring that every initiative nurtures 
              the potential of young minds, empowering them to thrive and succeed in a dynamic world.
            </p>
          </div>
        </div>

        <div className="leader">
          <img src={directorImage} alt="Saleh Al-Asadi" className="leader-image" />
          <div className="leader-info">
            <h3>MEET OUR MANAGING DIRECTOR</h3>
            <h4>Saleh Al-Asadi</h4>
            <p>
              Saleh Al-Asadi is a dynamic leader in international education, with over 15 years of experience in 
              establishing schools and educational centres across Qatar, Kuwait, and the UAE. As Managing Director, Saleh 
              has been instrumental in shaping educational opportunities that reflect the highest standards of learning 
              and student engagement.
            </p>
            <p>
              Holding a PGCE in Secondary English from Cambridge University and a Master’s of Business Management from the 
              University of Auckland, Saleh's academic and professional journey is marked by a commitment to excellence 
              and innovation in education. Saleh’s vision is to develop human skills capacity and prepare the citizens of 
              these countries for the challenges of tomorrow by enhancing education as a transformative platform for value 
              creation in the labor market.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
