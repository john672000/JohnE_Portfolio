import React, { Component, useState, useEffect } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import "./Projects.css";
import { Fade } from "react-reveal";
import { projectsHeader, ProjectIcs } from "../../portfolio.js";
import Typewriter from "react-typewriter-effect";

const SkeletonLoader = ({ theme }) => {
  return (
    <div className="project-card skeleton" style={{ backgroundColor: theme.imageDark }}>
      <div className="skeleton-text skeleton-title" style={{ backgroundColor: theme.accentColor }}></div>
      <div className="skeleton-text skeleton-desc" style={{ backgroundColor: theme.secondaryText }}></div>
      <div className="skeleton-footer">
        <div className="skeleton-text skeleton-lang" style={{ backgroundColor: theme.accentColor }}></div>
      </div>
    </div>
  );
};

const AddProjectCard = ({ title, desc, url, language, launch, theme }) => {
  return (
    <div className="project-card" style={{ backgroundColor: theme.imageDark }}>
    <div className="title-page"><h3 style={{ color: theme.text }}>{title}</h3> 
    <div className="page-launch">
  {launch ? (
    <>
      <p style={{textDecoration:'underline'}}>Launch the hosted service :</p>
      <Button
        icon={<i className="fa-solid fa-rocket"></i>}
        href={launch}
        theme={theme}
        newTab={true}
        radius={100}
      />
    </>
  ) : (
    <p style={{ color: theme.secondaryText, fontWeight: '600' }}>
                      Service not hosted yet <i class="fa-solid fa-triangle-exclamation"></i>
                    </p>
  )}
</div>

    </div>
      <p style={{ color: theme.secondaryText }}>{desc}</p>
      <div className="project-card-footer">
        <p style={{ color: theme.accentColor }}>{language}</p>
        <div><span className="hover-msg">Visit GitHub</span>
        <Button className="card-btn" icon={<i class="fa-brands fa-github"></i>} href={url} theme={theme} newTab radius={100} /></div>
      </div>
    </div>
  );
};

const FetchGitHub = ({ theme, loading, setLoading, setFetched, fallback, setFallback }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 6000);

    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/john672000/repos");

        if (!res.ok) throw new Error("Rate limit or network error");
        const data = await res.json();

        const formattedData = data
          .filter((repo) => repo.name !== "john672000" && !repo.private)
          .map((repo) => ({
            title: repo.name,
            desc: repo.description || "No description available.",
            url: repo.html_url,
            language: repo.language || "Mixed",
            launch: repo.homepage,
          }));
        console.log(data.homepage);
        localStorage.setItem('projectsData', JSON.stringify(formattedData));
        setProjects(formattedData);
        setFetched(true);
      } catch (error) {
        console.error("GitHub fetch failed. Using fallback.", error.message);
        setFallback(true);
        setProjects([]);
        setFetched(false);
      }
    };

    const storedProjects = localStorage.getItem('projectsData');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
      setFetched(true);
      setLoading(false);
    } else {
      fetchRepos();
    }
    return () => clearTimeout(timeout);
  }, [setLoading, setFetched]);
  if (fallback) {
    return <ExperienceAccordion sections={projectsHeader["sections"]} theme={theme} />;
  }

  return (
    <>
      <div className="projects-container">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => <SkeletonLoader key={index} theme={theme} />)
          : projects.map((proj, index) => (
            <AddProjectCard key={index} {...proj} theme={theme} />
          ))}
      </div>
    </>
  );
};



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fetched: false,
      fallback: false,
    };
  }

  setLoading = (loading) => {
    this.setState({ loading });
  };

  setFetched = (fetched) => {
    this.setState({ fetched });
  };

  setFallback = (fallback) => {
    this.setState({ fallback });
  }
  render() {
    const theme = this.props.theme;
    const { loading, fetched, fallback } = this.state;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <CompetitiveSites logos={ProjectIcs.projicns} />
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typewriter
                      text={projectsHeader["description"]}
                      textStyle={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: theme.secondaryText,
                        fontFamily: "Google Sans Bold",
                      }}
                      cursorColor="transparent"
                      typeSpeed={30}
                      eraseSpeed={50}
                      eraseDelay={2000}
                    />
                  </div>
                  {loading && !fallback && !fetched && (
                    <p style={{ color: theme.secondaryText }}>
                      Fetching <i className="fa-solid fa-circle-notch fa-spin"></i>
                    </p>
                  )}
                  {fetched && !loading && (
                    <p style={{ color: theme.secondaryText, fontWeight: '600' }}>
                      Projects fetched from GitHub Up-to-Date <i className="fa-solid fa-check"></i>
                    </p>
                  )}
                  {!fetched && fallback && (
                    <p style={{ color: theme.secondaryText, fontWeight: '600' }}>
                      Failed to fetch projects from GitHub Showing the hard-code <i class="fa-solid fa-triangle-exclamation"></i>
                    </p>
                  )}
                </p>
              </div>
            </div>
            <Fade bottom duration={1000} distance="40px">
              <FetchGitHub
                theme={theme}
                setLoading={this.setLoading}
                setFetched={this.setFetched}
                loading={loading}
                fallback={fallback}
                setFallback={this.setFallback}
              />
            </Fade>
          </Fade>
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
