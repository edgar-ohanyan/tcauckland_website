import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const WorkInKuwait = () => {
  return (
    <div>
      <div className="stickyNavButtonBox">
        <Link to="/career-hub" className="card-nav-link">
          <BsFillArrowLeftCircleFill size={50} style={{ color: "#4b73b8" }} />
        </Link>
      </div>
      <div className="page-content">
        <h1 className="page-title">Top 10 reasons to work in Kuwait.</h1>
        <p className="page-content-text-primary">
          Kuwait. A country bursting full of market bazaars, gleaming
          skyscrapers and glistening coastlines. It’s an oil-rich state that
          offers the opportunity for travellers and workers to wander around
          mosques, souks and other sandy traces of history, whilst exploring
          buzzing shopping malls, cafes and restaurants. If you decide to work
          here, you’ll have the chance to enjoy all of these fantastic features,
          and do what you love: teach!
        </p>
      </div>
      <div className="chapter-content-text">
        <h2 className="chapter-title">
          So, why should you choose to jet over to the Middle East and take up a
          new role in Kuwait? We’ve put together a list of top 10 reasons why
          you should do just this:
        </h2>
        <ol>
          <li>
            Schools here offer competitive salaries and good deals, meaning that
            it’s possible to save money and live the type of lifestyle that you
            want to
          </li>
          <li>
            The locals are welcoming and hospitable, meaning that your
            transition into a whole new culture and way of life should be made
            easier
          </li>
          <li>
            There are stunningly large expanses of desert that are great for
            exploring. Plus, you can camp and star gaze, and take a great photo
            to make everyone back at home jealous! The panoramic coastline is
            perfect for swimming, sunbathing, diving, snorkeling, deep sea
            fishing, para-sailing and jet-skiing - there’s an activity for
            everyone and there won’t be a dull moment
          </li>
          <li>
            Although a traditionally dry state, meaning that alcohol is not
            consumed, there is still a vibrant private nightlife
          </li>
          <li>
            The weather is great - although hot, the humidity is very low,
            meaning that it should be comfortable all year round
          </li>
          <li>
            Located in the north of the Gulf, Kuwait is not for from Bahrain,
            Dubai and other exotic countries, perfect for exploring at weekends
            and for taking longer holidays
          </li>
          <li>
            Schools here offer competitive salaries and good deals, meaning that
            it’s possible to save money and live the type of lifestyle that you
            want to
          </li>
          <li>
            If you want to start a new hobby, or keep up with activities that
            you loved whilst at home, there are extensive opportunities to take
            part in rugby, golf, cycling, tennis, squash, horse-riding, and much
            more
          </li>
          <li>
            Of the region, Kuwait boasts some of the best shopping
            opportunities, with both new malls and traditional souks
          </li>
          <li>
            If you like to eat, this is a great country to settle in. You can
            both enjoy the traditional cuisine, and sample a large number of
            international dishes
          </li>
        </ol>
        <p>If you can see yourself exploring the picturesque landscape during the weekends, and teaching the next generation of school children during the week, then take a look at what our current vacancies can offer you.</p>
      </div>
    </div>
  );
};
