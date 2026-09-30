// import React, { useState, useEffect } from "react";
// import Button from "../../components/button/Button";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
// import "./FetchGit.css";
// import { ReactComponent as Fetching } from '../../assests/images/fetching.svg';

// const AddProjectCard = ({ title, desc, url, language, theme }) => {
//     return (
//         <div className="project-card" style={{ backgroundColor: theme.imageDark }}>
//             <h3 style={{ color: theme.text }}>{title}</h3>
//             <p style={{ color: theme.secondaryText }}>{desc}</p>
//             <div className="project-card-footer">
//                 <p style={{ color: theme.accentColor }}>Languages: {language}</p>
//                 <Button text="View on GitHub" href={url} theme={theme} newTab />
//             </div>
//         </div>
//     );
// };

// const FetchGit = ({ theme }) => {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [fallback, setFallback] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLoading(true);
//         }, 6000);

//         const fetchRepos = async () => {
//             try {
//                 const res = await fetch("https://api.github.com/users/john672000/repos"); DONT FORGET TO USE YOUR REPO HERE --JOHN

//                 if (!res.ok) throw new Error("Rate limit or network error");
//                 const data = await res.json();

//                 const formattedData = data
//                     .filter((repo) => repo.name !== "john672000" && !repo.private)
//                     .map((repo) => ({
//                         title: repo.name,
//                         desc: repo.description || "No description available.",
//                         url: repo.html_url,
//                         language: repo.language || "Mixed",
//                     }));

//                 setProjects(formattedData);
//             } catch (error) {
//                 console.error("GitHub fetch failed. Using fallback.");
//                 setFallback(true);
//             }
//         };

//         fetchRepos();
//     }, []);

//     if (loading) {
//         return (
//             <div className="fetching-msg" style={{ color: theme.secondaryText }}>
//                 <p style={{ color: theme.secondaryText }}>Fetching<i class="fa-solid fa-circle-notch fa-spin"></i></p>
//             </div>
//         );
//     }

//     if (fallback) {
//         return <ExperienceAccordion theme={theme} />;
//     }

//     return (
//         <>
//             <div className="projects-container">
//                 <p style={{ color: theme.secondaryText, fontWeight: '600' }}>Projects fetched from GitHub Up-to-Date <i class="fa-solid fa-check"></i></p>
//                 {projects.map((proj, index) => (
//                     <AddProjectCard key={index} {...proj} theme={theme} />
//                 ))}
//             </div>
//         </>
//     );
// };

// export default FetchGit;
