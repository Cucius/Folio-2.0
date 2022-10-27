import React from "react";
import faviconBig from "../images/android-chrome-192x192.png";
const ProjectCards = () => {
  return (
    <React.Fragment>
      <div
        className="card-container container mx-auto p-4 flex
                      overflow-x-scroll
      "
      >
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <p></p>
            <h2>Not Your Average Bookies</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/Cucius/NotYourAverageBookies" target="_blank" >Repo</a>
            <a href="https://desolate-inlet-39798.herokuapp.com/" target="_blank" >Live</a>
          </div>
        </article>
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <h2>Management System</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/Cucius/Management-System" target="_blank" >Repo</a>
            <a href="#" >Back-End</a>
          </div>
        </article>
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <h2>Create New README</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/Cucius/create-new-README" target="_blank" >Repo</a>
            <a href="#" >Back-End</a>
          </div>
        </article>
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <h2>Quiz timer</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/Cucius/Quiz-time-r" target="_blank" >Repo</a>
            <a href="https://cucius.github.io/Quiz-time-r/" target="_blank" >Live</a>
          </div>
        </article>
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <h2>Taking Notes</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/Cucius/Taking-Notes" target="_blank" >Repo</a>
            <a href="https://tranquil-sierra-47040.herokuapp.com/" target="_blank" >Live</a>
          </div>
        </article>
        <article className="card flex relative flex-col h-80 w-96 min-w-[250px] p-6 rounded-2xl bg-veronese shadow-md">
          <header className="card-header">
            <h2>Brewfinder</h2>
          </header>
          <div className="card-author">
            <a className="favicon" href="#">
              <img src={faviconBig} />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div className="author-name">
              <div className="author-name-prefix">Developer</div>
              Chase Metherd
            </div>
          </div>
          <div class="tags">
            <a href="https://github.com/relero90/brewfinder" target="_blank" >Repo</a>
            <a href="https://relero90.github.io/brewfinder/" target="_blank" >Live</a>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default ProjectCards;
