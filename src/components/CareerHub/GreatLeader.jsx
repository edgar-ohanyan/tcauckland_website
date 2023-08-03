import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const GreatLeader = () => {
  return (
    <div>
      <div className="stickyNavButtonBox">
        <Link to="/career-hub" className="card-nav-link">
          <BsFillArrowLeftCircleFill size={50} style={{ color: "#4b73b8" }} />
        </Link>
      </div>
      <div className="page-content">
        <h1 className="page-title">
          How to be a great leader, both inside and outside the classroom.
        </h1>
        <p className="page-content-text-primary">
          As a teacher, each day you’ll be leading, inspiring and motivating
          your students. Whether through planning lessons or assemblies,
          encouraging your pupils to learn or co-ordinating extra-curricular
          activities, leadership and people management skills will form a key
          part of your role. Whatever your position or experience is, if you’re
          looking to advance your educational career and progress to a more
          senior position, it will help you if you build on your skills outside
          the classroom. You may be aiming to become a senior teacher, a head of
          department, or even a head teacher. Whatever role you want, the type
          of leader that you will ultimately be will be unique to you. It will
          depend on your personality, teaching style, and the existing skills
          you have. But, there are multiple things which you can work on to
          really hone your leadership skills, and eventually put them to
          practice. So, here are three things to help you do this:
        </p>
      </div>
      <div className="chapter-content-text">
        <h2 className="chapter-title">Find a mentor</h2>
        <p>
          A simple first step to improving your leadership skills is to ask
          someone, whose leadership style you admire or are interested in, to
          mentor you and help you build your skills. This could be someone
          within the education sector, for example your head of department or a
          member of the senior leadership team, or someone from outside of
          education who is also in a senior role. Any person who is able to lead
          a team, enforce successful policies, and deliver results whilst being
          respected by their team will be able to inspire you. You can then
          observe how they achieve this, and apply it to your own leadership
          style.
        </p>
        <p>
          The first thing to do here is to establish a relationship, for example
          by asking for some initial advice, or asking them to observe how you
          teach or lead already, and provide feedback. It may also help you to
          set goals that you can work towards, and ask your mentor to provide
          constructive feedback.
        </p>
        <h2 className="chapter-title-secondary">Work outside the classroom</h2>
        <p>
          To improve your leadership skills in the classroom, it’s important to
          proactively step outside of your daily classroom environment and get
          involved in wider school projects. By stepping outside of your
          day-to-day responsibilities, you can gain wider experience in leading,
          for example, by taking charge of running a school trip, or setting up
          a new after school club.
        </p>
        <p>
          Whilst doing this, you’ll likely be working with other colleagues,
          building your experience of working in a team, whilst showing that you
          are committed to your role within the school. Plus, you’ll be able to
          network with influential members of departments.
        </p>
        <h2 className="chapter-title-secondary">
          Improve your communication skills
        </h2>
        <p>
          No matter how good you are at leading, you’ll always be better if you
          can communicate your ideas and policies clearly and effectively. By
          definition, leaders aren’t shy and quiet, but neither do they have to
          be boisterous and demanding. Improving your communication skills is as
          much about actively listening to others as it is about improving both
          your verbal and non-verbal skills. This way, you’ll make yourself
          heard and make what you say coherent and persuasive.
        </p>
        <p>
          If you want to be listened to, trusted and respected by your team,
          ensure that you practise your style and take time out to understand
          your audience before you address them. This means listening to their
          concerns, understanding how they work and how they are likely to be
          motivated before you begin communicating demands or new ideas.
        </p>
        <p>
          If you'd like some more advice, get in touch with our specialist team
          today.
        </p>
      </div>
    </div>
  );
};
