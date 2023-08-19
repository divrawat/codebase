import "./mainslider.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";




const MainSlider = () => {


    const listItems = [
        "Trending Now",
        "Data Structures",
        "Algorithms",
        "Interview Preparation",
        "Data Science",
        "Topic-wise Practice",
        "Python",
        "Machine Learning",
        "JavaScript",
        "Java",
        "C",
        "C++",
        "ReactJS",
        "NodeJS",
        "Competitive Programming",
        "Aptitude",
        "Web Development",
        "Puzzles",
        "Projects"
    ];


function scrollright() {
let slider= document.getElementById("slider")
    slider.scrollLeft += 400;
}

function scrollleft() {
    let slider= document.getElementById("slider")
    slider.scrollLeft -= 400;
}




    return (
        <div className="mainslider">
            <FaChevronLeft className="leftarrow" onClick={scrollleft}/>

            <ul className="itemsul" id="slider">
                {listItems.map(item => (

                    <li key={item}><a href="#">{item}</a></li>

                ))}
            </ul>

            <FaChevronRight className="rightarrow" onClick={scrollright}/>


        </div>
    )
}


export default MainSlider