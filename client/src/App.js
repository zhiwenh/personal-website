import './App.css';
import NavBarItem from './Components/NavBarItem.js';
import Project from './Components/Project.js'
import BlockchainExperience from './Components/BlockchainExperience.js'
import WorkExperience from './Components/WorkExperience.js'
import Education from './Components/Education.js'
import personalImage from './personal-image.png'
import delibImage from './delib.png'
import destoreImage from './destore.png'
import devchainImage from './devchain.png'
import leagueOfLegendsCooldownTracker from './league-of-legends-cooldown-tracker.png'
import googleMusicVisualizer from './google-music-visualizer.png'

function App() {
  return (
    <div>
      <div className="nav-bar-wrap">
        <div className="nav-bar">
          <NavBarItem
            navBarLink="#about-me-wrap-id"
            navBarLinkText="About me"
          />
          <NavBarItem
            navBarLink="#links-wrap-id"
            navBarLinkText="Links"
          />
          <NavBarItem
          navBarLink="#projects-wrap-id"
            navBarLinkText="Project List"
          />
          <NavBarItem
            navBarLink="#work-experience-wrap-id"
            navBarLinkText="Work Experience"
          />
          <NavBarItem
            navBarLink="#blockchain-experience-wrap-id"
            navBarLinkText="Blockchain Experience"
          />
          <NavBarItem
            navBarLink="#education-wrap-id"
            navBarLinkText="Education"
          />
        </div>
      </div>
      <div className="App">
        <div className="name-wrap">
          <div className="name">
            Zhiwen Huang
          </div>
        </div>
        <div className="personal-image-wrap">
          <img className="personal-image" src={personalImage}/>
        </div>
        <div className="short-summary-wrap">
          <div className="short-summary">
            Software Engineer | Blockchain Engineer
          </div>
        </div>
        <div class="about-me-wrap" id="about-me-wrap-id">
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
        <div className="links-wrap" id="links-wrap-id">
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
        <div className="projects-wrap" id="projects-wrap-id">
          <div className="project-list-header">
            Project List
          </div>
          <Project
            projectName="Destore"
            projectImage={destoreImage}
            projectDescription="A file storage platform built on Ethereum. Used IPFS
              for the ability to send files to other people."
            projectLink="https://github.com/zhiwenh/destore"
          />
          <Project
            projectName="Delib"
            projectImage={delibImage}
            projectDescription="A simple Ethereum framework. It allows you to
              compile, build, and deploy smart contracts. It also allows you to easily
              create decentralized applications with the smart contracts you created."
            projectLink="https://github.com/zhiwenh/delib"
          />
          <Project
            projectName="Devchain"
            projectImage={devchainImage}
            projectDescription="A private Ethereum blockchain generator. Allows you
              to easily set up testnets to test your blockchain applications on."
            projectLink="https://github.com/zhiwenh/devchain"
          />
          <Project
            projectName="League of Legends Cooldown Tracker"
            projectImage={leagueOfLegendsCooldownTracker}
            projectDescription="A cooldown tracker for League of Legends that worked on
            IOS and Android. Used React Native to work on a mobile devices."
            projectLink="https://github.com/zhiwenh/lolcooldown"
            customizedClassName="project-league-of-legends-cooldown-tracker"
          />
          <Project
            projectName="Google Music Visualizer"
            projectImage={googleMusicVisualizer}
            projectDescription="A music visualizer for Google Play Music."
            projectLink="https://github.com/zhiwenh/google-music-visualizer"
          />
        </div>
        <div className="work-experience-wrap" id="work-experience-wrap-id">
          <div className="work-experience-header">
            Work Experience
          </div>
          <WorkExperience
            companyName="Synapse"
            companyDescription="Worked on uploading nodes to be used to connect
            to blockchain networks. Also worked on other blockchain related features."
          />
          <WorkExperience
            companyName="Icered"
            companyDescription="Worked on updating their blockchain related features
            in their applications."
          />
          <WorkExperience
            companyName="Darwins"
            companyDescription="Worked on their applications with focus on decentralized
            finance. Also did backend and frontend work as well."
          />
          <WorkExperience
            companyName="Halo Platform"
            companyDescription="Worked on a decentralized trading platform."
          />
          <WorkExperience
            companyName="Florida Biologix"
            companyDescription="Worked in the manufacturing department of the company
            producing large volumes of product related cell culture."
          />
        </div>
        <div className="blockchain-experience-wrap" id="blockchain-experience-wrap-id">
          <div className="blockchain-experience-header">
            Blockchain Experience
          </div>
          <div>
            <BlockchainExperience
              blockchainExperienceListItem="ERC20 tokens"
              blockchainExperienceItemSummary=
                "Created ERC20 tokens to be used for companies."
            />
            <BlockchainExperience
              blockchainExperienceListItem="Decentralized finance"
              blockchainExperienceItemSummary=
                "Worked on decentralized financial applications for a company.
                Worked on their staking smart contract, frontend, and backend."
            />
            <BlockchainExperience
              blockchainExperienceListItem="NFT marketplaces"
              blockchainExperienceItemSummary=
                "Created a NFT marketplace. Created the smart contract and implemented
                the backend connection with it."
            />
            <BlockchainExperience
              blockchainExperienceListItem="Buy, sell, and auction smart contracts"
              blockchainExperienceItemSummary=
                "Created buy, sell, and auction smart contracts for someone."
            />
            <BlockchainExperience
              blockchainExperienceListItem="ERC721 and ERC1155 tokens"
              blockchainExperienceItemSummary=
                "Worked on ERC721 tokens and ERC1155 tokens. Created the ability
                to mint ERC721 in a finanical application. Also worked on a generative
                artwork ERC721 project. I created the smart contract for it."
            />
            <BlockchainExperience
              blockchainExperienceListItem="Cryptocurrency exchanges"
              blockchainExperienceItemSummary=
                "Worked a decentralized crytocurrency exchange and also worked on
                the architecture of a centralized crytocurrency exchange."
            />
          </div>
        </div>
        <div className="education-wrap" id="education-wrap-id">
          <div className="education-header">
            Education
          </div>
          <Education
            educationName="Codesmith"
            educationDegree="Software Engineering Immersive Program"
            educationDescription="Codesmith teaches you software engineering
            and full stack Javascript development."
            educationLink="https://www.codesmith.io/"
          />
          <Education
            educationName="University of Florida"
            educationDegree="Bachelor of Science in Mechanical Engineering"
            educationLink="https://www.ufl.edu/"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
