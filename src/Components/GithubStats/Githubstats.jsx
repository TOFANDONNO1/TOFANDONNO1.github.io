import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Githubstats.css";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <section id="stats" className="github-stats-section">
      <h2 className="section-title">GitHub Stats</h2>
      <div className="github-stats-container">
        <div className="github-stats-card">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=TOFANDONNO1&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            className="github-stats-image"
          />
        </div>
        <div className="github-stats-card">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=TOFANDONNO1&theme=radical`}
            alt="GitHub Streak"
            className="github-stats-image"
          />
        </div>
        <div className="github-stats-card">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=TOFANDONNO1&layout=compact&theme=radical`}
            alt="Most Used Languages"
            className="github-stats-image"
          />
        </div>
        <div className="github-stats-card">
        <GitHubCalendar
        //   className="react-activity-calendar"
          username="TOFANDONNO1"
        //   blockSize={15}
        //   blockMargin={5}
        //   color="#000000"
        //   fontSize={16}
        />
        </div>
      </div>
      <div className="github-profile-link">
        <a
          href="https://github.com/TOFANDONNO1"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub /> Visit My GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default GithubStats;
