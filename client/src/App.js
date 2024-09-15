import logo from './logo.svg';
import './App.css';
import ProjectList from './Components/ProjectList.js'
import BlockchainExperience from './Components/BlockchainExperience.js'
import delibImage from './delib.png'
import destoreImage from './destore.png'
import devchainImage from './devchain.png'
import leagueOfLegendsCooldownTracker from './league-of-legends-cooldown-tracker.png'
import googleMusicVisualizer from './google-music-visualizer.png'

function App() {
  return (
    <div className="App">
      <div className="name-wrap">
        <div className="name">
          Zhiwen Huang
        </div>
      </div>
      <div className="personal-image-wrap">
        <img />
      </div>
      <div class="summary-wrap">
        <div>
          <h className="summary-header">
            About me
          </h>
        </div>
        <div className="summary">
          I am a software engineer with experience in full stack development
          and blockchains. I have worked in the blockchain role of 4 companies
          and helped them with decentralized finance applications, ERC20 tokens,
          NFTs, and more. I have also created Ethereum blockchain projects. They
          can be viewed in the projects list. I have React and Angular experience
          and have developed websites with them.
        </div>
      </div>
      <div className="links-wrap">
        <div className="links-header">
          Links
        </div>
        <div>
          Linkedin link: <a href="https://linkedin.com/in/zhiwenhuang0">https://linkedin.com/in/zhiwenhuang0</a>
        </div>
        <div>
          Github link: <a href="https://github.com/zhiwenh">https://github.com/zhiwenh</a>
        </div>
      </div>
      <div className="projects-wrap">
        <div className="project-list-header">
          Project List
        </div>
        <div>
          <ProjectList
            projectName="Destore"
            projectImage={destoreImage}
            projectDescription="A file storage platform built on Ethereum."
            projectLink="https://github.com/zhiwenh/destore"
          />
        </div>
        <div>
          <ProjectList
            projectName="Delib"
            projectImage={delibImage}
            projectDescription="A simple Ethereum framework."
            projectLink="https://github.com/zhiwenh/delib"
          />
        </div>
        <div>
          <ProjectList
            projectName="Devchain"
            projectImage={devchainImage}
            projectDescription="A private Ethereum blockchain generator."
            projectLink="https://github.com/zhiwenh/devchain"
          />
        </div>
        <div>
          <ProjectList
            projectName="League of Legends Cooldown Tracker"
            projectImage={leagueOfLegendsCooldownTracker}
            projectDescription="A cooldown tracker for League of Legendsr."
            projectLink="https://github.com/zhiwenh/lolcooldown"
          />
        </div>
        <div>
          <ProjectList
            projectName="Google Music Visualizer"
            projectImage={googleMusicVisualizer}
            projectDescription="A music visualizer for Google Play Music."
            projectLink="https://github.com/zhiwenh/google-music-visualizer"
          />
        </div>
      </div>
      <div className="blockchain-experience-wrapper">
        <div className="blockchain-experience-header">
          Blockchain Experience
        </div>
        <div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="ERC20 tokens"
              blockchainExperienceItemSummary=
                "Created ERC20 tokens to be used for companies."
            />
          </div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="Decentralized finance"
              blockchainExperienceItemSummary=
                "Worked on decentralized financial applications for a company.
                Worked on their staking smart contract, frontend, and backend."
            />
          </div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="NFT marketplaces"
              blockchainExperienceItemSummary=
                "Created a NFT marketplace. Created the smart contract and implemented
                the backend connection with it."
            />
          </div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="ERC721 and ERC1155 tokens"
              blockchainExperienceItemSummary=
                "Worked on ERC721 tokens and ERC1155 tokens. Created the ability
                to mint ERC721 in a finanical application. Also worked on a generative
                artwork ERC721 project. I created the smart contract for it."
            />
          </div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="Cryptocurrency exchanges"
              blockchainExperienceItemSummary=
                "Worked a decentralized crytocurrency exchange and also worked on
                the architecture of a centralized crytocurrency exchange."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;