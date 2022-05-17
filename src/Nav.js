import React,{useState, useEffect} from 'react';
import"./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(()) => {
        useEffect(() => {
            window.addEventListener("scroll", () => {
              if (window.scrollY > 100){
                //handleShow(true;
              } else handleShow(false);
          };
        }, []);
        
          ruturn() => {
            window.removeEventListener("scroll);
          };
        }, []);
        
    }

    return (
        <div className={'nav ${show && "nav_black"}'}>
            <img
            className="nav_logo"
            src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
            alt="Netflix Logo"
            />

            <img 
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav