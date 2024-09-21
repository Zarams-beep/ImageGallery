import Header2 from "../Component/Header2";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Art from "../DescribeJson/Art.json";
import Design from "../DescribeJson/Design.json";
import Music from "../DescribeJson/Music.json";
import Tech from "../DescribeJson/Tech.json";
import Commercial from "../DescribeJson/Commerical.json";
import { shuffleArray } from "../DescribeJson/Stuffs";
import { GiHeartburn } from "react-icons/gi";
import LazyLoad from "react-lazyload";
import { TiPinOutline } from "react-icons/ti";
import { BsCameraFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [isSticky, setSticky] = useState(1);
  const [allValue, setAllValue] = useState([]);
  const [forAllValue, setForAllValue] = useState([]);

  // Combine the JSON files into one array when the component loads
  useEffect(() => {
    const combinedData = [...Design, ...Art, ...Music, ...Tech, ...Commercial]; // Merge all arrays
    setAllValue(shuffleArray(combinedData));
  }, []);

  const [showAll, setShowAll] = useState(true);
  // to open items
  const [trueArt, setTrueArt] = useState(false);
  const [trueComm, setTrueComm] = useState(false);
  const [trueDesign, setTrueDesign] = useState(false);
  const [trueMusic, setTrueMusic] = useState(false);
  const [trueTech, setTrueTech] = useState(false);

  const handleWhichValue = (name) => {
    if (name === "art") {
      setForAllValue([...Art]);
      setShowAll(false);
      setTrueArt(true);
      setTrueComm(false);
      setTrueDesign(false);
      setTrueMusic(false);
      setTrueTech(false);
    } else if (name === "commercial") {
      // Corrected the typo here
      setForAllValue([...Commercial]);
      setShowAll(false);
      setTrueArt(false);
      setTrueComm(true);
      setTrueDesign(false);
      setTrueMusic(false);
      setTrueTech(false);
    } else if (name === "design") {
      setForAllValue([...Design]);
      setShowAll(false);
      setTrueArt(false);
      setTrueComm(false);
      setTrueDesign(true);
      setTrueMusic(false);
      setTrueTech(false);
    } else if (name === "music") {
      setForAllValue([...Music]);
      setShowAll(false);
      setTrueArt(false);
      setTrueComm(false);
      setTrueDesign(false);
      setTrueMusic(true);
      setTrueTech(false);
    } else if (name === "tech") {
      setForAllValue([...Tech]);
      setShowAll(false);
      setTrueArt(false);
      setTrueComm(false);
      setTrueDesign(false);
      setTrueMusic(false);
      setTrueTech(true);
    } else {
      setShowAll(true);
    }
  };

  // Sticky header effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newSticky = scrollTop > 100 ? 0.6 : 1; // Adjust to a fixed threshold
      setSticky(newSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for hovering
  const [hoverAll, setHoverAll] = useState(false);
  const [hoverArt, setHoverArt] = useState(false);
  const [hoverComm, setHoverComm] = useState(false);
  const [hoverDesign, setHoverDesign] = useState(false);
  const [hoverMusic, setHoverMusic] = useState(false);
  const [hoverTech, setHoverTech] = useState(false);

  // art
  const [shuffledImagesArt, setShuffledImagesArt] = useState(() => {
    const imageArray = Art.map((el) => el.img);
    return shuffleArray(imageArray);
  });

  const [currentIndexArt, setCurrentIndexArt] = useState(0);

  const handlePreviousArt = () => {
    setCurrentIndexArt((prevIndex) =>
      prevIndex === 0 ? shuffledImagesArt.length - 1 : prevIndex - 1
    );
  };

  const handleNextArt = () => {
    setCurrentIndexArt((prevIndex) =>
      prevIndex === shuffledImagesArt.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Commercial
  const [shuffledImagesComm, setShuffledImagesComm] = useState(() => {
    const imageArray = Commercial.map((el) => el.img);
    return shuffleArray(imageArray);
  });

  const [currentIndexComm, setCurrentIndexComm] = useState(0);

  const handlePreviousComm = () => {
    setCurrentIndexComm((prevIndex) =>
      prevIndex === 0 ? shuffledImagesComm.length - 1 : prevIndex - 1
    );
  };

  const handleNextComm = () => {
    setCurrentIndexComm((prevIndex) =>
      prevIndex === shuffledImagesComm.length - 1 ? 0 : prevIndex + 1
    );
  };

  // tech
  const [shuffledImagesTech, setShuffledImagesTech] = useState(() => {
    const imageArray = Tech.map((el) => el.img);
    return shuffleArray(imageArray);
  });

  const [currentIndexTech, setCurrentIndexTech] = useState(0);

  const handlePreviousTech = () => {
    setCurrentIndexTech((prevIndex) =>
      prevIndex === 0 ? shuffledImagesTech.length - 1 : prevIndex - 1
    );
  };

  const handleNextTech = () => {
    setCurrentIndexTech((prevIndex) =>
      prevIndex === shuffledImagesTech.length - 1 ? 0 : prevIndex + 1
    );
  };

  // design
  const [shuffledImagesDesign, setShuffledImagesDesign] = useState(() => {
    const imageArray = Design.map((el) => el.img);
    return shuffleArray(imageArray);
  });

  const [currentIndexDesign, setCurrentIndexDesign] = useState(0);

  const handlePreviousDesign = () => {
    setCurrentIndexDesign((prevIndex) =>
      prevIndex === 0 ? shuffledImagesDesign.length - 1 : prevIndex - 1
    );
  };

  const handleNextDesign = () => {
    setCurrentIndexDesign((prevIndex) =>
      prevIndex === shuffledImagesDesign.length - 1 ? 0 : prevIndex + 1
    );
  };

  // music

  const [shuffledImagesMusic, setShuffledImagesMusic] = useState(() => {
    const imageArray = Music.map((el) => el.img);
    return shuffleArray(imageArray);
  });

  const [currentIndexMusic, setCurrentIndexMusic] = useState(0);

  const handlePreviousMusic = () => {
    setCurrentIndexMusic((prevIndex) =>
      prevIndex === 0 ? shuffledImagesMusic.length - 1 : prevIndex - 1
    );
  };

  const handleNextMusic = () => {
    setCurrentIndexMusic((prevIndex) =>
      prevIndex === shuffledImagesMusic.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
      setValidationMessage(''); 
  };

  const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  };

  const [colorCheck,setColorCheck] = useState(false)
  const handleClick = () => {
      if (isValidEmail(inputValue)) {
          setValidationMessage('Submitted! Thank You!');
          setInputValue('')
          setColorCheck(true)
      } else {
          setValidationMessage('Please enter a valid email address.');
      }
  };

  return (
    <>
      <Header2 />
      <Box className="mainPageView">
        <div className="forBorder"></div>
      </Box>
      <Box className="second">
        <section className="secondBlack">
          <div className="secondBlack2">
            <Typography variant="h1">Portfolio</Typography>
            <Typography className="infoSecond">
              Alias impedit, neque ut reiciendis voluptatem suscipit nemo et.
            </Typography>
            <div className="lineIcon">
              <Typography className="line"></Typography>
              <Typography>
                <GiHeartburn className="TheIcon" />
              </Typography>
              <Typography className="line"></Typography>
            </div>

            <div className="secondBtnContainer">
              <Button
                onClick={() => {
                  setShowAll(true);
                  setTrueArt(false);
                  setTrueComm(false);
                  setTrueDesign(false);
                  setTrueMusic(false);
                  setTrueTech(false);
                }}
                onMouseEnter={() => setHoverAll(true)}
                onMouseLeave={() => setHoverAll(false)}
                className={`${hoverAll ? "hoverWhite" : ""} ${
                  showAll ? "trueWhite" : ""
                }`}
                id="All"
              >
                All
              </Button>
              <Button
                onClick={() => {
                  handleWhichValue("art");
                }}
                onMouseEnter={() => setHoverArt(true)}
                onMouseLeave={() => setHoverArt(false)}
                className={`${hoverArt ? "hoverWhite" : ""} ${
                  trueArt ? "trueWhite" : ""
                }`}
                id="Art"
              >
                Art
              </Button>
              <Button
                onClick={() => {
                  handleWhichValue("commercial");
                }}
                onMouseEnter={() => setHoverComm(true)}
                onMouseLeave={() => setHoverComm(false)}
                className={`${hoverComm ? "hoverWhite" : ""} ${
                  trueComm ? "trueWhite" : ""
                }`}
                id="Commercial"
              >
                Commercial
              </Button>
              <Button
                onClick={() => {
                  handleWhichValue("design");
                }}
                onMouseEnter={() => setHoverDesign(true)}
                onMouseLeave={() => setHoverDesign(false)}
                className={`${hoverDesign ? "hoverWhite" : ""} ${
                  trueDesign ? "trueWhite" : ""
                }`}
                id="Design"
              >
                Design
              </Button>
              <Button
                onClick={() => {
                  handleWhichValue("music");
                }}
                onMouseEnter={() => setHoverMusic(true)}
                onMouseLeave={() => setHoverMusic(false)}
                className={`${hoverMusic ? "hoverWhite" : ""} ${
                  trueMusic ? "trueWhite" : ""
                }`}
                id="Music"
              >
                Music
              </Button>
              <Button
                onClick={() => {
                  handleWhichValue("tech");
                }}
                onMouseEnter={() => setHoverTech(true)}
                onMouseLeave={() => setHoverTech(false)}
                className={`${hoverTech ? "hoverWhite" : ""} ${
                  trueTech ? "trueWhite" : ""
                }`}
                id="Tech"
              >
                Tech
              </Button>
            </div>
          </div>
        </section>

        <section className="thirdUl">
          {showAll ? (
            <ul>
              {/* Loop through the combined array when showAll is true */}
              {allValue.map((el, index) => (
                <li key={index}>
                  <figure>
                    <Typography className="figureIcon">
                      <TiPinOutline />
                    </Typography>
                    <LazyLoad className="forImage">
                      <img src={el.img} alt={`${el.name}`} />
                      <section className="darkAppear">
                        <div className="darkAppear2">
                          <Typography className="cameraIcon">
                            <BsCameraFill />
                          </Typography>
                          <div>
                            <Typography>{el.name}</Typography>
                            <Typography>${el.price}</Typography>
                          </div>
                        </div>
                      </section>
                    </LazyLoad>
                  </figure>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {/* Loop through the filtered array */}
              {forAllValue.map((el, index) => (
                <li key={index}>
                  <figure>
                    <Typography className="figureIcon">
                      <TiPinOutline />
                    </Typography>
                    <LazyLoad className="forImage">
                      <img src={el.img} alt={`${el.name}`} />
                      <section className="darkAppear">
                        <div className="darkAppear2">
                          <Typography className="cameraIcon">
                            <BsCameraFill />
                          </Typography>
                          <div>
                            <Typography>{el.name}</Typography>
                            <Typography>${el.price}</Typography>
                          </div>
                        </div>
                      </section>
                    </LazyLoad>
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Box>

      <Box className="blog">
        <section className="blogSection">
          <div className="divBlog">
            <Typography variant="h1">Blog</Typography>
            <Typography className="infoSecond">
              Alias impedit, neque ut reiciendis voluptatem suscipit nemo et.
            </Typography>
            <div className="lineIcon">
              <Typography className="line"></Typography>
              <Typography>
                <GiHeartburn className="TheIcon" />
              </Typography>
              <Typography className="line"></Typography>
            </div>
          </div>
        </section>

        <section className="showingBlog">
          <div className="art">
            <div className="artImg">
              <img
                src={shuffledImagesArt[currentIndexArt]}
                alt="Art"
                className="imgArt"
              />
              <div className="borderImg"></div>
              <div className="divArrows">
                <IoIosArrowBack
                  onClick={handlePreviousArt}
                  className="iconsArrow"
                />

                <IoIosArrowForward
                  onClick={handleNextArt}
                  className="iconsArrow"
                />
              </div>
            </div>

            <div className="artContext">
              <Typography variant="h3">Art Journal</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aliquam magni error blanditiis perferendis distinctio,
                neque dolor facilis recusandae officiis iusto ullam amet quaerat
                doloremque explicabo, dolores repudiandae beatae quos.
              </Typography>
              <a href="#art">
                <Button>view art</Button>
              </a>
            </div>
          </div>

          <div className="art">
            <div className="artContext">
              <Typography variant="h3">Commercial Journal</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aliquam magni error blanditiis perferendis distinctio,
                neque dolor facilis recusandae officiis iusto ullam amet quaerat
                doloremque explicabo, dolores repudiandae beatae quos.
              </Typography>
              <a href="#Commercial">
                <Button>view Commercial</Button>
              </a>
            </div>
            <div className="artImg">
              <img
                src={shuffledImagesComm[currentIndexComm]}
                alt="Comm"
                className="imgArt"
              />
               <div className="borderImg"></div>
              <div className="divArrows">
                <IoIosArrowBack
                  onClick={handlePreviousComm}
                  className="iconsArrow"
                />

                <IoIosArrowForward
                  onClick={handleNextComm}
                  className="iconsArrow"
                />
              </div>
            </div>
          </div>

          <div className="art">
            <div className="artImg">
              <img
                src={shuffledImagesTech[currentIndexTech]}
                alt="Comm"
                className="imgArt"
              />
               <div className="borderImg"></div>
              <div className="divArrows">
                <IoIosArrowBack
                  onClick={handlePreviousTech}
                  className="iconsArrow"
                />

                <IoIosArrowForward
                  onClick={handleNextTech}
                  className="iconsArrow"
                />
              </div>
            </div>

            <div className="artContext">
              <Typography variant="h3">Tech Journal</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aliquam magni error blanditiis perferendis distinctio,
                neque dolor facilis recusandae officiis iusto ullam amet quaerat
                doloremque explicabo, dolores repudiandae beatae quos.
              </Typography>
              <a href="#Tech">
                <Button>view Tech</Button>
              </a>
            </div>
          </div>

          <div className="art">
          <div className="artContext">
              <Typography variant="h3">Music Journal</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aliquam magni error blanditiis perferendis distinctio,
                neque dolor facilis recusandae officiis iusto ullam amet quaerat
                doloremque explicabo, dolores repudiandae beatae quos.
              </Typography>
              <a href="#Music">
                <Button>view Music</Button>
              </a>
            </div>
            <div className="artImg">
              <img
                src={shuffledImagesMusic[currentIndexMusic]}
                alt="Comm"
                className="imgArt"
              />
               <div className="borderImg"></div>
              <div className="divArrows">
                <IoIosArrowBack
                  onClick={handlePreviousMusic}
                  className="iconsArrow"
                />

                <IoIosArrowForward
                  onClick={handleNextMusic}
                  className="iconsArrow"
                />
              </div>
            </div>

          </div>


          <div className="art">
            <div className="artImg">
              <img
                src={shuffledImagesDesign[currentIndexDesign]}
                alt="Comm"
                className="imgArt"
              />
               <div className="borderImg"></div>
              <div className="divArrows">
                <IoIosArrowBack
                  onClick={handlePreviousDesign}
                  className="iconsArrow"
                />

                <IoIosArrowForward
                  onClick={handleNextDesign}
                  className="iconsArrow"
                />
              </div>
            </div>

            <div className="artContext">
              <Typography variant="h3">Design Journal</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente aliquam magni error blanditiis perferendis distinctio,
                neque dolor facilis recusandae officiis iusto ullam amet quaerat
                doloremque explicabo, dolores repudiandae beatae quos.
              </Typography>
              <a href="#Design">
                <Button>view Design</Button>
              </a>
            </div>
          </div>
        </section>
      </Box>

          <Box className="about">
          <section className="blogSection">
          <div className="divBlog">
            <Typography variant="h1">About</Typography>
            <Typography className="infoSecond">
              Alias impedit, neque ut reiciendis voluptatem suscipit nemo et.
            </Typography>
            <div className="lineIcon">
              <Typography className="line"></Typography>
              <Typography>
                <GiHeartburn className="TheIcon" />
              </Typography>
              <Typography className="line"></Typography>
            </div>
          </div>
        </section>

        <section className="aboutSection2">
            <div className="aboutImg">
              <img src="/art-institute-of-chicago-C6DiSGOFCxI-unsplash.jpg" alt="Me" />
            </div>

            <div className="aboutIntro">
              <div className="part1">
                <Typography variant="h3">WHO AM I</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aspernatur maxime! Reiciendis nesciunt temporibus nulla! Ducimus laborum eveniet eaque odio corrupti nulla nobis. Molestiae nulla eius quo fugit dicta odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim ex animi, porro quisquam eos! Consequuntur quo, vitae, quaerat itaque, quibusdam nesciunt amet et molestias est inventore animi officiis consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse mollitia optio quaerat corrupti laboriosam odit vel minima? Reiciendis, facere possimus maiores sapiente incidunt reprehenderit adipisci. Minima quibusdam eaque tenetur in.</Typography>
              </div>

              <div className="newletter">
                <Typography variant="h3">NEWLETTER</Typography>
                <Typography>Subscribe to our mailing list and get interesting news to your email inbox.</Typography>

                <div className="subs">
                    <Typography className={`${colorCheck?"green":"red"}`}>{validationMessage}</Typography>
                    <input type="text" placeholder="Enter E-mail" value={inputValue}
                    onChange={handleInputChange} required/>
                    <Button onClick={handleClick}>SUBSCRIBE</Button>
                </div>
              </div>
            </div>
        </section>
          </Box>
    </>
  );
};

export default MainPage;
