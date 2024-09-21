import { Box ,Typography} from "@mui/material";
import { IoHomeOutline } from "react-icons/io5";
import { GiSpy } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaPlus, FaMinus} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  // Separate hover states for each section
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredGallery, setIsHoveredGallery] = useState(false);
  const [isHoveredShop, setIsHoveredShop] = useState(false);
  const [isHoveredBlog, setIsHoveredBlog] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const galleryRef = useRef(null);
const shopRef = useRef(null);
const blogRef = useRef(null);
const contactRef = useRef(null);

  const updateCarousel = (ref, isHovering) => {
    let start;
    const duration = 3000; // Animation duration
    const initialY = isHovering ? -100 : 0; // Starting Y position
    const finalY = isHovering ? 0 : -100; // Ending Y position
    const initialOpacity = isHovering ? 0 : 1;
    const finalOpacity = isHovering ? 1 : 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1); // Calculate progress between 0 and 1

      // Calculate the translateY and opacity values
      const translateY = initialY + progress * (finalY - initialY);
      const opacity = initialOpacity + progress * (finalOpacity - initialOpacity);

      if (ref.current) {
        ref.current.style.transform = `translateY(${translateY}%)`;
        ref.current.style.opacity = opacity;
      }

      if (progress < 1) {
        requestAnimationFrame(step); // Continue the animation until progress reaches 1
      }
    };

    requestAnimationFrame(step); // Start the animation
  };

  useEffect(() => {
    updateCarousel(galleryRef, isHoveredGallery);
  }, [isHoveredGallery]);
  
  useEffect(() => {
    updateCarousel(shopRef, isHoveredShop);
  }, [isHoveredShop]);

  useEffect(() => {
    updateCarousel(blogRef, isHoveredBlog);
  }, [isHoveredBlog]);

  useEffect(() => {
    updateCarousel(contactRef, isHoveredContact);
  }, [isHoveredContact]);

  const is700 = useMediaQuery({query:'(max-width:700px)'})
  const [isOpen,setIsOpen] = useState(true)

  const handleTheOpen =()=>{
    setIsOpen(prev=>!prev)
    setIsOpenGallery(false)
    setIsOpenBlog(false)
    setIsOpenContact(false)
    setIsOpenShop(false)
  }
  const [isOpenGallery,setIsOpenGallery] = useState(false)
  const [isOpenShop,setIsOpenShop] = useState(false)
  const [isOpenBlog,setIsOpenBlog] = useState(false)
  const [isOpenContact,setIsOpenContact] = useState(false)

  const handleOpenGallery = ()=>{
    setIsOpenGallery(prev=>!prev)
    setIsOpenBlog(false)
    setIsOpenContact(false)
    setIsOpenShop(false)
  }
  const handleOpenShop = ()=>{
    setIsOpenShop(prev=>!prev)
    setIsOpenBlog(false)
    setIsOpenContact(false)
    setIsOpenGallery(false)
  }
  const handleOpenBlog = ()=>{
    setIsOpenBlog(prev=>!prev)
    setIsOpenContact(false)
    setIsOpenGallery(false)
    setIsOpenShop(false)
  }
  const handleOpenContact = ()=>{
    setIsOpenContact(prev=>!prev)
  }

  return (
    <>
      <Box className="boxHeader">
        <Box className={`smallBoxHeader ${is700?"invisble":""}`}>
          {/* HOME Section */}
          <Typography
            onMouseEnter={() => setIsHoveredHome(true)}
            onMouseLeave={() => setIsHoveredHome(false)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
          <div className="divContainer">
          <span
              style={{
                opacity: isHoveredHome ? 1 : 0,
                transition: "opacity 0.1s",
                color: "orangered",
                transform: isHoveredHome ? "scale(1.2)" : "scale(1)",
                marginLeft: `1rem`,
              }}
            >
              [
            </span>
            <span>HOME</span>
            
            <span
              style={{
                opacity: isHoveredHome ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredHome ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
          </div>
            <IoHomeOutline
              style={{
                opacity: isHoveredHome ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredHome ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear"
            />
          </Typography>

          {/* ABOUT US Section */}
          <Typography
            onMouseEnter={() => setIsHoveredAbout(true)}
            onMouseLeave={() => setIsHoveredAbout(false)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
           <div className="divContainer">
           <span
              style={{
                opacity: isHoveredAbout ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredAbout ? "scale(1.2)" : "scale(1)",
              }}
            >
              [
            </span>
            <span>ABOUT</span>
            <span
              style={{
                opacity: isHoveredAbout ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredAbout ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
           
           </div>
            <GiSpy
              style={{
                opacity: isHoveredAbout ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredAbout ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear"
            />
          </Typography>

          {/* GALLERY Section */}
          <Typography
            onMouseEnter={() => setIsHoveredGallery(true)}
            onMouseLeave={() => setIsHoveredGallery(false)} // Corrected hover logic
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
           <div className="divContainer">
           <span
              style={{
                opacity: isHoveredGallery ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredGallery ? "scale(1.2)" : "scale(1)",
              }}
            >
              [
            </span>
            <span>GALLERY</span>
            
            <span
              style={{
                opacity: isHoveredGallery ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredGallery ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
           </div>
            <FaCameraRetro
              style={{
                opacity: isHoveredGallery ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredGallery ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear"
            />
            <ul
          ref={galleryRef}
          className="forList"
          style={{
            opacity: 0, // Start with opacity 0
            transform: "translateY(-100%)", // Start hidden
            transition: "opacity 0.3s ease",
          }}
        >
          <li>GALLERY DETAIL</li>
          <li>GALLERY DETAIL2</li>
          <li>GALLERY DETAIL3</li>
        </ul>
          </Typography>

          {/* shop Menu Items */}
          <Typography
            onMouseEnter={() => setIsHoveredShop(true)}
            onMouseLeave={() => setIsHoveredShop(false)} // Corrected hover logic
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div className="divContainer">
            <span
              style={{
                opacity: isHoveredShop ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredShop ? "scale(1.2)" : "scale(1)",
              }}
            >
              [
            </span>
            <span>SHOP</span>
            
            <span
              style={{
                opacity: isHoveredShop ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredShop ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
            </div>

            <FaCartPlus
              style={{
                opacity: isHoveredShop ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredShop ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear2"
            />
            <ul
        ref={shopRef}
        className="forList"
        style={{
          opacity: 0,
          transform: "translateY(-100%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <li>SHOP DETAIL</li>
        <li>SHOP DETAIL2</li>
        <li>SHOP DETAIL3</li>
      </ul>
          </Typography>


          {/* for blog */}
          <Typography
            onMouseEnter={() => setIsHoveredBlog(true)}
            onMouseLeave={() => setIsHoveredBlog(false)} // Corrected hover logic
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div className="divContainer">
            <span
              style={{
                opacity: isHoveredBlog ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredBlog ? "scale(1.2)" : "scale(1)",
              }}
            >
              [
            </span>
            <span>BLOG</span>
            
            <span
              style={{
                opacity: isHoveredBlog ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredBlog ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
            </div>
            <PiNotePencilBold
              style={{
                opacity: isHoveredBlog ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredBlog ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear2"
            />
            <ul
        ref={blogRef}
        className="forList"
        style={{
          opacity: 0,
          transform: "translateY(-100%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <li>BLOG DETAIL</li>
        <li>BLOG DETAIL2</li>
        <li>BLOG DETAIL3</li>
      </ul>
          </Typography>

          <Typography
            onMouseEnter={() => setIsHoveredContact(true)}
            onMouseLeave={() => setIsHoveredContact(false)} // Corrected hover logic
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div className="divContainer">
            <span
              style={{
                opacity: isHoveredContact ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredContact ? "scale(1.2)" : "scale(1)",
              }}
            >
              [
            </span>
            <span>CONTACT</span>
            
            <span
              style={{
                opacity: isHoveredContact ? 1 : 0,
                transition: "opacity 0.3s",
                color: "orangered",
                transform: isHoveredContact ? "scale(1.2)" : "scale(1)",
              }}
            >
              ]
            </span>
            </div>

            <RiMapPinUserFill
              style={{
                opacity: isHoveredContact ? 1 : 0,
                transition: "opacity 0.3s",
                transform: isHoveredContact ? "scale(1.2)" : "scale(1)",
              }}
              className="iconAppear"
            />
            <ul
        ref={contactRef}
        className="forList"
        style={{
          opacity: 0,
          transform: "translateY(-100%)",
          transition: "opacity 0.3s ease",
        }}
      >
        <li>CONTACT DETAIL</li>
        <li>CONTACT DETAIL2</li>
        <li>CONTACT DETAIL3</li>
      </ul>
          </Typography>
        </Box>

        {is700?(
          <>
            <Box className="secondSmallBoxHeader">
              <Typography>MENU</Typography>
              {isOpen?<IoMenu className="anIcon" onClick={handleTheOpen}/>:<FaXmark className="anIcon" onClick={handleTheOpen}/>}
          </Box>
          <Box className={`absoluteHeaderPart ${!isOpen?`visble`:``}`}>
            <div className="divAbosulteHeader">
              <Typography><Link className="linkRemover">HOME</Link></Typography>
            </div>
            <div className="divAbosulteHeader">
              <Typography><Link className="linkRemover">ABOUT</Link></Typography>
            </div>
            <div className="divAbosulteHeader">
              <div className="divAbsoulte2Header">
              <Typography><Link className="linkRemover">GALLERY</Link></Typography>
              {!isOpenGallery?<FaPlus onClick={handleOpenGallery} className="hoverPointer"/>:<FaMinus onClick={handleOpenGallery} className="hoverPointer"/>}
            </div>
            <div className={`divforIt ${!isOpenGallery?`invisbleiT`:``}`}>
            <Typography>GALLERY DETAIL</Typography>
          <Typography>GALLERY DETAIL2</Typography>
          <Typography>GALLERY DETAIL3</Typography>

            </div>
              </div>

              <div className="divAbosulteHeader">
              <div className="divAbsoulte2Header">
              <Typography><Link className="linkRemover">SHOP</Link></Typography>
              {!isOpenShop?<FaPlus onClick={handleOpenShop} className="hoverPointer"/>:<FaMinus onClick={handleOpenShop} className="hoverPointer"/>}
            </div>
            <Box className={`divforIt ${!isOpenShop?`invisble`:``}`}>
            <Typography>SHOP DETAIL</Typography>
          <Typography>SHOP DETAIL2</Typography>
          <Typography>SHOP DETAIL3</Typography>

            </Box>
              </div>

              <div className="divAbosulteHeader">
              <div className="divAbsoulte2Header">
              <Typography><Link className="linkRemover">BLOG</Link></Typography>
              {!isOpenBlog?<FaPlus onClick={handleOpenBlog} className="hoverPointer"/>:<FaMinus onClick={handleOpenBlog} className="hoverPointer"/>}
            </div>
            <Box className={`divforIt ${!isOpenBlog?`invisble`:``}`}>
            <Typography>BLOG DETAIL</Typography>
          <Typography>BLOG DETAIL2</Typography>
          <Typography>BLOG DETAIL3</Typography>

            </Box>
              </div>

              <div className="divAbosulteHeader">
              <div className="divAbsoulte2Header">
              <Typography><Link className="linkRemover">CONTACT</Link></Typography>
              {!isOpenContact?<FaPlus onClick={handleOpenContact} className="hoverPointer"/>:<FaMinus onClick={handleOpenContact} className="hoverPointer"/>}
            </div>
            <Box className={`divforIt ${!isOpenContact?`invisble`:``}`}>
            <Typography>CONTACT DETAIL</Typography>
          <Typography>CONTACT DETAIL2</Typography>
          <Typography>CONTACT DETAIL3</Typography>

            </Box>
              </div>
          </Box>
          </>
        ):``}
      </Box>
    </>
  );
};
export default Header;
