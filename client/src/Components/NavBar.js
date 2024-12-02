import './../App.css';
import { useRef } from "react";
import NavBarItem from './NavBarItem.js'

export default function NavBarItem(
  {navBarLink, navBarLinkText, navBarLinkClassName}
) {
  const windowWidith = useRef(
    window.innerWidth
  );

  if (window.innerWidth > 400) {
    return (
      <div className="nav-bar">
        <a href={navBarLink} className={navBarLinkClassName}>
          {navBarLinkText}
        </a>
      </div>
    )
  } else {
    return (
      <div className="nav-bar-item-small-window">
        <a href={navBarLink} className={navBarLinkClassName}>
          {navBarLinkText}
        </a>
      </div>
    )
  }
}
