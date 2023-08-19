import "./Homepage.css"
import { useState, useEffect } from "react";
import Slider from "./Slider"
import { FaStar, FaTags } from "react-icons/fa";
import Navbar from "./Navbar";
import MainSlider from "./MainSlider";
import Footer from "./Footer";

const Homepage = () => {

  const sentences = [
    'Learn Python java',
    'Learn DS Algo',
    'Master React.js',
    'Build Web Apps',
    'Explore AI and ML',
  ];



  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    if (placeholderIndex < sentences.length) {
      const targetText = sentences[placeholderIndex];
      interval = setInterval(() => {
        if (currentIndex <= targetText.length) {
          setDisplayedText(targetText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % sentences.length);
            setDisplayedText('');
          }, 1000);
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [placeholderIndex]);


  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };



  const [remainingTime, setRemainingTime] = useState(36000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;


  const [selectecat, setSelectedcat] = useState(1);
  const handlecatClick = (catNumber) => {
    setSelectedcat(catNumber);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    setShowButton(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
<Navbar/>
<MainSlider/>
      {showButton && <div onClick={scrollToTop} className="triangle">▲</div>}

      <div className="community">
        <div className="shimmer"></div>
       <div className="comdisplay">Community is here</div> <img className="communityImg" src="/community.png" />
      </div>

      <div className="top-container">
        <div className="topheading">Hello, What Do You Want To Learn ?</div>

        <div className="searcontainer">
          <input className="search" type="text" placeholder={displayedText || sentences[placeholderIndex]} />
          <button className="searchbtn">Search</button>
        </div>

        <div className="scroll-container">
          <div className="topbtncontainer">
            <div className="topbtns">Software Testing LIVE Classes</div>
            <div className="topbtns">System Design: LLD to HLD</div>
            <div className="topbtns">DSA: Basic to advance course</div>
          </div>
        </div>
        <br />
        <br />
      </div>




      <div className="secondcontainer">
        <div className="seconditemsconatiner">

          <div className="seconditems">
            <img src="/photo1.png" />
            <div className="secondheading">Object Oriented Prong</div>
            <p>Pure Object Oriented Language or Complete Object Oriented Language are Fully Object Oriented Languag</p>
          </div>

          <div className="seconditems">
            <img src="/photo2.png" />
            <div className="secondheading">Full Stack Dev</div>
            <p>Pure Object Oriented Language or Complete Object Oriented Language are Fully Object Oriented Languag</p>
          </div>

          <div className="seconditems">
            <img src="/photo3.png" />
            <div className="secondheading">DS & Algos</div>
            <p>Pure Object Oriented Language or Complete Object Oriented Language are Fully Object Oriented Languag</p>
          </div>


        </div>
      </div>

      <br />






      {selectedCard === 1 && (
        <div className="imageselector1" id="imageselector10">
          <div className="column1"> <img src="/photo4.webp" /> </div>
          <div className="column2">
            <div className="c2heading">How To Make Money In 2023</div>
            <p>Tired of the traditional 9-5 grind and dreaming of making money without enduring nerve-wracking job interviews or being bossed around? Well, hold onto your hats because we</p>
          </div>
        </div>
      )}

      {selectedCard === 2 && (
        <div className="imageselector2" id="imageselector20">
          <div className="column1"> <img src="/photo5.webp" /> </div>
          <div className="column2">
            <div className="c2heading">GeeksforGeeks Offline Classes – MERN Stack and DSA Course in Noida and Gurgaon</div>
            <p>Online courses have modernized our way of learning at our own pace and place. But, do you remember theaching classes were the places we e</p>
          </div>
        </div>
      )}

      {selectedCard === 3 && (
        <div className="imageselector3" id="imageselector30">
          <div className="column1"> <img src="/photo6.webp" /> </div>
          <div className="column2">
            <div className="c2heading">GeeksforGeeks Community – Connect, Ask, Learn & Grow with Tech Geeks</div>
            <p>In the modern era of online learning, hybrid work environments, and intense competition, college e right computer sciencn</p>
          </div>
        </div>
      )}

      {selectedCard === 4 && (
        <div className="imageselector4" id="imageselector40">
          <div className="column1"> <img src="/photo7.webp" /> </div>
          <div className="column2">
            <div className="c2heading">10 Best ChatGPT Alternatives in 2023 (Free and Paid)</div>
            <p>ChatGPT is leading the world of chat AI and many people have started incorporating its use in there day to day life. The GPT-3 language model fro</p>
          </div>
        </div>
      )}
      <br />
      <div className="centered">
        <button onClick={() => handleCardClick(1)}>⚫</button>
        <button onClick={() => handleCardClick(2)}>⚫</button>
        <button onClick={() => handleCardClick(3)}>⚫</button>
        <button onClick={() => handleCardClick(4)}>⚫</button>
      </div>

      <br /><br /><br /><br />

      <Slider />


      <div style={{ background: "#f1eeee" }}>
        <div className="gridparent">

          <div className="courses">Courses</div>
          <div className="grid-container">

            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>



            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>




            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>





            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>





            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>



            <div className="grid-item">
              <div><img className="gridimg" src="/img1.png" /></div>
              <div className="floating">
                <div className="stats-container"><img src="/stats.svg" className="stats-svg" />71k Interested</div>
                <div className="rating"><FaStar className='icon0' style={{ color: "rgb(255,215,0)" }} />4.5</div>
              </div>
              <br />
              <div className="gridhead">Gate CS & IT</div>
              <div className="beginner"><img src="/beginner.svg" className="beginner-svg" />Beginner To Advance</div>
            </div>


          </div>
          <br /><br /><br />
        </div>
      </div>






      <div className="grid-container0">
        <div className="grid-column01"></div>

        <div className="grid-column0">
          <div className="image-container">
            <img src="/asset.svg" alt="Problem Of The Day" />

          </div>

          <div className="problem-details">
            <div className="column-heading">Problem Of The Day</div>
            <div className="problem-title">Sub Array with given sum</div>
            <div className="problem-description">
              Solve one problem based on Data Structures and Algorithms Everyday and win exciting prizes.
            </div>
          </div>
        </div>



        <div className="grid-column02">
          <div className="countdown-timer">

            <div className="grid-container000">
              <div className="grid-item000">{hours}</div>
              <div className="grid-item000">{minutes}</div>
              <div className="grid-item000">{seconds}</div>
              <div className="grid-item001">Hours</div>
              <div className="grid-item001">Minutes</div>
              <div className="grid-item001">Seconds</div>
            </div>


          </div>
          <div className="center00">
            <button>Solve Now</button>
          </div>

        </div>

      </div>


      <br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style={{ background: "#f2f2f2", paddingTop: "50px" }}>
        <div className="sliderheading00" >
          <div className="sliderheadingH100">Videos</div>
          <div className="viewall00">View All</div>
        </div>



        <div className="seconditemsconatiner00">

          <div className="seconditems00">
            <img src="/video1.png" />
            <div className="secondheading00">Next Smallest Palindrone</div>
            <p>18/8/2023</p>
          </div>

          <div className="seconditems00">
            <img src="/video2.png" />
            <div className="secondheading00">0-1 Knapshot Problem</div>
            <p>17/8/2023</p>
          </div>

          <div className="seconditems00">
            <img src="/video3.png" />
            <div className="secondheading00">Problem of the Day: 16/8/2023 | Nth Catalan</div>
            <p>17/8/2023</p>
          </div>


        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>



      <div className="articles">
        <div className="articleheading">Articles</div>

        <br /><br />


        <div className="scrollable-container">
          <div className="scrollable-content" id="scrollable">
            <div className="btncontainer">
              {["All", "News", "Java", "Python", "C++", "C#", "C Language", "Interview Experience", "Algorithms", "Sorting", "Linked List",
                "Tree", "Graph", "School Programming"
              ].map((category, index) => (
                <button key={index} className={selectecat === index + 1 ? "selected" : ""} onClick={() => handlecatClick(index + 1)}>
                  {category}
                </button>
              ))}
            </div>


          </div>
        </div>



        <div>

          <div className="allarticles">
            {selectecat === 1 && (
              <>
                <div className="myarticle">
                  <h2>10 Best Free Reverse Phone Number Lookup</h2>
                  <p>Ever been hesitant to answer calls from unfamiliar numbers, fearing scams? You are not the only person facing that. But what if hanging up on those calls might mean missin... <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>All Tag</div>
                    <div>All Tag 1</div>
                    <div>All Tag 2</div>
                  </div>
                </div>



                <div className="myarticle">
                  <h2>10 Best Free Reverse Phone Number Lookup</h2>
                  <p>Ever been hesitant to answer calls from unfamiliar numbers, fearing scams? You are not the only person facing that. But what if hanging up on those calls might mean missin... <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>All Tag</div>
                    <div>All Tag 1</div>
                    <div>All Tag 2</div>
                  </div>
                </div>


                <div className="myarticle">
                  <h2>10 Best Free Reverse Phone Number Lookup</h2>
                  <p>Ever been hesitant to answer calls from unfamiliar numbers, fearing scams? You are not the only person facing that. But what if hanging up on those calls might mean missin... <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>All Tag</div>
                    <div>All Tag 1</div>
                    <div>All Tag 2</div>
                  </div>
                </div>


                <div className="myarticle">
                  <h2>10 Best Free Reverse Phone Number Lookup</h2>
                  <p>Ever been hesitant to answer calls from unfamiliar numbers, fearing scams? You are not the only person facing that. But what if hanging up on those calls might mean missin... <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>All Tag</div>
                    <div>All Tag 1</div>
                    <div>All Tag 2</div>
                  </div>
                </div>




              </>
            )}



            {selectecat === 2 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>News Tag</div>
                    <div>News Tag 1</div>
                    <div>News Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>News Tag</div>
                    <div>News Tag 1</div>
                    <div>News Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>News Tag</div>
                    <div>News Tag 1</div>
                    <div>News Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>News Tag</div>
                    <div>News Tag 1</div>
                    <div>News Tag 2</div>
                  </div>
                </div>
              </>
            )}






            {selectecat === 3 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Java Tag</div>
                    <div>Java Tag 1</div>
                    <div>Java Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Java Tag</div>
                    <div>Java Tag 1</div>
                    <div>Java Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Java Tag</div>
                    <div>Java Tag 1</div>
                    <div>Java Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Java Tag</div>
                    <div>Java Tag 1</div>
                    <div>Java Tag 2</div>
                  </div>
                </div>
              </>
            )}







            {selectecat === 4 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Python Tag</div>
                    <div>Python Tag 1</div>
                    <div>Python Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Python Tag</div>
                    <div>Python Tag 1</div>
                    <div>Python Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Python Tag</div>
                    <div>Python Tag 1</div>
                    <div>Python Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Python Tag</div>
                    <div>Python Tag 1</div>
                    <div>Python Tag 2</div>
                  </div>
                </div>
              </>
            )}


            {selectecat === 5 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C++ Tag</div>
                    <div>C++ Tag 1</div>
                    <div>C++ Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C++ Tag</div>
                    <div>C++ Tag 1</div>
                    <div>C++ Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C++ Tag</div>
                    <div>C++ Tag 1</div>
                    <div>C++ Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C++ Tag</div>
                    <div>C++ Tag 1</div>
                    <div>C++ Tag 2</div>
                  </div>
                </div>

              </>
            )}

            {selectecat === 6 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C# Tag</div>
                    <div>C# Tag 1</div>
                    <div>C# Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C# Tag</div>
                    <div>C# Tag 1</div>
                    <div>C# Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C# Tag</div>
                    <div>C# Tag 1</div>
                    <div>C# Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C# Tag</div>
                    <div>C# Tag 1</div>
                    <div>C# Tag 2</div>
                  </div>
                </div>

              </>
            )}




            {selectecat === 7 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C Language Tag</div>
                    <div>C Language Tag 1</div>
                    <div>C Language Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C Language Tag</div>
                    <div>C Language Tag 1</div>
                    <div>C Language Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C Language Tag</div>
                    <div>C Language Tag 1</div>
                    <div>C Language Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>C Language Tag</div>
                    <div>C Language Tag 1</div>
                    <div>C Language Tag 2</div>
                  </div>
                </div>
              </>
            )}




            {selectecat === 8 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Interview Experience Tag</div>
                    <div>Interview Experience Tag 1</div>
                    <div>Interview Experience Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Interview Experience Tag</div>
                    <div>Interview Experience Tag 1</div>
                    <div>Interview Experience Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Interview Experience Tag</div>
                    <div>Interview Experience Tag 1</div>
                    <div>Interview Experience Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Interview Experience Tag</div>
                    <div>Interview Experience Tag 1</div>
                    <div>Interview Experience Tag 2</div>
                  </div>
                </div>
              </>
            )}




            {selectecat === 9 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Algorithms Tag</div>
                    <div>Algorithms Tag 1</div>
                    <div>Algorithms Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Algorithms Tag</div>
                    <div>Algorithms Tag 1</div>
                    <div>Algorithms Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Algorithms Tag</div>
                    <div>Algorithms Tag 1</div>
                    <div>Algorithms Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Algorithms Tag</div>
                    <div>Algorithms Tag 1</div>
                    <div>Algorithms Tag 2</div>
                  </div>
                </div>
              </>
            )}



            {selectecat === 10 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Sorting Tag</div>
                    <div>Sorting Tag 1</div>
                    <div>Sorting Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Sorting Tag</div>
                    <div>Sorting Tag 1</div>
                    <div>Sorting Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Sorting Tag</div>
                    <div>Sorting Tag 1</div>
                    <div>Sorting Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Sorting Tag</div>
                    <div>Sorting Tag 1</div>
                    <div>Sorting Tag 2</div>
                  </div>
                </div>

              </>
            )}



            {selectecat === 11 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Linked List Tag</div>
                    <div>Linked List Tag 1</div>
                    <div>Linked List Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Linked List Tag</div>
                    <div>Linked List Tag 1</div>
                    <div>Linked List Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Linked List Tag</div>
                    <div>Linked List Tag 1</div>
                    <div>Linked List Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Linked List Tag</div>
                    <div>Linked List Tag 1</div>
                    <div>Linked List Tag 2</div>
                  </div>
                </div>

              </>
            )}




            {selectecat === 12 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Tree Tag</div>
                    <div>Tree Tag 1</div>
                    <div>Tree Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Tree Tag</div>
                    <div>Tree Tag 1</div>
                    <div>Tree Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Tree Tag</div>
                    <div>Tree Tag 1</div>
                    <div>Tree Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Tree Tag</div>
                    <div>Tree Tag 1</div>
                    <div>Tree Tag 2</div>
                  </div>
                </div>

              </>
            )}



            {selectecat === 13 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>

              </>
            )}


            {selectecat === 14 && (
              <>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
                <div className="myarticle">
                  <h2>How to Make a Discord Server Private</h2>
                  <p>Make a Discord Server Private - Quick stepsOpen Discord AppSelect a Server Open Server SettingsSelect Roles Select @everyoneClick Default PermissionsDisable all Permissi <span>Read more</span></p>
                  <div className="tags">
                    <FaTags style={{ color: "green" }} />
                    <div>Graph Tag</div>
                    <div>Graph Tag 1</div>
                    <div>Graph Tag 2</div>
                  </div>
                </div>
              </>
            )}


          </div>
        </div>

      </div>

<Footer/>

    </>
  )
}


export default Homepage;