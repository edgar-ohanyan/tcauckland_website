import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import "./CareerHub.css";

export const ReasonsToTeachInternationally = () => {
  return (
    <div className="reasonsToTeachInternationally">
      <div className="stickyNavButtonBox">
        <Link to='/career-hub' className="card-nav-link">
          <BsFillArrowLeftCircleFill size={50} style={{ color: "#4b73b8" }}/>
        </Link>
      </div>
      <div className="page-content">
        <h1 className="page-title">'Teach the world, live the dream!'</h1>
        <h1 className="page-title">
          That is the saying here at The Collobrative
        </h1>
        <p className="page-content-text-primary">
          Working abroad is the experience of a lifetime, and can develop your
          career in ways you can only dream of at home! Many of our consultants
          have done just that as international teachers before they started
          working here to help you do the same! So are you stuck in a rut at
          your current school? Thinking of packing a suitcase and leaving it all
          behind? Do you wish you earned enough not just to survive, but to
          thrive, more reflective of all the time and effort you put in to your
          work? If you answered yes, then read on for 8 reasons why you should
          feel the fear and start your international teaching journey now!
        </p>
      </div>
      <div className="chapter-content-text">
        <h2 className="chapter-title">Why you should teach internationally</h2>
        <h2 className="chapter-title-secondary">Travel:</h2>
        <p>
          If you love to travel, working abroad is the perfect choice to see the
          world and get paid at the same time! Travelling long-term can be
          expensive, even if you’re sticking to a strict budget. It is even
          tougher if you have regular payments to maintain at home for example
          student loan costs or even a mortgage. You get to explore a new
          country on a whole new level, while earning a decent income and
          without sacrificing your career!
        </p>
        <h2 className="chapter-title-secondary">Money:</h2>
        <p>
          When we say 'decent income', we do mean it! That’s right, jobs abroad
          often pay much better than jobs at home. Also, with living costs being
          much lower in many countries we work with, and schools often paying
          you an accommodation allowance on top of your wage, or even providing
          your housing in full, you might even find you’re able to save a lot
          more than you would at home. This will allow you to travel even more
          during holidays if that’s what you want to do, and possibly in between
          work opportunities, or just save it all up and have a nest egg to
          return home with!
        </p>
        <h2 className="chapter-title-secondary">Skills:</h2>
        <p>
          Whether you’re a serial traveller or this is your first trip abroad,
          you’ll gain new perspectives and learn things about yourself and your
          home country that you never knew before. No matter what country you
          move to, working abroad will undoubtedly lead you to learn new skills
          professionally as a teacher and as a person, pushing you out of your
          comfort zone. After all, navigating a new country and city without
          speaking the language makes you resourceful, and working in an
          international team will help to improve your broader communication
          skills.
        </p>
        <h2 className="chapter-title-secondary">Language:</h2>
        <p>
          Talking of language, consider it a bonus when you work overseas if you
          end up in a country where you don't actually speak the language! This
          gives you the unique opportunity to learn a new language abroad and
          practice your new skills with locals. This will not only help you
          better integrate into your new role, but also help you stand out from
          the crowd in the future. Learning a new language is associated with
          long-term benefits, like improved memory, improved attention span, and
          boosted creativity. So work overseas and boost your brain power!
        </p>
        <h2 className="chapter-title-secondary">Career development:</h2>
        <p>
          Having an international assignment on your CV could boost your future
          employability. Your stint working abroad will prove that you’re
          flexible and independent, and help you stand out from the crowd. Most
          schools we work with offer extensive CPD to their staff, even
          assigning you a personal budget to choose where you want to focus your
          learning. Working abroad can also speed up your moves up the career
          ladder; with the natural turnover of staff overseas on temporary
          contracts being a lot quicker than with permanent jobs in the UK,
          opportunities to grow and be promoted may present themselves much
          faster!
        </p>
        <h2 className="chapter-title-secondary">Networking:</h2>
        <p>
          Working abroad is such a great way to expand your professional
          network. While it’s already possible to network with people all around
          the world via online platforms, such as LinkedIn and Facebook, it’s a
          completely different experience to meeting people in real life. While
          you work abroad, you’ll be collaborating with locals and expats from
          other countries—this can expose you to new job opportunities (or
          opportunities in general!). You will end up with a global circle of
          people who have your back and can help you get a leg up in future job
          hunts!
        </p>
        <h2 className="chapter-title-secondary">Friends:</h2>
        <p>
          Do you stare at the jobs we advertise thinking, 'Wow, I'd love to do
          that, but I'm scared I'll be lonely travelling overseas on my own'? Do
          you worry that working overseas as an 'expat' would be too different
          for you to cope with? I'm not going to lie, it is a daunting
          experience moving your whole life hundreds of miles away from friends
          and family, and once the initial excitement wears off, culture shock
          and uncertainty can creep in! BUT getting past this inevitable baggage
          of living and working overseas can lead to one of the most rewarding
          experiences of your life! There are many ways to combat these fears,
          especially by growing your social circle and reaping the benefits this
          can bring! Know you will never be alone! There will be lots of other
          teachers starting at the same time as you in the same location and
          even the same school, so first get to know your co-workers! Schools
          will often organise staff activities, so put yourself out there! To
          spread your net wider you could volunteer in the community with
          locals, join clubs or teams for activities that interest you in your
          spare time, and even do local cuisine cookery classes! Use expat
          websites or apps to find groups that meet up in person too, the
          possibilities are endless! In no time, you’ll be forming friendships
          with people from different backgrounds, some of which will last a
          lifetime, as the bond built under the unique pressures of living
          abroad will be like nothing else.
        </p>
        <h2 className="chapter-title-secondary">Cultural immersion:</h2>
        <p>
          There’s only so much you can learn about a culture on a short
          vacation. As an overseas worker, you won’t just be a visitor anymore,
          but a temporary member of that community. This insider view will give
          you a different perspective on all aspects of life, including family
          life and politics. You’ll have the chance to really immerse yourself
          and learn about unique quirks and traditions from your local friends,
          which you’d never be exposed to on a vacation. What an experience! So
          do you have 'itchy feet'? Why not speak to us at TheCollaborativeAuckland and see
          how we can help with this 'travel bug'?! We have been experts in this
          field since launching in 2004 to assist teachers of all levels and
          backgrounds find their ideal role in their dream location. Combining
          TheCollaborativeAuckland’s size, expertise, and local knowledge we are able to
          advise teachers where in the world they are most likely to thrive
          professionally and as a person. Why wait?!
        </p>
      </div>
    </div>
  );
};
