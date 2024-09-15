import './App.css';
import Project from './Components/Project.js'
import BlockchainExperience from './Components/BlockchainExperience.js'
import WorkExperience from './Components/WorkExperience.js'
import Education from './Components/Education.js'
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
      <div class="about-me-wrap">
        <div>
          <h className="about-me-header">
            About me
          </h>
        </div>
        <div className="about-me">
          I am a software engineer with experience in full stack development
          and blockchains. I have worked in the blockchain role of 4 companies
          and helped them with decentralized finance applications, ERC20 tokens,
          NFTs, and more. I have also created Ethereum blockchain projects. They
          can be viewed in the projects list. I also have React and Angular experience
          and have developed websites with them.
        </div>
      </div>
      <div className="links-wrap">
        <div className="links-header">
          Links
        </div>
        <div className="links">
          <div>
            Linkedin link: <a href="https://linkedin.com/in/zhiwenhuang0">https://linkedin.com/in/zhiwenhuang0</a>
          </div>
          <div>
            Github link: <a href="https://github.com/zhiwenh">https://github.com/zhiwenh</a>
          </div>
        </div>
      </div>
      <div className="projects-wrap">
        <div className="project-list-header">
          Project List
        </div>
        <div>
          <Project
            projectName="Destore"
            projectImage={destoreImage}
            projectDescription="A file storage platform built on Ethereum. Used IPFS
              for the ability to send files to other people."
            projectLink="https://github.com/zhiwenh/destore"
          />
        </div>
        <div>
          <Project
            projectName="Delib"
            projectImage={delibImage}
            projectDescription="A simple Ethereum framework. It allows you to
              compile, build, and deploy smart contracts. It also allows you to easily
              create decentralized applications with the smart contracts you created."
            projectLink="https://github.com/zhiwenh/delib"
          />
        </div>
        <div>
          <Project
            projectName="Devchain"
            projectImage={devchainImage}
            projectDescription="A private Ethereum blockchain generator. Allows you
              to easily set up testnets to test your blockchain applications on."
            projectLink="https://github.com/zhiwenh/devchain"
          />
        </div>
        <div>
          <Project
            projectName="League of Legends Cooldown Tracker"
            projectImage={leagueOfLegendsCooldownTracker}
            projectDescription="A cooldown tracker for League of Legends that worked on
            IOS and Android. Used React Native to work on a mobile devices."
            projectLink="https://github.com/zhiwenh/lolcooldown"
            customizedClassName="project-league-of-legends-cooldown-tracker"
          />
        </div>
        <div>
          <Project
            projectName="Google Music Visualizer"
            projectImage={googleMusicVisualizer}
            projectDescription="A music visualizer for Google Play Music."
            projectLink="https://github.com/zhiwenh/google-music-visualizer"
          />
        </div>
      </div>
      <div className="work-experience-wrap">
        <div className="work-experience-header">
          Work Experience
        </div>
        <div>
          <WorkExperience
            companyName="Synapse"
            companyDescription="Worked on uploading nodes to be used to connect
            to blockchain networks. Also worked on other blockchain related features."
          />
        </div>
        <div>
          <WorkExperience
            companyName="Icered"
            companyDescription="Worked on updating their blockchain related features
            in their applications."
          />
        </div>
        <div>
          <WorkExperience
            companyName="Darwins"
            companyDescription="Worked on their applications with focus on decentralized
            finance. Also did backend and frontend work as well."
          />
        </div>
        <div>
          <WorkExperience
            companyName="Halo Platform"
            companyDescription="Worked on a decentralized trading platform."
          />
        </div>
        <div>
          <WorkExperience
            companyName="Florida Biologix"
            companyDescription="Worked in the manufacturing department of the company
            producing large volumes of product related cell culture."
          />
        </div>
      </div>
      <div className="blockchain-experience-wrap">
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
              blockchainExperienceListItem="Buy, sell, and auction smart contracts"
              blockchainExperienceItemSummary=
                "Created buy, sell, and auction smart contracts for someone."
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
      <div className="education-wrap">
        <div className="education-header">
          Education
        </div>
        <div>
          <Education
            educationName="Codesmith"
            educationDegree="Software Engineering Immersive Program."
            educationDescription="Codesmith teaches you software engineering
            and full stack Javascript development."
          />
        </div>
        <div>
          <Education
            educationName="University of Florida"
            educationDegree="Bachelor of Science in Mechanical Engineering"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
