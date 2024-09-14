import logo from './logo.svg';
import './App.css';
import ProjectList from './Components/ProjectList.js'
import delibImage from './delib.png'
import destoreImage from './destore.png'
import devchainImage from './devchain.png'

function App() {
  return (
    <div className="App">
      <div className="name-wrap">
        <h className="name">
          Zhiwen Huang
        </h>
      </div>
      <div class="summary-wrap">
        <div>
          <h className="summary-header">
            Summary
          </h>
        </div>
        <div>
          I am a software engineer with experience in blockchains. I have worked at
          multiple blockchain companies and have created multiple blockchain projects.
        </div>
    </div>

    <div className="links-wrap">
      <h className="links-header">
        Links
      </h>
      <div>
        Linkedin link: <a>https://linkedin.com/in/zhiwenhuang0</a>
      </div>
      <div>
        Github link: <a>https://github.com/zhiwenh</a>
      </div>
    </div>
      <div className="projects-wrap">
        <h className="project-list-header">
          Project List
        </h>
        <div>
          <ProjectList
            projectName="Destore"
            projectImage={destoreImage}
            projectDescription="A file storage platform built on Ethereum"
            projectLink="https://github.com/zhiwenh/destore"
          />
        </div>
        <div>
          <ProjectList
            projectName="Delib"
            projectImage={delibImage}
            projectDescription="A simple Ethereum framework"
            projectLink="https://github.com/zhiwenh/delib"
          />
        </div>
        <div>
          <ProjectList
            projectName="Devchain"
            projectImage={devchainImage}
            projectDescription="A private Ethereum blockchain generator"
            projectLink="https://github.com/zhiwenh/devchain"
          />
        </div>
        <div>
          <ProjectList
            projectName="League of Legends Cooldown Tracker"
            projectDescription="A cooldown tracker for League of Legendsr"
            projectLink="https://github.com/zhiwenh/lolcooldown"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
