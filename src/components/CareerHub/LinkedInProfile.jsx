import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const LinkedInProfile = () => {
  return (
    <div>
      <div className="stickyNavButtonBox">
        <Link to="/career-hub" className="card-nav-link">
          <BsFillArrowLeftCircleFill size={50} style={{ color: "#4b73b8" }} />
        </Link>
      </div>
      <div className="page-content">
        <h1 className="page-title">
          Get ahead of the rest with a great LinkedIn profile!
        </h1>
        <p className="page-content-text-primary">
          With more than 740 million active users, LinkedIn has expanded from a
          networking site for professionals to one of the top social media
          platforms which is used to recruit, advertise market brands, post
          industry articles, or look for our dream jobs. It is certainly one
          that Randstad and TheCollaborativeAuckland use regularly when looking for
          educators to fill our vacancies. So...whether you are actively looking
          for a new position or are simply open to hearing about new
          opportunities, it is always beneficial to have your profile ready.
        </p>
      </div>
      <div className="chapter-content-text">
        <h2 className="chapter-title">
          Here are our top tips for making sure your LinkedIn profile stands
          out:
        </h2>
        <h2 className="chapter-title-secondary">
          Add a ‘professional’ and friendly profile photo
        </h2>
        <p>
          A good profile photo increases the credibility of your profile.
          LInkedIn have cited that members with a profile photo can get up to 21
          times more profile views than members without a photo. We suggest that
          the photo is interview appropriate and shows you smiling as this will
          give off a positive attitude and a warm and friendly personality.
        </p>
        <p>
          You can also add a background image to personalize your profile which
          helps you stand out from the crowd.
        </p>
        <h2 className="chapter-title-secondary">
          Make your headline stand out
        </h2>
        <p>
          Your headline is created when you add positions to your profile.
          However, we recommend that you rewrite it to promote an area of
          expertise and to let your personality shine through.
        </p>
        <h2 className="chapter-title-secondary">The ‘About’ section</h2>
        <p>
          This should express your mission, motivation, and skills to people who
          view your profile. Ideally, you should limit the text to one or two
          paragraphs while filling this section. You can use bullet points if
          you’re not comfortable with writing paragraphs. Great tip - Recruiters
          are usually filling vacancies with detailed candidate profile
          requirements. With this in mind, ensure your LinkedIn profile includes
          specifics about your role, which increases your chances of being found
          for matching roles.
        </p>

        <h2 className="chapter-title-secondary">
          Add sections to your profile
        </h2>
        <p>
          In order for your profile to be useful to recruiters, you must make
          sure your profile contains enough information so they can get a full
          picture of you.
        </p>
        <p>
          Featured - Use this area to promote your best and most industry
          aligned posts
        </p>
        <p>
          Experience - Ensure this is industry relevant and up to date with your
          current role so recruiters can see how your experience will fit what
          they are looking for.
        </p>
        <p>
          Education, licenses and certifications - As with experience these
          should be up to date and complete with anything that prospective
          employers may look for in your field.
        </p>
        <p>
          Skills and endorsements - These are what can really set you apart and
          is often how recruiters target potential candidates. You will need to
          select the best skills for your industry and role. Once you have done
          this, ask colleagues and clients to endorse these skills -
          particularly useful if you get an endorsement from someone who is
          ‘highly skilled’ at it. This will help recruiters understand your
          strengths and will increase the likelihood of you being discovered for
          opportunities related to the skills you possess. You can also take
          assessments for the skills you’ve listed on your profile to showcase
          your proficiency.
        </p>
        <p>
          Recommendations - Asking clients for LinkedIn recommendations is a
          great way for recruiters to see how good you are at your job. Great
          hint - In your recommendation request, you can ask your clients to use
          specific words or phrases that you have used in your profile
          information or that are highly prized in your industry, ie, highly
          supportive, honest, efficient.
        </p>
        <h2 className="chapter-title-secondary">Keep your profile updated</h2>
        <p>
          If you have recently changed jobs or locations, update your profile.
          Recruiters will want to know your current situation and if you have
          started a new role, which will help save their time and yours as they
          will assume you’re not looking for another job right now, unless you
          mark yourself ‘as open to opportunities’ .
        </p>
        <h2 className="chapter-title-secondary">Profile strength meter</h2>
        <p>
          You can use this to gauge the strength of your profile. Click here for
          how to find it.
        </p>
        <h2 className="chapter-title-secondary">
          Completed your profile - what to do next
        </h2>
        <p>
          Once you’ve created and updated different sections of your profile,
          you can begin sharing your public profile with your wider network.
          Your public profile is a simplified version of your complete LinkedIn
          profile that shows up in search engines and is visible to everyone.
          You can promote your profile to show up better in search engine
          results by creating a personal URL.
        </p>
        <h2 className="chapter-title-secondary">Connect with us</h2>
        <p>
          Randstad UK and TheCollaborativeAuckland have very active LinkedIn company pages,
          where we post regular updates about available positions, current and
          informative articles as well as company news. Be sure to follow our
          pages to stay up-to-date on the information we share. Interacting with
          our posts is also a great way to get noticed by our recruiters.
          Sharing, liking and commenting on our updates gives you the chance to
          showcase your knowledge and opinions, allowing our recruiters to get
          to know more about you beyond your profile.
        </p>
      </div>
    </div>
  );
};
