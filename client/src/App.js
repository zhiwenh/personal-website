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
import dexImage2 from './dex2.png'
import delibImage from './delib.png'
import destoreImage from './destore.png'
import destoreImage2 from './destore2.png';
import devchainImage from './devchain.png'
import leagueOfLegendsCooldownTracker from './league-of-legends-cooldown-tracker.png'
import leagueOfLegendsCooldownTracker2 from './league-of-legends-cooldown-tracker2.png'
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


  // minor change

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
            I'm a software engineer with a passion for full stack development and
            blockchain innovation. Over the years, I've contributed to four
            companies in blockchain roles, where I developed and optimized
            decentralized finance (DeFi) applications, ERC20 tokens, NFT platforms,
            and other groundbreaking blockchain projects. I have also developed my own personal
            blockchain applications and other software applications. You can explore my projects
            in the projects section.
          <br />
          <br />
            Beyond blockchain, I bring extensive experience in both front-end and
            back-end development. I've built and maintained dynamic, user-friendly
            web applications using frameworks like React and Angular, ensuring seamless
            performance and scalability. Whether I'm enhancing the user interface or
            refining server-side logic, I take pride in delivering complete,
            high-quality software solutions.
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
            projectImages={[dexImage, dexImage2]}
            projectDate="2024"
            projectDescription="A decentralized exchange for Ethereum ERC-20 tokens. Works off a single
            smart contract that sits on the Ethereum blockchain. Users can add tokens to trade and trade for tokens.
            Requires the user to know the smart contract address of their token. Used React for the front-end."
          />
          <Project
            projectName="Delib"
            projectImages={[delibImage]}
            projectDate="2016 - 2021"
            projectDescription="A simple Ethereum framework. It allows you to
              compile, build, and deploy smart contracts. It also allows you to easily
              create decentralized applications with the smart contracts you created."
            projectLink="https://github.com/zhiwenh/delib"
          />
          <Project
            projectName="Devchain"
            projectDate="2016 - 2018"
            projectImages={[devchainImage]}
            projectDescription="A private Ethereum blockchain generator. Allows you
              to easily set up testnets to test your blockchain applications on."
            projectLink="https://github.com/zhiwenh/devchain"
          />
          <Project
            projectName="League of Legends Cooldown Tracker"
            projectDate="2019"
            projectImages={[leagueOfLegendsCooldownTracker, leagueOfLegendsCooldownTracker2]}
            projectDescription="A cooldown tracker for League of Legends that worked on
            IOS and Android. Used React Native to work on mobile devices."
            projectLink="https://github.com/zhiwenh/lolcooldown"
            customizedClassName="project-league-of-legends-cooldown-tracker"
          />
          <Project
            projectName="Google Music Visualizer"
            projectDate="2016 - 2019"
            projectImages={[googleMusicVisualizer]}
            projectDescription="A music visualizer for Google Play Music."
            projectLink="https://github.com/zhiwenh/google-music-visualizer"
          />
          <Project
            projectName="Destore"
            projectDate="2016"
            projectImages={[destoreImage, destoreImage2]}
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
              'Built and deployed Ethereum nodes on AWS for company financial applications, enabling seamless integration with the Ethereum blockchain for secure and efficient transactions.',
              'Developed a multi-chain custodial wallet supporting Ethereum, Solana, and Polygon, empowering users to trade seamlessly across these platforms.',
              'Created a Terraform script to automate the deployment and management of a Polygon node on AWS, improving infrastructure scalability and reliability',
              'Designed and implemented detailed diagrams to outline the trade functionality of an Ethereum-based financial application, enhancing system transparency and supporting business decision-making.'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Icered | Blockchain Engineer"
            datesWorked="Nov 2021 - Jan 2022"
            companyDescription="Worked on updating their blockchain related features
            in their applications."
            jobAccomplishments={[
              'Developed a custom ERC-20 token with admin-controlled minting functionality, enabling cost-efficient token minting based on specific conditions met within a mobile application.',
              'Designed and implemented Solidity smart contracts and backend services for an NFT exchange platform, facilitating user message signing for NFT listings and supporting lazy minting for efficient transaction handling.',
              'Integrated the NFT marketplace backend with the blockchain, ensuring smooth interaction with Ethereum and storing blockchain transaction data and signed messages in MongoDB for improved reliability and tracking.',
              'Conducted research on building a centralized crypto exchange supporting Bitcoin, Ethereum, ERC-20 tokens, and Icered tokens, contributing to strategic planning and technical architecture.',
              'Utilized Docker to configure and maintain consistent development and testing environments, streamlining workflows and ensuring reliable deployment.'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Darwins | Blockchain Engineer"
            datesWorked="Jun 2021 - Nov 2021"
            companyDescription="Worked on their applications with focus on decentralized
            finance. Also created smart contracts, did front-end work, and did back-end work."
            jobAccomplishments={[
              'Developed an ERC-721 smart contract for user rewards, incorporating a lazy minting feature to enable token redemption at a later time, optimizing token distribution for users.',
              'Led the transition from layer-1 to layer-2 smart contract architecture, implementing batch transaction solutions to enhance scalability and reduce transaction costs.',
              'Designed and implemented front-end and back-end features for minting and transferring ERC-721 tokens in a decentralized finance (DeFi) application, ensuring seamless integration with blockchain systems.',
              'Built decentralized and centralized ERC-721 contracts, including buy-sell, auction, and offer contracts, to provide flexible and efficient trading experiences for users.',
              'Developed Angular 2 frontend components and backend services using TypeScript and Hapi, creating robust API routes for seamless communication between the front-end and blockchain.',
              'Integrated MongoDB to gather and store data from blockchain interactions, ensuring effective data management for server updates and transaction tracking.',
              'Created a smart contract for a generative art NFT collection consisting of 7,000 unique images, known as Cultiez, which are currently available for purchase on OpenSea. Explore the collection at cultiez.com.'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Halo Platform | Back-end Developer"
            datesWorked="May 2018 - Aug 2018"
            companyDescription="Worked on a decentralized trading platform."
            jobAccomplishments={[
              "Researched and implemented the 0x Protocol to develop a decentralized exchange, enhancing the platform's ability to facilitate peer-to-peer trading of cryptocurrencies.",
              'Contributed to the development of a cryptocurrency exchange using Node.js, enabling seamless trading of Bitcoin, Ethereum, and Halo tokens with an emphasis on performance and security.',
              'Created comprehensive unit and integration tests with Mocha and Chai, ensuring the reliability and stability of the exchange’s core functions and processes.',
              'Led application updates and feature enhancements within an Agile and Scrum environment, driving fast-paced software iterations and continuous improvement.'
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Florida Biologix | Lab Technician"
            datesWorked="Mar 2015 – Aug 2015"
            companyDescription="Worked in the manufacturing department of the company
            producing large volumes of biologic products."
            jobAccomplishments={[
              'Played a key role in upstream manufacturing of viral vectors for clinical trials, managing processes with up to 400L of suspension cell cultures within cGMP-compliant cleanroom environments.',
              'Led the integration of external airflow meters into cleanroom bioreactors, ensuring enhanced process verification and optimization during critical production runs.',
              'Developed and refined standard operating procedures (SOPs) and production batch records for new processes and equipment, driving operational efficiency and compliance with regulatory standards.'
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
