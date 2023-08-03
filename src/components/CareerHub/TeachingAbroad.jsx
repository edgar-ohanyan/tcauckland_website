import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const TeachingAbroad = () => {
  return (
    <div>
      <div className="stickyNavButtonBox">
        <Link to="/career-hub" className="card-nav-link">
          <BsFillArrowLeftCircleFill size={50} style={{ color: "#4b73b8" }} />
        </Link>
      </div>
      <div className="page-content">
        <h1 className="page-title">
          Why teaching abroad was the best decision of my life...
        </h1>
        <p className="page-content-text-primary">
          With a backpack and one very large suitcase in tow, I squeezed my mom
          and sister one last teary time and headed for the security line.
          Beijing, China. I was on my way to China. Wait…where? China. Yes,
          that’s it, China.
        </p>
      </div>
      <div className="chapter-content-text">
        <p>Since beginning teachers’ college in 2014, I had the idea in my mind that my next step would be going abroad. The UK crossed my mind first, or perhaps the UAE where my sister would soon be heading. It was a constant flow of thoughts that didn’t touch down on a base until February; right in the middle of my last teaching placement. When I had the second Skype interview with an American school in Beijing, wearing a blouse and my pyjama pants, I thought it was a dream. My body was going through the motions that I thought were in line with what I wanted, but in fact…I didn’t know what I wanted. Or where I wanted to be. Welcome to life post-graduation, my professors told me.</p>
        <p>I boarded the plane with a sea of mandarin words bubbling around me from my fellow travelers, and off I went on an adventure, an experience, that would ultimately change my life and the way I viewed the world. The city I arrived in was hot, extremely crowded, insane, and wonderful. Granted, it was not wonderful every day – there were challenges. But these were only side-thoughts and held little importance in the two years to come. Immediately, I was embraced by a school community that was inspiring and supportive. We hit the ground running with school and city orientation, apartment hunting, classroom set-up, lesson planning, and of course – Tsingtao, the “famous” Chinese beer. I entered my classroom, my school, the city, with an open mind and soaked up every piece of information that was thrown at me. Some days I felt my mind was so full that it may not have room for anything else, but there was always room. Always. And it kept being filled.</p>
        <p>Looking back, two years disappeared in the blink of an eye. I was surrounded by 50 of the kindest, most motivated students. I think of them often still and feel so privileged to have had the opportunity to work alongside them. I befriended and learned from colleagues from 5 continents, and travelled to 8 countries. I hiked the Himalayas, climbed China’s most renowned mountain, visited the Great Wall 7 times, practiced yoga in Nepal, rode a bus for 32 hours, lived in an open courtyard during China’s coldest winter in 26 years, sampled a cuisine of grasshoppers and scorpions…but these experiences barely touch the surface of what I gained and how I changed during this time.</p>
        <p>They say that to travel is to see and experience. But to live, to immerse yourself fully in a new culture; it opens your eyes to see, yes – it presents exhilarating experiences, yes, but ultimately - it yields deeper understanding. Existing day to day with people who are different than yourself, and still finding similarities; noticing things you don’t agree with, but learning to accept; discovering that the values you were brought up with are not the only values; realizing that although you are important, you are small; and understanding that education is transformative and has the ability to open not only the minds of your students, but also your own mind. These are the things that will stick with me forever.</p>
        <p>During my time teaching abroad in China, I fell in love – with education, with my students, with life, and with a person who I hope to spend a great deal of my life with. I would not trade this experience for anything.</p>
      </div>
    </div>
  );
};
