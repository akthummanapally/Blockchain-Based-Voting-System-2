// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// import "./Navbar.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav>
//       <NavLink to="/" className="header">
//         <i className="fab fa-hive"></i> Home
//       </NavLink>
//       <ul
//         className="navbar-links"
//         style={{ width: "35%", transform: open ? "translateX(0px)" : "" }}
//       >
//         <li>
//           <NavLink to="/Registration" activeClassName="nav-active">
//             <i className="far fa-registered" /> Registration
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Voting" activeClassName="nav-active">
//             <i className="fas fa-vote-yea" /> Voting
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Results" activeClassName="nav-active">
//             <i className="fas fa-poll-h" /> Results
//           </NavLink>
//         </li>
//       </ul>
//       <i onClick={() => setOpen(!open)} className="fas fa-bars burger-menu"></i>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <NavLink to="/" className="logo">
          <i className="fab fa-hive"></i> Home
        </NavLink>
        <i onClick={() => setOpen(!open)} className={`fas fa-bars burger-menu ${open ? "open" : ""}`}></i>
      </div>
      <ul className={`navbar-links ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/Registration" activeClassName="nav-active">
            <i className="far fa-registered" /> Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
            <i className="fas fa-poll-h" /> Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
