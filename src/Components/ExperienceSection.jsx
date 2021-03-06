import React , {useRef} from 'react'

const ExperienceSection = () => {
    const ref = useRef();

    
  function getdivheights()
  {
    var height1 = document.getElementsByClassName("Experience-Section");
    // console.log(height1);

    return height1;
  }  

  window.addEventListener('scroll' , () => {

    var elm = getdivheights()[0];
    // console.log(elm.style)
    if(window.scrollY > elm.offsetTop - 250)
    {
    ref.current.style.opacity = '1';
    ref.current.style.animation = 'Landingload 1s ease';
    ref.current.style.animationFillMode = 'forwards';
    }
 })
  


    return (
        <div ref = {ref} className = "Section Experience-Section">
            <div className = "heading">
                <h2><span>02.</span> Where I've worked</h2>
                <div></div>
            </div>
            <div className = "contents">
                <div className = "left-container">
                    <h5>Software Developer <span>@<a href = "https://wondermaths.com">WonderMaths</a></span></h5>
                    <h5>Dec 2019 - Feb 2020</h5>
                    <div className = "work-experience">
                        <ul>
                            <li>
                                Developed Frontend of Website using Bootstrap ensuring completely Responsive layout. Also used JQuery to incorporate AJAX requests.
                            </li>
                            <li>
                                Integrated Server functions using PHP and MySQL for Database Storage.
                            </li>
                            <li>
                                Deployed the Website accustomed to more than 10k viewers per month.
                            </li>
                            <li>
                                Technologies Used: HTML, CSS,Bootstrap 4, JQuery, PHP, MySQL
                            </li>

                        </ul>
                    </div>
                    <p></p>
                </div>
                <div className = "right-container">

                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
