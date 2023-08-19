import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div class="Fgrid-item1">
                    <div><img src="/logo.png" /></div>

                    <div class="grid-container0000">
                        <div class="grid-item0000"><FontAwesomeIcon icon={faLocationDot} size='lg' style={{ color: "green" }} className="ficon" /></div>
                        <div class="grid-item0001">A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh - 201305</div>
                        <div class="grid-item0000"><FaEnvelope style={{ color: "green" }} className="ficon" /></div>
                        <div class="grid-item0001">feedback@geeksforgeeks.org</div>
                    </div>

                    <div className="social">
                        <FaFacebook size={35} />
                        <FaTwitter size={35} />
                        <FaInstagram size={35} />
                        <FaYoutube size={35} />
                        <FaLinkedin size={35} />
                    </div>

                    <div className="store">
                        <img src="/playstore.png" />
                        <img src="/appstore.png" />
                    </div>
                </div>





                <div class="Fgrid-container">

                    <div class="Fgrid-item">
                        <div className="Fheading">Company</div>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">In Media</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Advertise with us</a></li>
                        </ul>
                    </div>


                    <div class="Fgrid-item">
                        <div className="Fheading">Explore</div>
                        <ul>
                            <li><a href="#">Job-A-Thon For Freshers</a></li>
                            <li><a href="#">Job-A-Thon For Experienced</a></li>
                            <li><a href="#">GfG Weekly Contest</a></li>
                            <li><a href="#">Offline Classes - Delhi/NCR</a></li>
                            <li><a href="#">DSA in JAVA/C++</a></li>
                            <li><a href="#">Master System Design</a></li>
                            <li><a href="#">Master CP</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">Languages</div>
                        <ul>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">C++</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">GoLang</a></li>
                            <li><a href="#">SQL</a></li>
                            <li><a href="#">R Language</a></li>
                            <li><a href="#">Android Tutorial</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Concepts</div>
                        <ul>
                            <li><a href="#">Data Structures</a></li>
                            <li><a href="#">Arrays</a></li>
                            <li><a href="#">Strings</a></li>
                            <li><a href="#">Linked List</a></li>
                            <li><a href="#">Algorithms</a></li>
                            <li><a href="#">Searching</a></li>
                            <li><a href="#">Sorting</a></li>
                            <li><a href="#">Mathematical</a></li>
                            <li><a href="#">Dynamic Programming</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Roadmaps</div>
                        <ul>
                            <li><a href="#">DSA For Beginners</a></li>
                            <li><a href="#">Basic DSA Coding Problems</a></li>
                            <li><a href="#">Complete Roadmap To Learn DSA</a></li>
                            <li><a href="#">DSA For Frontend Developers</a></li>
                            <li><a href="#">DSA with Javascript</a></li>
                            <li><a href="#">Top 100 DSA Interview Problems</a></li>

                        </ul>
                    </div>


                    <div class="Fgrid-item">
                        <div className="Fheading">Web Development</div>
                        <ul>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">Bootstrap</a></li>
                            <li><a href="#">Angular</a></li>
                            <li><a href="#">React.js</a></li>
                            <li><a href="#">Node.js</a></li>

                        </ul>
                    </div>

                    <div class="Fgrid-item">
                        <div className="Fheading">Web Development</div>
                        <ul>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">Bootstrap</a></li>
                            <li><a href="#">Angular</a></li>
                            <li><a href="#">React.js</a></li>
                            <li><a href="#">Node.js</a></li>

                        </ul>
                    </div>






                    <div class="Fgrid-item">
                        <div className="Fheading">Company</div>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">In Media</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Advertise with us</a></li>
                        </ul>
                    </div>


                    <div class="Fgrid-item">
                        <div className="Fheading">Explore</div>
                        <ul>
                            <li><a href="#">Job-A-Thon For Freshers</a></li>
                            <li><a href="#">Job-A-Thon For Experienced</a></li>
                            <li><a href="#">GfG Weekly Contest</a></li>
                            <li><a href="#">Offline Classes - Delhi/NCR</a></li>
                            <li><a href="#">DSA in JAVA/C++</a></li>
                            <li><a href="#">Master System Design</a></li>
                            <li><a href="#">Master CP</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">Languages</div>
                        <ul>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">C++</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">GoLang</a></li>
                            <li><a href="#">SQL</a></li>
                            <li><a href="#">R Language</a></li>
                            <li><a href="#">Android Tutorial</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Concepts</div>
                        <ul>
                            <li><a href="#">Data Structures</a></li>
                            <li><a href="#">Arrays</a></li>
                            <li><a href="#">Strings</a></li>
                            <li><a href="#">Linked List</a></li>
                            <li><a href="#">Algorithms</a></li>
                            <li><a href="#">Searching</a></li>
                            <li><a href="#">Sorting</a></li>
                            <li><a href="#">Mathematical</a></li>
                            <li><a href="#">Dynamic Programming</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Roadmaps</div>
                        <ul>
                            <li><a href="#">DSA For Beginners</a></li>
                            <li><a href="#">Basic DSA Coding Problems</a></li>
                            <li><a href="#">Complete Roadmap To Learn DSA</a></li>
                            <li><a href="#">DSA For Frontend Developers</a></li>
                            <li><a href="#">DSA with Javascript</a></li>
                            <li><a href="#">Top 100 DSA Interview Problems</a></li>

                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">Company</div>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">In Media</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Advertise with us</a></li>
                        </ul>
                    </div>


                    <div class="Fgrid-item">
                        <div className="Fheading">Explore</div>
                        <ul>
                            <li><a href="#">Job-A-Thon For Freshers</a></li>
                            <li><a href="#">Job-A-Thon For Experienced</a></li>
                            <li><a href="#">GfG Weekly Contest</a></li>
                            <li><a href="#">Offline Classes - Delhi/NCR</a></li>
                            <li><a href="#">DSA in JAVA/C++</a></li>
                            <li><a href="#">Master System Design</a></li>
                            <li><a href="#">Master CP</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">Languages</div>
                        <ul>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">C++</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">GoLang</a></li>
                            <li><a href="#">SQL</a></li>
                            <li><a href="#">R Language</a></li>
                            <li><a href="#">Android Tutorial</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Concepts</div>
                        <ul>
                            <li><a href="#">Data Structures</a></li>
                            <li><a href="#">Arrays</a></li>
                            <li><a href="#">Strings</a></li>
                            <li><a href="#">Linked List</a></li>
                            <li><a href="#">Algorithms</a></li>
                            <li><a href="#">Searching</a></li>
                            <li><a href="#">Sorting</a></li>
                            <li><a href="#">Mathematical</a></li>
                            <li><a href="#">Dynamic Programming</a></li>
                        </ul>
                    </div>



                    <div class="Fgrid-item">
                        <div className="Fheading">DSA Roadmaps</div>
                        <ul>
                            <li><a href="#">DSA For Beginners</a></li>
                            <li><a href="#">Basic DSA Coding Problems</a></li>
                            <li><a href="#">Complete Roadmap To Learn DSA</a></li>
                            <li><a href="#">DSA For Frontend Developers</a></li>
                            <li><a href="#">DSA with Javascript</a></li>
                            <li><a href="#">Top 100 DSA Interview Problems</a></li>

                        </ul>
                    </div>


                    <div class="Fgrid-item">
                        <div className="Fheading">Languages</div>
                        <ul>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">C++</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">GoLang</a></li>
                            <li><a href="#">SQL</a></li>
                            <li><a href="#">R Language</a></li>
                            <li><a href="#">Android Tutorial</a></li>
                        </ul>
                    </div>

                </div>
                <div>

                </div>
            </div>


            <div className="bottom">
                <div><a>@geeksforgeeks, Some rights reserved</a></div>
            </div>
        </>
    )
}


export default Footer