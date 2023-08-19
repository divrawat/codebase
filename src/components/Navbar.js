import React from 'react';
import { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faSearch, faMoon, faX } from '@fortawesome/free-solid-svg-icons';
import { FaChevronRight, FaChevronDown, FaChevronUp, FaVideo } from "react-icons/fa";
import Hamburger from 'hamburger-react';


const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});


  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  const toggleDropdown = (key) => {

    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [key]: !prevDropdowns[key],
    }));
  };

  const getIcon = (key) => {
    return dropdowns[key] ? <FaChevronUp className='icon0' /> : <FaChevronDown className='icon0' />;
  };



  const search = () => {
    document.getElementById("searchbar").style.display = "inline";
    document.getElementById("searchiconid").style.display = "none";
    document.getElementById("xicon").style.display = "inline";
    document.getElementById("searchiconid2").style.visibility = "visible";
  };

  const cross = () => {
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("searchiconid").style.display = "inline";
    document.getElementById("xicon").style.display = "none";
    document.getElementById("searchiconid2").style.visibility = "hidden";
  };


  return (
    <nav className="navbar">
      <ul className="left-section">

        {/* <div className='menutoggle'>☰</div> */}
        <div className='menutoggle'>
          <Hamburger toggled={isOpen} toggle={toggleSidebar} size={20} />

          <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul>
              <li> <a href="#" className='sidebarsignin' >Sign In</a></li>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">Saved Videos <FaVideo className='videoicon' /></a></li>
              <li> <a href="#">Courses</a></li>

              <li onClick={() => toggleDropdown('professionals')}> <a href="#">For Working Professionals {getIcon('professionals')}</a>
                {dropdowns['professionals'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('professionals2')}> <a href="#">For Working 222 {getIcon('professionals2')}</a>
                {dropdowns['professionals2'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">222Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                )}
              </li>


              <li onClick={() => toggleDropdown('algo')}> <a href="#">DSA & Algo {getIcon('algo')}</a>
                {dropdowns['algo'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('algo1')}> <a href="#">DSA & Algo {getIcon('algo1')}</a>
                {dropdowns['algo1'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>


              <li onClick={() => toggleDropdown('algo2')}> <a href="#">DSA & Algo {getIcon('algo2')}</a>
                {dropdowns['algo2'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>


              <li onClick={() => toggleDropdown('algo3')}> <a href="#">DSA & Algo {getIcon('algo3')}</a>
                {dropdowns['algo3'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>


              <li onClick={() => toggleDropdown('algo4')}> <a href="#">DSA & Algo {getIcon('algo4')}</a>
                {dropdowns['algo4'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>


              <li onClick={() => toggleDropdown('algo5')}> <a href="#">DSA & Algo {getIcon('algo5')}</a>
                {dropdowns['algo5'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('algo6')}> <a href="#">DSA & Algo {getIcon('algo6')}</a>
                {dropdowns['algo6'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('algo6')}> <a href="#">DSA & Algo {getIcon('algo6')}</a>
                {dropdowns['algo6'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('algo7')}> <a href="#">DSA & Algo {getIcon('algo7')}</a>
                {dropdowns['algo7'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

              <li onClick={() => toggleDropdown('algo8')}> <a href="#">DSA & Algo {getIcon('algo8')}</a>
                {dropdowns['algo8'] && (
                  <ul style={{background:"#ececec"}}>
                    <li><a href="#">DS Algo 1</a></li>
                    <li><a href="#">DS Algo 2</a></li>
                    <li><a href="#">Ds Algo 3</a></li>
                  </ul>
                )}
              </li>

            </ul>
          </div>
        </div>



        <div className="dropdown">
          <li className="dropbtn" >Courses <FaChevronDown className='flip-icon' />
            <ul className="dropdown-content">
              <li className='flip-icon2'><a href="#">DSA To Development</a></li>
              <li className='flip-icon2'><a href="#">For Working Professionals <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu1'>
                  <li><a href="#">Data Structures & Algos</a></li>
                  <li><a href="#">System Design</a></li>
                  <li><a href="#">Java Backend Dev</a></li>
                  <li><a href="#">DevOps</a></li>
                  <li ><a href="#">Data Structures & Algos in Python</a></li>
                </ul>
              </li>



              <li className='flip-icon2'><a href="#">For Students <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu1'>
                  <li><a href="#">Interview prep Course</a></li>
                  <li><a href="#">Gate CS IT 2024</a></li>
                  <li><a href="#">Data Science</a></li>
                  <li><a href="#">DS & Algos in C++, Java</a></li>
                  <li ><a href="#">Master Competitive Programming</a></li>
                  <li ><a href="#">Full Stack Dev in React, Node.js</a></li>
                </ul>
              </li>


              <li className='flip-icon2'><a href="#">For School Students <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu2'>
                  <li><a href="#">CBSE class 12 Computer Science</a></li>
                  <li><a href="#">School Guide</a></li>
                  <li><a href="#">Python Programming Foundation</a></li>
                </ul>
              </li>

              <li><a href="#">All Courses</a></li>
            </ul>
          </li>


          {/* 2 nd dropdown  ------------------------------------ */}

          <li className="dropbtn" >Tutorials <FaChevronDown className='flip-icon' />

            <ul className="dropdown-content2" id='dc2'>

              <li className='flip-icon2'><a href="#">Data Structures & Algorithms<FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu3'>
                  <li><a href="#">DS Algo</a></li>
                  <li><a href="#">DSA for Beginners</a></li>
                  <li><a href="#">Data Science</a></li>
                  <li><a href="#">Algorithms</a></li>
                  <li ><a href="#">Complete DSA tutorial</a></li>
                  <li ><a href="#">Complete Programming</a></li>
                  <li ><a href="#">DSA Cheat Sheet</a></li>
                  <li ><a href="#">Top Interview Questions</a></li>
                  <li ><a href="#">Puzzles</a></li>
                </ul>
              </li>


              <li className='flip-icon2'><a href="#">System Design <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu4'>
                  <li><a href="#">System Design Tutorial</a></li>
                  <li><a href="#">System Design Pattern</a></li>
                  <li><a href="#">System Design Roadmap</a></li>
                  <li><a href="#">System Design Questions</a></li>
                </ul>
              </li>

            </ul>
          </li>



          {/* Dropdown 3 ------------------------------- */}

          <li className="dropbtn" >Jobs <FaChevronDown className='flip-icon' />

            <ul className="dropdown-content3" id='dc3'>

              <li className='flip-icon2'><a href="#">Job Seekers<FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu5'>
                  <li><a href="#">Get Hired: Apply For Jobs</a></li>
                  <li><a href="#">Job-a-thon: Hiring Challange</a></li>
                </ul>
              </li>

              <li className='flip-icon2'><a href="#">For recruiters <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu6'>
                  <li><a href="#">Recruiters Dashboard</a></li>
                  <li><a href="#">Corporate Hiring Solutions</a></li>
                </ul>
              </li>

            </ul>
          </li>


          {/* Dropdown 4 ---------------------------- */}

          <li className="dropbtn" >Practice <FaChevronDown className='flip-icon' />

            <ul className="dropdown-content4" id='dc4'>

              <li><a href="#">All DSA Problems</a></li>
              <li><a href="#">Problems Of The Day</a></li>
              <li><a href="#">GFG SDE Sheet</a></li>


              <li className='flip-icon2'><a href="#">Curated DSA List <FaChevronRight className='icon0' /></a>
                <ul className="dropdown-content" id='submenu6'>
                  <li><a href="#">Beginners DSA Sheet</a></li>
                  <li><a href="#">Love Babbar Sheet</a></li>
                  <li><a href="#">Top 50 Array Problems</a></li>
                  <li><a href="#">Top 50 String Problems</a></li>
                  <li><a href="#">Top 50 String Problems</a></li>
                  <li><a href="#">Top 50 Graph Problems</a></li>
                  <li><a href="#">Top 50 DP Problems</a></li>
                </ul>
              </li>

            </ul>
          </li>


          <li className="dropbtn" >Contests <FaChevronDown className='flip-icon' />

            <ul className="dropdown-content5" id='dc5'>

              <li><a href="#">GFG Weekly Coding Contest</a></li>
              <li><a href="#">Job-A-Thon: Hiring Challange</a></li>
              <li><a href="#">BiWizard School Contest</a></li>
              <li><a href="#">All Contests and Events</a></li>

            </ul>
          </li>


        </div>
      </ul>

      <div className="middle-section">
        <img src="gfglogo.svg" alt="Logo" className="logo" />
      </div>



      <div className="right-section">
        <FontAwesomeIcon icon={faSearch} className="searchicon2" id='searchiconid2' style={{ color: "grey" }} />
        <input type='search' id='searchbar' name='search' className="searchinput" placeholder='Search Here' autoComplete='off' />
        <FontAwesomeIcon icon={faX} className="xicon" id='xicon' onClick={cross} />
        <FontAwesomeIcon icon={faSearch} className="searchicon" onClick={search} id='searchiconid' size='lg' />

        <FontAwesomeIcon icon={faMoon} className="moonicon" size='lg' />
        <FontAwesomeIcon icon={faLanguage} className="languageicon" size='lg' />
        <button className="signin"><a href="#">Sign In</a></button>
        {/* Add more links on the right */}
      </div>
    </nav>
  );
};

export default Navbar;
