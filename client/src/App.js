import React, {
    useState,
    useEffect
} from 'react';
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
import zhiwenHuangCV from './zhiwen-huang-cv.pdf'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  let mobileTabsOn = false;
  let overWidthAlready = false;
  let widthInit = true;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        if (overWidthAlready === false || widthInit === true) {
          const navBar = document.querySelectorAll('.nav-bar');
          navBar[0].style.display = 'flex';
          navBar[0].style.flexDirection = 'row';
          navBar[0].style.justifyContent = 'center';
          navBar[0].style.alignItems = 'center';

          const navBarItems = document.querySelectorAll('.nav-bar-item');
          for (let i = 0; i < navBarItems.length; i++) {
            navBarItems[i].style.visibility = "visible";
            navBarItems[i].style.height = "auto";
            navBarItems[i].style.width = "auto";
            navBarItems[i].style.marginBottom = "0px";
          }

          const navBarLinks = document.querySelectorAll('.nav-bar-link');
          for (let i = 0; i < navBarLinks.length; i++) {
            navBarLinks[0].style.textAlign = 'center';
          }

          if (mobileTabsOn === true) {
            mobileTabsOn = false;
          }

          if (overWidthAlready === false) {
            overWidthAlready = true;
          }

          if (widthInit === true) {
            widthInit = false;
          }
        }
      } else {
        if (overWidthAlready === true || widthInit === true) {
          const navBar = document.querySelectorAll('.nav-bar');
          navBar[0].style.display = 'flex';
          navBar[0].style.flexDirection = 'column';
          navBar[0].style.justifyContent = 'center';
          navBar[0].style.alignItems = 'center';

          const navBarItems = document.querySelectorAll('.nav-bar-item');
          for (let i = 0; i < navBarItems.length; i++) {
            if (mobileTabsOn === false) {
              navBarItems[i].style.visibility = "hidden";
              navBarItems[i].style.height = "0px";
              navBarItems[i].style.width = "0px";
              navBarItems[i].style.marginBottom = "0px";
            } else {
              navBarItems[i].style.visibility = "visible";
              navBarItems[i].style.height = "auto";
              navBarItems[i].style.width = "auto";
              navBarItems[i].style.marginBottom = "3px";
            }
          }

          if (overWidthAlready === true) {
            overWidthAlready = false;
          }

          if (widthInit === true) {
            widthInit = false;
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  function onMobileButtonClick() {
    if (mobileTabsOn === false) {
      const navBar = document.querySelectorAll('.nav-bar');
      navBar[0].style.display = 'flex';
      navBar[0].style.flexDirection = 'column';
      navBar[0].style.justifyContent = 'center';
      navBar[0].style.alignItems = 'center';

      const navBarItems = document.querySelectorAll('.nav-bar-item');

      for (let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].style.visibility = "visible";
        navBarItems[i].style.height = "auto";
        navBarItems[i].style.width = "200px";
        navBarItems[i].style.marginBottom = "3px";
      }

      mobileTabsOn = true;
    } else {
      const navBarItems = document.querySelectorAll('.nav-bar-item');
      for (let i = 0; i < navBarItems.length; i++) {
        navBarItems[i].style.visibility = "hidden";
        navBarItems[i].style.height = "0";
        navBarItems[i].style.width = "0";
        navBarItems[i].style.marginBottom = "0px";
      }

      mobileTabsOn = false;
    }
  }

  return (
    <div>
      <div className="nav-bar-wrap">
        <div className="nav-bar">
          <div className="nav-bar-mobile-button" onClick={onMobileButtonClick}>
            <div className="nav-bar-mobile-button-1">
            </div>
            <div className="nav-bar-mobile-button-2">
            </div>
            <div className="nav-bar-mobile-button-3">
            </div>
          </div>
          <NavBarItem
            navBarLink="#about-me-id"
            navBarLinkText="About me"
          />
          <NavBarItem
            navBarLink="#links-id"
            navBarLinkText="Links"
          />
          <NavBarItem
            navBarLink="#cv-id"
            navBarLinkText="CV"
          />
          <NavBarItem
            navBarLink="#projects-id"
            navBarLinkText="Projects"
          />
          <NavBarItem
            navBarLink="#work-experience-id"
            navBarLinkText="Work Experience"
          />
          <NavBarItem
            navBarLink="#blockchain-experience-id"
            navBarLinkText="Blockchain Experience"
          />
          <NavBarItem
            navBarLink="#education-id"
            navBarLinkText="Education"
          />
          <NavBarItem
            navBarLink="#contact-me-id"
            navBarLinkText="Contact Me"
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
            <h className="about-me-header" id="about-me-id">
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
          <div className="links-header" id="links-id">
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
        <div className="cv-link-wrap">
          <div className="cv-link-header" id="cv-id">
            CV
          </div>
          <a
            href={zhiwenHuangCV}
            className="cv-link"
            target="_blank">
              Zhiwen Huang's CV
          </a>
          <div className="cv-link-description">
            Opens in new tab or window
          </div>
        </div>
        <div className="projects-wrap">
          <div className="projects-header" id="projects-id">
            Projects
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
            IOS and Android. Used React Native to work on mobile devices."
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
        <div className="work-experience-wrap">
          <div className="work-experience-header" id="work-experience-id">
            Work Experience
          </div>
          <WorkExperience
            companyName="Synapse"
            companyDescription="Worked on uploading nodes to be used to connect
            to blockchain networks. Also worked on other blockchain related features."
            jobAccomplishments={[
              'Created an Ethereum Geth node on AWS for company financial applications',
              'Developed an Ethereum custodial wallet for Ethereum, Solana, and Polygon',
              'Worked on a terraform script for a Polygon node on AWS'
            ]}
          />
          <WorkExperience
            companyName="Icered"
            companyDescription="Worked on updating their blockchain related features
            in their applications."
            jobAccomplishments={[
              'Developed a token that only allows the use of an admin signature to mint tokens',
              'Created the smart contracts and backend for a NFT exchange that had users sign messages to list their NFTs and that allowed lazy minting',
              'Researched the creation of a centralized crypto exchange for Bitcoin, Ethereum, and Icered tokens'
            ]}
          />
          <WorkExperience
            companyName="Darwins"
            companyDescription="Worked on their applications with focus on decentralized
            finance. Also created smart contracts, did backend work, and frontend work."
            jobAccomplishments={[
              'Worked on proof reading a decentralized financial application smart contract that invested tokens into people to have them grow over time',
              'Created an ERC721 smart contract implementation for user rewards with a method to lazy mint the tokens to be redeemed at a later date',
              'Developed the frontend and backend for the features of minting and transferring ERC721 tokens in a decentralized finance application',
              'Worked on a way to transition the smart contract system into a layer-2',
              'Developed a decentralized ERC721 buy sell smart contract, auction smart contract, and offer smart contract and also developed a centralized version of those contracts',
              'Worked on Angular 2 frontend components and also worked on a backend with Typescript that used Hapi to create API routes for the frontend to call',
              'Created a generative NFT smart contract using the ERC721 implementation that has 7000 unique NFT images'
            ]}
          />
          <WorkExperience
            companyName="Halo Platform"
            companyDescription="Worked on a decentralized trading platform."
            jobAccomplishments={[
              'Helped with a cryptocurrency exchange using Node.js that traded Bitcoin, Ethereum, and Halo',
              'Created unit and integration tests using Mocha Chai for all the methods and functions in a cryptocurrency exchange',
              'Performed application updates with an Agile and Scrum methodology for fast software iterations'
            ]}
          />
          <WorkExperience
            companyName="Florida Biologix"
            companyDescription="Worked in the manufacturing department of the company
            producing large volumes of biologic products."
            jobAccomplishments={[
              'Involved in the upstream manufacturing of viral vectors for use in clinical trials using up to 400L of suspension cells in the cleanrooms of a cGMP facility',
              'Organized and implemented  the addition of external air flow meters to the company’s cleanroom bioreactors for process verification in the production runs ',
              'Wrote and edited standard operating procedures and production batch records for new processes and equipment '
            ]}
          />
        </div>
        <div className="blockchain-experience-wrap">
          <div className="blockchain-experience-header" id="blockchain-experience-id">
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
                "Worked on decentralized financial applications for a company
                that involved staking. Worked on their staking smart contract,
                frontend, and backend."
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
        <div className="education-wrap">
          <div className="education-header" id="education-id">
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
        <div className="contact-me-wrap">
          <div className="contact-me-header" id="contact-me-id">
            Contact Me
          </div>
          <div className="contact-me-email">
            My email is: zhiwen555@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
