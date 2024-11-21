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

  const [showNav, setShowNav] = useState(true);
  let lastScrollY = window.scrollY;

  const navbar = document.getElementById('nav-bar');
  const links = document.querySelectorAll('.nav-bar a');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 600) {
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

  document.addEventListener('click', (event) => {
    if (!(event.target.classList[0] === 'nav-bar' ||
        event.target.classList[0] === 'nav-bar-link' ||
        event.target.classList[0] === 'nav-bar-mobile-button' ||
        event.target.classList[0] === 'nav-bar-mobile-button-1' ||
        event.target.classList[0] === 'nav-bar-mobile-button-2' ||
        event.target.classList[0] === 'nav-bar-mobile-button-3') &&
        mobileTabsOn === true
      ) {
        const navBarItems = document.querySelectorAll('.nav-bar-item');
        for (let i = 0; i < navBarItems.length; i++) {
          navBarItems[i].style.visibility = "hidden";
          navBarItems[i].style.height = "0";
          navBarItems[i].style.width = "0";
          navBarItems[i].style.marginBottom = "0px";
      }

      mobileTabsOn = false;
    }
  });

  return (
    <div>
      <div className="nav-bar-wrap">
        <div id="nav-bar" className={`nav-bar ${showNav ? 'show' : 'hide'}`}>
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
            navBarLink="#resume-id"
            navBarLinkText="Resume"
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
            navBarLink="#skills-id"
            navBarLinkText="Skills"
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
        <div className="name-short-summary-and-about-me-wrap">
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
              web applications using frameworks like React and Angular, ensuring
              seamless performance and scalability (this website is built with React).
              Whether I'm enhancing the user interface or refining server-side logic,
              I take pride in delivering complete, high-quality software solutions.
            </div>
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
          <div className="cv-link-header" id="resume-id">
            Resume
          </div>
          <a
            href={zhiwenHuangCV}
            className="cv-link"
            target="_blank">
              Zhiwen Huang's Resume
          </a>
          <div className="cv-link-description">
            (Opens in new tab, window, or download)
          </div>
        </div>
        <div className="projects-wrap">
          <div className="projects-header" id="projects-id">
            Projects
          </div>
          <div className="projects-wrap-inner">
          <Project
            projectName="Dex"
            projectImages={[dexImage, dexImage2]}
            projectDate="2024"
            projectDescription="A decentralized exchange for Ethereum ERC-20 tokens. Works off a single
            smart contract that sits on the Ethereum blockchain. Users can add tokens to trade and trade for other tokens.
            Requires the user to know the smart contract address of their token. Used React for the front-end."
            projectLink="https://github.com/zhiwenh/dex"
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
        </div>
        <div className="work-experience-wrap">
          <div className="work-experience-header" id="work-experience-id">
            Work Experience
          </div>
          <WorkExperience
            companyNameAndPosition="Synapse | Software Engineer III"
            datesWorked="Mar 2022 - Jun 2022"
            companyDescription="I created blockchain innovations by deploying Ethereum nodes on AWS to streamline financial applications and enable secure, efficient transactions. I developed a multi-chain custodial wallet supporting Ethereum, Solana, and Polygon, enhancing trading capabilities across platforms. Leveraging Terraform, I automated the deployment of Polygon nodes, boosting infrastructure scalability. Additionally, I designed comprehensive diagrams illustrating the trade functionality of Ethereum-based financial systems, promoting clarity and informed decision-making."
            jobAccomplishments={[
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Icered | Blockchain Engineer"
            datesWorked="Nov 2021 - Jan 2022"
            companyDescription="I enhanced blockchain features by developing a custom ERC-20 token with admin-controlled minting, optimizing cost-efficient token issuance based on mobile app conditions. I designed Solidity smart contracts and backend services for an NFT exchange, enabling message signing for NFT listings and supporting lazy minting. By integrating the backend with Ethereum, I ensured seamless blockchain interaction and utilized MongoDB for reliable storage of transaction data. I also researched and contributed to the architecture of a centralized crypto exchange supporting Bitcoin, Ethereum, ERC-20, and Icered tokens. Leveraging Docker, I streamlined development and testing workflows for consistent deployment."
            jobAccomplishments={[
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Darwins | Blockchain Engineer"
            datesWorked="Jun 2021 - Nov 2021"
            companyDescription="I focused on decentralized finance, contributing to a social staking application and other innovative blockchain projects. I developed an ERC-721 smart contract for user rewards with lazy minting functionality, enabling deferred token redemption to optimize user engagement. I led the migration from layer-1 to layer-2 smart contract architecture, implementing batch transactions to improve scalability and reduce costs. I designed and built front-end and back-end features for ERC-721 minting and transfers, ensuring seamless blockchain integration. Additionally, I created flexible buy-sell, auction, and offer contracts for decentralized and centralized trading. My work included developing Angular 2 components and TypeScript-based backend services using Hapi, with MongoDB for efficient transaction tracking and data management. I also created the smart contract for Cultiez, a generative NFT collection of 7,000 unique images, now available on OpenSea."
            jobAccomplishments={[
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Halo Platform | Back-end Developer"
            datesWorked="May 2018 - Aug 2018"
            companyDescription="I contributed to the development of a decentralized trading platform by implementing the 0x Protocol to enable peer-to-peer cryptocurrency trading. I also helped build a cryptocurrency exchange using Node.js, facilitating secure and efficient trading of Bitcoin, Ethereum, and Halo tokens. To ensure reliability, I wrote comprehensive unit and integration tests using Mocha and Chai. Additionally, I played a key role in driving application updates and feature enhancements within an Agile and Scrum environment, supporting rapid development cycles and continuous improvement."
            jobAccomplishments={[
            ]}
          />
          <WorkExperience
            companyNameAndPosition="Florida Biologix | Lab Technician"
            datesWorked="Mar 2015 – Aug 2015"
            companyDescription="I worked in the manufacturing department, producing large volumes of biologic products for clinical trials. I contributed to the upstream manufacturing of viral vectors, managing suspension cell cultures of up to 400L in cGMP-compliant cleanroom environments. I led the integration of external airflow meters into bioreactors, enhancing process verification and optimization. Additionally, I developed and refined standard operating procedures (SOPs) and production batch records, improving operational efficiency and ensuring compliance with regulatory standards."
            jobAccomplishments={[
            ]}
          />
        </div>
        <div className="skills-wrap">
          <div className="skills">
            <div className="skills-header" id="skills-id">
              Skills
            </div>
            <div className="skills-list">
              <div className="skill">
                <p className="skills-list-section-header">Programming Languages:</p> JavaScript, TypeScript, Python, Ruby, C++, Go
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Frameworks & Libraries:</p>  React, Angular, Angular 2, React Native, Django, Express.js, Node.js, Redux, jQuery, Hapi, Tailwind CSS, Next.js, GraphQL
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Blockchain Technologies:</p>  Ethereum, Solidity, Truffle, Hardhat, web3.js, ethers.js, Wagmi, IPFS, Solana, Polygon, Layer-2 solutions
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Development Tools:</p>  AWS, Docker, Electron, Webpack, Mocha, Chai, Gulp, Jest, Terraform, TDD (Test-Driven Development)
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Databases</p> : MongoDB, PostgreSQL
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Web Development:</p>  HTML, CSS, SASS, WebSockets, WebRTC
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Other Tools:</p>  Git, Linux, Agile/Scrum methodologies
              </div>
              <div className="skill">
                <p className="skills-list-section-header">Design & Visualization:</p>  d3.js
              </div>
            </div>
          </div>
        </div>
        <div className="education-and-contact-me-wrap">
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
    </div>
  );
}

export default App;
