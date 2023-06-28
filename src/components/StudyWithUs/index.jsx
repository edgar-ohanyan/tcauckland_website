import React from "react";
import Button from '@mui/material/Button';
import graduate from "../../assets/pictures/graduate.jpg";

import "./studyWithUs.css"

export default function StudyWithUs() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={graduate} className="main-picture" alt="home_bg" />
      </div>
      <div className="page-content">
        <h1 className="page-title">Our University sector is Unique:</h1>
        <p className="page-content-text">New Zealand, a country renowned for its stunning landscapes and vibrant culture, is home to eight universities that uphold the highest standards of education and research. Each of these universities holds a remarkable position, being ranked in the top 3% of global universities, which translates to being among the top 500 universities worldwide.</p>
        <p className="page-content-text">Moreover, New Zealand's universities have achieved significant recognition in various subject areas. In fact, they are consistently ranked within the top 50 universities globally in 22 different subjects, demonstrating their excellence and expertise in a diverse range of academic fields. Furthermore, out of a possible 46 subjects, these universities feature in the top 100 in an impressive 39 subjects, further solidifying their commitment to academic excellence and innovation.</p>
        <p className="page-content-text">One of the remarkable aspects of New Zealand's higher education system is the outstanding graduate outcomes that students experience. New Zealand graduates enjoy some of the best graduate outcomes in the world, owing to the comprehensive and rigorous education they receive. These outcomes are reflected in the high completion and employment rates, as well as the low rates of under-employment among graduates. The universities' focus on equipping students with the skills and knowledge necessary to excel in their chosen fields ensures that they are well-prepared for the workforce and have a competitive edge in the global job market.</p>
        <p className="page-content-text">While seven of the universities in New Zealand offer a wide range of subjects spanning arts, sciences, commerce, engineering, and health sciences, Lincoln University stands out as a specialist land-based institution. With its unique emphasis on land-based disciplines such as agriculture, environmental science, and landscape architecture, Lincoln University plays a crucial role in supporting New Zealand's agricultural and environmental sectors.</p>
        <p className="page-content-text">In conclusion, New Zealand's universities have garnered a well-deserved reputation for their exceptional quality and academic prowess. Their consistently high rankings, not only as institutions but also in various subject areas, attest to their commitment to providing world-class education and research opportunities. Graduates from these universities benefit from exceptional career prospects, ensuring a strong foundation for their professional endeavors. The diversity of subjects and areas of specialization offered by these institutions further contributes to the richness and breadth of New Zealand's higher education landscape, making it an attractive destination for students seeking excellence and a truly global education.</p>
      </div>
      <div className="apply-study-button-box">
        <Button variant="contained" sx={{ backgroundColor: '#4daeda', width: 300, fontSize: 20 }}>Apply For Study</Button>
      </div>
    </div>
  );
}
