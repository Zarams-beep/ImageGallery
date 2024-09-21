import { Typography, Box } from "@mui/material";
import { GiPencilBrush } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Header from "../Component/Header";
import { useState,} from "react";
import { useMediaQuery } from "react-responsive";

const Header2 = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const is700 = useMediaQuery({ query: "(max-width:700px)" });
  
  return (
    <Box className="mainHeaderBox">
      {!isOpenMenu && (
        <Box className={`${isOpenMenu ? "" : "animateIt"} ${is700 ? "invisible" : ""}`}>
          <Header />
        </Box>
      )}
      <Box
        className={`TheboxHeader2 ${!isOpenMenu ? "animateTheBoxHeader" : ""}`}
      >
        <Box className="smallHeaderBox2">
          <GiPencilBrush className="iconBrush" />
          <div className="logoPart">
            <Typography variant="h4">
              <span style={{ color: `orangered` }}>Artistry</span>Brush
            </Typography>
            <Typography>Sketch Brought to Life</Typography>
          </div>
        </Box>
        <Box onClick={handleMenu} className="menuStyle">
          {isOpenMenu ? <IoMenu /> : <FaXmark />}
        </Box>
      </Box>
    
    </Box>
  );
};

export default Header2;
