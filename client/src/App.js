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
import dexImage from './dex.png'
import delibImage from './delib.png'
import destoreImage from './destore.png'
import devchainImage from './devchain.png'
import leagueOfLegendsCooldownTracker from './league-of-legends-cooldown-tracker.png'
import googleMusicVisualizer from './google-music-visualizer.png'
import zhiwenHuangCV from './zhiwen-huang-cv.pdf'

function App() {
  let mobileTabsOn = false;
  let overWidthAlready = false;
  let widthInit = true;

  useEffect(() => {
    function handleResize() {
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
              Linkedin link:&nbsp;
                <a href="https://linkedin.com/in/zhiwenhuang0" target="_blank">
                  https://linkedin.com/in/zhiwenhuang0
                </a>
            </div>
            <div>
              Github link:&nbsp;
                <a href="https://github.com/zhiwenh" target="_blank">
                  https://github.com/zhiwenh
                </a>
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
            (Opens in new tab, window, or download)
          </div>
        </div>
        <div className="projects-wrap">
          <div className="projects-header" id="projects-id">
            Projects
          </div>
          <Project
            projectName="Dex"
            projectImage={dexImage}
            projectDate="2024"
            projectDescription="A decentralized exchange for Ethereum ERC-20 tokens. Works off a single
            smart contract that sits on the Ethereum blockchain. Users can add tokens to trade and trade for tokens.
            Requires the user to know the smart contract address of their token."
          />
          <Project
            projectName="Delib"
            projectImage={delibImage}
            projectDate="2016 - 2021"
            projectDescription="A simple Ethereum framework. It allows you to
              compile, build, and deploy smart contracts. It also allows you to easily
              create decentralized applications with the smart contracts you created."
            projectLink="https://github.com/zhiwenh/delib"
          />
          <Project
            projectName="Devchain"
            projectDate="2016 - 2018"
            projectImage={devchainImage}
            projectDescription="A private Ethereum blockchain generator. Allows you
              to easily set up testnets to test your blockchain applications on."
            projectLink="https://github.com/zhiwenh/devchain"
          />
          <Project
            projectName="League of Legends Cooldown Tracker"
            projectDate="2019"
            projectImage={leagueOfLegendsCooldownTracker}
            projectDescription="A cooldown tracker for League of Legends that worked on
            IOS and Android. Used React Native to work on mobile devices."
            projectLink="https://github.com/zhiwenh/lolcooldown"
            customizedClassName="project-league-of-legends-cooldown-tracker"
          />
          <Project
            projectName="Google Music Visualizer"
            projectDate="2016 - 2019"
            projectImage={googleMusicVisualizer}
            projectDescription="A music visualizer for Google Play Music."
            projectLink="https://github.com/zhiwenh/google-music-visualizer"
          />
          <Project
            projectName="Destore"
            projectDate="2016"
            projectImage={destoreImage}
            projectDescription="A file storage platform built on Ethereum. Used IPFS
              for the ability to send files to other people."
            projectLink="https://github.com/zhiwenh/destore"
          />
        </div>
        <div className="work-experience-wrap">
          <div className="work-experience-header" id="work-experience-id">
            Work Experience
          </div>
          <WorkExperience
            companyNameAndPosition="Synapse | Software Engineer III"
            datesWorked="Mar 2022 - Jun 2022"
            companyDescription="Worked on uploading nodes to be used to connect
            to blockchain networks. Also worked on other blockchain related features."
            jobAccomplishments={[
              'Created an Ethereum Geth node on AWS for company financial applications',
              'Developed an Ethereum custodial wallet for Ethereum, Solana, and Polygon',
              'Worked on a terraform script for a Polygon node on AWS'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Icered | Blockchain Engineer"
            datesWorked="Nov 2021 - Jan 2022"
            companyDescription="Worked on updating their blockchain related features
            in their applications."
            jobAccomplishments={[
              'Developed a token that only allows the use of an admin signature to mint tokens',
              'Created the smart contracts and backend for a NFT exchange that had users sign messages to list their NFTs and that allowed lazy minting',
              'Researched the creation of a centralized crypto exchange for Bitcoin, Ethereum, and Icered tokens'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Darwins | Blockchain Engineer"
            datesWorked="Jun 2021 - Nov 2021"
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
            companyNameAndPosition="Halo Platform | Back-end Developer"
            datesWorked="May 2018 - Aug 2018"
            companyDescription="Worked on a decentralized trading platform."
            jobAccomplishments={[
              'Helped with a cryptocurrency exchange using Node.js that traded Bitcoin, Ethereum, and Halo',
              'Created unit and integration tests using Mocha Chai for all the methods and functions in a cryptocurrency exchange',
              'Performed application updates with an Agile and Scrum methodology for fast software iterations'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Florida Biologix | Lab Technician"
            datesWorked="Mar 2015 – Aug 2015"
            companyDescription="Worked in the manufacturing department of the company
            producing large volumes of biologic products."
            jobAccomplishments={[
              'Involved in the upstream manufacturing of viral vectors for use in clinical trials using up to 400L of suspension cells in the cleanrooms of a cGMP facility',
              'Organized and implemented  the addition of external air flow meters to the company’s cleanroom bioreactors for process verification in the production runs ',
              'Wrote and edited standard operating procedures and production batch records for new processes and equipment '
            ]}
          />
        </div>
        <div className="education-wrap">
          <div className="education-header" id="education-id">
            Education
          </div>
          <Education
            educationName="Codesmith"
            educationDate="Sep 2016"
            educationDegree="Software Engineering Immersive Program"
            educationDescription="Codesmith teaches you software engineering
            and full stack Javascript development."
            educationLink="https://www.codesmith.io/"
          />
          <Education
            educationName="University of Florida"
            educationDate="Dec 2014"
            educationDegree="Bachelor of Science in Mechanical Engineering"
            educationLink="https://www.ufl.edu/"
          />
        </div>
        <div className="contact-me-wrap">
          <div className="contact-me-header" id="contact-me-id">
            Contact Me
          </div>
          <div className="contact-me-email">
            My email is zhiwen555@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
