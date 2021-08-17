import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DPImage from "../../images/dwayne-the-rock-.jpg";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "../header";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Poppins",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    fontFamily: "Poppins",
    backgroundColor: "white",
    color: "#5D6E82",
    boxShadow: "none",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    padding: "15px",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar({ children }) {
  const firstMenu = [
    {
      name: "Flight",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6319 14.8654L9.36357 8.50863L8.71445 7.86433L6.14672 10.432C5.92156 10.6571 5.61257 10.9302 5.26046 11.2104L5.27723 14.0175C5.28202 14.1852 5.191 14.36 5.09759 14.5062L4.72392 14.8678C4.62092 14.9612 4.45326 14.8726 4.35026 14.7169L3.52389 12.42C2.90112 12.7792 2.37655 12.978 2.20409 12.7984C2.02445 12.6212 2.22325 12.0894 2.59213 11.4571L2.59692 11.4595L0.283079 10.6475C0.127386 10.5469 0.0387619 10.3793 0.132178 10.2763L0.493864 9.89544C0.639976 9.80203 0.814831 9.7134 0.982501 9.7134L3.8209 9.70143C4.09157 9.3661 4.35026 9.0691 4.56823 8.85353L7.13597 6.2859L6.53475 5.68232L0.134573 3.4548C-0.0929784 3.37816 0.0363666 3.29193 0.0387618 3.23684L0.515422 2.73625C0.58728 2.69553 0.680695 2.62607 0.929804 2.6117L9.80909 3.61767L12.305 1.1219C13.2607 0.161432 14.396 -0.264911 14.8296 0.171012C15.2631 0.60454 14.8416 1.73985 13.8811 2.69793L11.3852 5.1937L12.4679 14.0702C12.4583 14.3193 12.3912 14.4127 12.3505 14.4846L11.8523 14.9612C11.7972 14.9636 11.7133 15.093 11.6319 14.8654Z"
            fill="#2A7BE4"
          />
        </svg>
      ),
    },
    {
      name: "Stays",
      icon: (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.20041 0.107295L0.699943 3.46869C0.265177 3.73438 1.30172e-05 4.20718 1.22347e-05 4.7167L0 11.2095C0 12.0173 0.654831 12.6721 1.46261 12.6721L11.7009 12.6721C12.5086 12.6721 13.1635 12.0173 13.1635 11.2095V4.7167C13.1635 4.20718 12.8983 3.73438 12.4635 3.46869L6.96308 0.107295C6.72898 -0.0357652 6.43451 -0.0357652 6.20041 0.107295ZM6.35043 6.0903C6.07429 6.0903 5.85043 6.31416 5.85043 6.5903V9.97812C5.85043 10.2543 6.07429 10.4781 6.35043 10.4781H6.81304C7.08918 10.4781 7.31304 10.2543 7.31304 9.97812V6.5903C7.31304 6.31416 7.08918 6.0903 6.81304 6.0903H6.35043Z"
              fill="#5D6E82"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-15"
              y="-11"
              width="43.1635"
              height="42.6721"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.950556 0 0 0 0 0.951867 0 0 0 0 0.983333 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Car Rental",
      icon: (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1279 3.18324C13.9522 2.66208 13.4543 2.28867 12.8686 2.28867H10.6488V0.512878H5.32541V2.28867H3.10567C2.51994 2.28867 2.0334 2.66205 1.84636 3.18324L0 8.49998V15.5992C0 16.0857 0.399361 16.4871 0.887909 16.4871H1.77582C2.26236 16.4871 2.66172 16.0858 2.66172 15.5992V14.7113H13.3125V15.5992C13.3125 16.0857 13.7119 16.4871 14.1984 16.4871H15.0863C15.5749 16.4871 15.9742 16.0858 15.9742 15.5992V8.49998L14.1279 3.18324ZM3.10564 12.0516C2.37016 12.0516 1.77579 11.4539 1.77579 10.7177C1.77579 9.98159 2.37016 9.38789 3.10564 9.38789C3.84313 9.38789 4.43751 9.98226 4.43751 10.7177C4.43751 11.4532 3.84313 12.0516 3.10564 12.0516ZM12.8686 12.0516C12.1311 12.0516 11.5367 11.4539 11.5367 10.7177C11.5367 9.98159 12.1311 9.38789 12.8686 9.38789C13.604 9.38789 14.1984 9.98226 14.1984 10.7177C14.1984 11.4532 13.604 12.0516 12.8686 12.0516ZM1.77579 7.6121L3.10564 3.61855H12.8686L14.1984 7.6121H1.77579Z"
            fill="#5D6E82"
          />
        </svg>
      ),
    },
    {
      name: "Things to do",
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.76389 0.5H12.2639C13.2326 0.53125 14.0139 1.3125 13.9826 2.25V12.75C13.9826 13.7188 13.2326 14.5 12.2639 14.5H1.76389C0.795139 14.5 0.0138889 13.7188 0.0138889 12.75C0.0138889 2.125 -0.0173611 2.25 0.0138889 2.25C0.0138889 1.3125 0.795139 0.5 1.76389 0.5Z"
            fill="#5D6E82"
          />
          <rect x="3" y="4" width="8" height="1" fill="#EDF2F8" />
          <rect x="3" y="7" width="7.11111" height="1" fill="#EDF2F8" />
          <rect x="3" y="10" width="3.55556" height="1" fill="#EDF2F8" />
        </svg>
      ),
    },
    {
      name: "Flight + Hotel",
      icon: (
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.55566"
            y="4.88889"
            width="10.8889"
            height="13.2222"
            rx="2"
            fill="#5D6E82"
          />
          <rect
            x="5"
            y="16"
            width="8"
            height="1"
            transform="rotate(-90 5 16)"
            fill="#EDF2F8"
          />
          <rect
            x="8"
            y="16"
            width="8"
            height="1"
            transform="rotate(-90 8 16)"
            fill="#EDF2F8"
          />
          <path
            d="M13.2222 16.1667C13.2222 15.9519 13.3963 15.7778 13.6111 15.7778C13.8258 15.7778 13.9999 15.9519 13.9999 16.1667V17.7222C13.9999 17.937 13.8258 18.1111 13.6111 18.1111C13.3963 18.1111 13.2222 17.937 13.2222 17.7222V16.1667Z"
            fill="#5D6E82"
          />
          <path
            d="M0 16.1667C0 15.9519 0.174111 15.7778 0.388889 15.7778C0.603666 15.7778 0.777778 15.9519 0.777778 16.1667V17.7222C0.777778 17.937 0.603666 18.1111 0.388889 18.1111C0.174111 18.1111 0 17.937 0 17.7222V16.1667Z"
            fill="#5D6E82"
          />
          <rect
            x="4.5"
            y="0.5"
            width="5"
            height="6"
            rx="1.5"
            stroke="#5D6E82"
          />
        </svg>
      ),
    },
  ];

  const secondMenu = [
    {
      name: "Explore",
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 14.899V0.898987" stroke="#5D6E82" stroke-width="1.1202" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 1.10119C8 0.54912 7.55217 0.101013 7 0.101013C6.44746 0.101013 6 0.54912 6 1.10119C6 1.65327 6.44746 2.10101 7 2.10101C7.55217 2.10101 8 1.65327 8 1.10119Z"
            fill="#5D6E82"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.1779 10.2953C1.29719 10.4078 1.45495 10.4704 1.61891 10.4704H9.35714C9.71218 10.4704 10 10.1826 10 9.82756V8.54184C10 8.1868 9.71218 7.89899 9.35714 7.89899H1.61891C1.45495 7.89899 1.29719 7.96163 1.1779 8.07411L0.496084 8.71696C0.226952 8.97072 0.226952 9.39868 0.496084 9.65244L1.1779 10.2953Z"
            fill="#5D6E82"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8221 4.07409C12.7028 3.96161 12.545 3.89897 12.3811 3.89897L4.64286 3.89897C4.28782 3.89897 4 4.18679 4 4.54183L4 5.82754C4 6.18258 4.28782 6.4704 4.64286 6.4704L12.3811 6.4704C12.545 6.4704 12.7028 6.40775 12.8221 6.29528L13.5039 5.65242C13.773 5.39867 13.773 4.9707 13.5039 4.71695L12.8221 4.07409Z"
            fill="#5D6E82"
          />
        </svg>
      ),
    },
    {
      name: "Deals",
      icon: (
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.10506 4.6593C3.53127 4.79158 3.86532 4.91785 4.10722 5.03811C4.34912 5.15235 4.55647 5.32973 4.72925 5.57024C4.9078 5.81075 4.99707 6.13243 4.99707 6.53529C4.99707 6.8239 4.93084 7.09748 4.79837 7.35603C4.6659 7.60857 4.46143 7.81601 4.18498 7.97835C3.90852 8.13469 3.56295 8.21285 3.14826 8.21285L3.10506 8.21285L3.10506 8.93439L2.8718 8.93439L2.8718 8.20383C2.34192 8.14972 1.90996 7.96633 1.5759 7.65367C1.24185 7.33499 1.05467 6.94716 1.01435 6.49019L1.65366 6.49019C1.68246 6.76077 1.80053 7.01631 2.00787 7.25682C2.22097 7.49733 2.50895 7.64164 2.8718 7.68974L2.8718 5.16438C2.45135 5.03209 2.12018 4.91184 1.87828 4.80361C1.63638 4.68937 1.42904 4.518 1.25625 4.28952C1.08346 4.05502 0.99707 3.73935 0.99707 3.3425C0.99707 3.02383 1.07194 2.74423 1.22169 2.50372C1.37144 2.2572 1.58454 2.06479 1.861 1.92649C2.14322 1.7882 2.47439 1.71905 2.85452 1.71905L2.8718 1.71905L2.8718 0.934387L3.10506 0.934387L3.10506 1.72807C3.61766 1.77016 4.02371 1.93551 4.3232 2.22413C4.6227 2.51274 4.80413 2.85848 4.86748 3.26133L4.21953 3.26133C4.17346 3.02082 4.05539 2.80135 3.86532 2.60293C3.68102 2.40451 3.4276 2.28125 3.10506 2.23315L3.10506 4.6593ZM1.63638 3.31545C1.63638 3.6702 1.74005 3.93777 1.94739 4.11815C2.1605 4.29252 2.46863 4.44886 2.8718 4.58715L2.8718 2.21511L2.85452 2.21511C2.48015 2.21511 2.18354 2.31131 1.96467 2.50372C1.74581 2.69613 1.63638 2.96671 1.63638 3.31545ZM3.13098 7.70778C3.52263 7.70778 3.825 7.59955 4.03811 7.38309C4.25121 7.16062 4.35776 6.88102 4.35776 6.54431C4.35776 6.18354 4.24833 5.90996 4.02947 5.72356C3.81636 5.53115 3.50823 5.37182 3.10506 5.24555L3.10506 7.70778L3.13098 7.70778Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Routes",
      icon: (
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0735056 4.67858L2.58392 0.726419C2.64299 0.637938 2.70206 0.578952 2.80543 0.534711C3.02694 0.44623 3.26322 0.534713 3.38135 0.711676L5.89177 4.67858C6.11328 5.0325 5.80317 5.47491 5.38969 5.37168L4.01634 5.04725V8.99941C5.16818 7.89339 6.7335 7.21504 8.44649 7.18555L8.12161 5.79935C8.03301 5.40118 8.47603 5.07675 8.81567 5.29795L12.7733 7.80492C12.8619 7.8639 12.9209 7.92289 12.9652 8.02612C13.0538 8.24732 12.9652 8.48328 12.788 8.60125L8.81567 11.1082C8.46126 11.3294 8.01824 11.0197 8.12161 10.6068L8.44649 9.23537C5.99514 9.29435 4.01634 11.3147 4.01634 13.7774V14.1903C4.01634 14.3673 3.88343 14.5 3.70622 14.5H2.27382C2.09661 14.5 1.9637 14.3673 1.9637 14.1903V5.04725L0.590356 5.37168C0.162109 5.47491 -0.148002 5.0325 0.0735056 4.67858Z"
            fill="#5D6E82"
          />
        </svg>
      ),
    },
    {
      name: "Direct",
      icon: (
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.5C12 3.125 10.875 2 9.5 2C8.09375 2 7 3.125 7 4.5C7 5.65625 7.75 6.625 8.78125 6.90625C8.75 7.40625 8.65625 7.8125 8.4375 8.0625C7.96875 8.65625 6.90625 8.78125 5.78125 8.875C4.90625 8.9375 3.96875 9.03125 3.25 9.40625V4.90625C4.25 4.59375 5 3.625 5 2.5C5 1.125 3.875 0 2.5 0C1.09375 0 0 1.125 0 2.5C0 3.625 0.71875 4.59375 1.75 4.90625V11.125C0.71875 11.4375 0 12.4062 0 13.5C0 14.9062 1.09375 16 2.5 16C3.875 16 5 14.9062 5 13.5C5 12.4375 4.3125 11.5312 3.375 11.1875C3.46875 11.0312 3.625 10.875 3.84375 10.75C4.34375 10.5 5.125 10.4375 5.90625 10.375C7.25 10.25 8.71875 10.0938 9.625 9C10.0625 8.46875 10.2812 7.75 10.2812 6.875C11.2812 6.5625 12 5.625 12 4.5ZM2.5 2C2.75 2 3 2.25 3 2.5C3 2.78125 2.75 3 2.5 3C2.21875 3 2 2.78125 2 2.5C2 2.25 2.21875 2 2.5 2ZM2.5 14C2.21875 14 2 13.7812 2 13.5C2 13.25 2.21875 13 2.5 13C2.75 13 3 13.25 3 13.5C3 13.7812 2.75 14 2.5 14ZM9.5 4C9.75 4 10 4.25 10 4.5C10 4.78125 9.75 5 9.5 5C9.21875 5 9 4.78125 9 4.5C9 4.25 9.21875 4 9.5 4Z"
            fill="#5D6E82"
          />
        </svg>
      ),
    },
  ];
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Header
            open={open}
            classes={classes}
            handleDrawerOpen={handleDrawerOpen}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <img
                src={DPImage}
                alt=""
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </ListItemIcon>
            <ListItemText primary="Amanda Rock" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {firstMenu.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{text?.icon}</ListItemIcon>
              <ListItemText primary={text?.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondMenu.map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{text?.icon}</ListItemIcon>
              <ListItemText primary={text?.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{marginTop: "75px"}}>{children}</div>
    </div>
  );
}
