import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg"
import workHistory from "../../assets/Resume/work-history.svg"
import programmingSkills from "../../assets/Resume/programming-skills.svg"
import projects from "../../assets/Resume/projects.svg"
import interests from "../../assets/Resume/interests.svg"

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: workHistory },
    { label: "Programming Skills", logoSrc: programmingSkills },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests },
  ];

  //Programming skills
  const programmingSkillsDetails = [
    {skill: "React JS", ratingPercentage: 80},
    {skill: "React Native", ratingPercentage: 70},
    {skill: "JavaScript", ratingPercentage: 80},
    {skill: "Node JS", ratingPercentage: 80},
    {skill: "Express JS", ratingPercentage: 80},
    {skill: "Mongo DB", ratingPercentage: 70},
    {skill: "Python", ratingPercentage: 80},
    {skill: "HTML", ratingPercentage: 80},
    {skill: "CSS", ratingPercentage: 80},
  ]

  const projectsDetails = [
    {
        title: "Instaqart",
        duration: {fromDate: "2021", toDate: "2022"},
        description: "An e-commerce web-app for showcasing and selling electronics mainly smart phones online with payment system integration via Paypal.",
        subHeading: "Technologies Used: React.js,Redux,Node.js,Express.js,MongoDB"
    },
    {
        title: "Zaayka",
        duration: {fromDate: "2021", toDate: "2022"},
        description: "Zaayka is a food order mobile app that let's you navigate the best restaurants nearby your preferred location and browse your favourite cuisines and drinks on a fly.Integrated Stripe for accepting end-to-end online payments.Available on both iOS && android.",
        subHeading: "Technologies Used: React Native,Firebase"
    },
    {
        title: "Y Connector",
        duration: {fromDate: "2021", toDate: "2022"},
        description: "A small social network web-app for the software developers; Create a developer profile/portfolio, share posts and get help from other developers.",
        subHeading: "Technologies Used: React.js,Redux,Node.js,Express.js,MongoDB"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
        <ResumeHeading 
            heading={"Amity University, Noida"}
            subHeading={"BACHELOR OF ENGINEERING"}
            fromDate={"2016"}
            toDate={"2020"}
        />
        <ResumeHeading 
            heading={"UNIVERSITY OF MICHIGAN"}
            subHeading={"Application based Machine Learning"}
            fromDate={"2019"}
            toDate={"2020"}
        />
        <ResumeHeading 
            heading={"High School"}
            subHeading={"Notre Dame"}
        />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading 
            heading={"Instaqart"}
            subHeading={"Sofware Engineer"}
            fromDate={"2021"}
            toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as React developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Building Instaqart
          </span>
          <br />
          <span className="resume-description-text">
            - Primarily dealt with react and redux.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Main focus is to distribute to mobile first and then simple web just to download the app.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
        <ResumeHeading 
            heading="Cricket"
            description="Cricket is my middlename.Apart from being a tech enthusiast, I love playing cricket with my Boys and likes to lead the team from the front which makes me a complete team player and can proven to be a good leader."
        />
        <ResumeHeading 
            heading="Music"
            description="Music is something which is very close to my heart, loves listening fun and light songs on Spotify."
        />
        <ResumeHeading 
            heading="Competitive Programming"
            description="Loves to solve problems through CODE."
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="Oops"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;