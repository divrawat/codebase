import "./slider.css"

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";




const Slider = () => {


    const listItems = [
        "Trending Now",
        "Data Structures",
        "Algorithms",
        "Interview Preparation",
        "Data Science",
        "AI",
        "ML",
        "Web Dev",

    ];


    function scrollright() {
        let slider = document.getElementById("slider0")
        slider.scrollLeft += 400;
    }

    function scrollleft() {
        let slider = document.getElementById("slider0")
        slider.scrollLeft -= 400;
    }

    function scrollright0() {
        let slider = document.getElementById("slider00")
        slider.scrollLeft += 400;
    }

    function scrollleft0() {
        let slider = document.getElementById("slider00")
        slider.scrollLeft -= 400;
    }

    function scrollright00() {
        let slider = document.getElementById("slider000")
        slider.scrollLeft += 400;
    }

    function scrollleft00() {
        let slider = document.getElementById("slider000")
        slider.scrollLeft -= 400;
    }


    return (

        <>
            <div className="sliderheading">
                <div className="sliderheadingH1">DSA</div>
                <div className="viewall">View All</div>
            </div>


            <div className="mainslider0">
                <FaChevronLeft className="leftarrow0" onClick={scrollleft} size={50} />
                <ul className="itemsul0" id="slider0">
                    {listItems.map(item => (
                        <div className="container0" key={item}>
                            <li ><a href="#">{item}</a></li>
                        </div>
                    ))}
                </ul>
                <FaChevronRight className="rightarrow0" onClick={scrollright} size={50} />
            </div>


            <br /><br /><br /><br /><br /><br /><br />

            <div className="sliderheading" >
                <div className="sliderheadingH1">Web Development</div>
                <div className="viewall">View All</div>
            </div>


            <div className="mainslider00">
                <FaChevronLeft className="leftarrow0" onClick={scrollleft0} size={50} />
                <ul className="itemsul0" id="slider00">
                    {listItems.map(item => (
                        <div className="container0" style={{ backgroundColor: "#ea7e36" }} key={item}>
                            <li><a href="#">{item}</a></li>
                        </div>
                    ))}
                </ul>
                <FaChevronRight className="rightarrow0" onClick={scrollright0} size={50} />
            </div>





            <br /><br /><br /><br /><br /><br /><br />

            <div className="sliderheading" >
                <div className="sliderheadingH1">Tutorials</div>
                <div className="viewall">View All</div>
            </div>


            <div className="mainslider000">
                <FaChevronLeft className="leftarrow0" onClick={scrollleft00} size={50} />
                <ul className="itemsul0" id="slider000">
                    {listItems.map(item => (
                        <div className="container0" style={{ backgroundColor: "#66b56f" }} key={item}>
                            <li ><a href="#">{item}</a></li>
                        </div>
                    ))}
                </ul>
                <FaChevronRight className="rightarrow0" onClick={scrollright00} size={50} />
            </div>

        </>
    )
}


export default Slider