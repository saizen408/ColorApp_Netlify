import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#ffffff",
    backgroundImage: `url(${bg})`
  },

  heading: {
    fontSize: "1.7rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%"
    },
    [sizes.down("xs")]: {
      width: "65%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.3rem"
    }
  },
  fab: {
    display: "flex",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    "&:hover": {
      transform: "scale(1.2, 1.2)",
      transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
    },
    marginRight: "0px",
    [sizes.down("lg")]: {
      marginRight: "10px"
    },
    [sizes.down("md")]: {
      marginRight: "-30px"
    }
  }
};
