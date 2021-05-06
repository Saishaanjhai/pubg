import React , {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import background from "./abc1.jpg";

export default function Layout(props) {
  const [visible, setVisible] = useState("none")
  const history = useHistory();
  function handleChange(){
    setVisible("block")
  }
  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
    {/* <div style={{backgroundImage:'url("abc1.jpg")'}}> */}
    <div style={{ 
      backgroundImage:`url(${background})`
    }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"rgb(230, 108, 2)"}} className="d-flex justify-content-between">
        < MenuIcon />
          <Typography variant="h6" className="font-weight-bold" color="danger">
            Pubg
          </Typography>
          <div style={{marginLeft:'800px'}}>
          <MailIcon/>
        <NotificationsIcon/>
        <AccountCircle onClick={handleChange}/>
          </div>
          <Button
            style={{display:visible}}
            variant="contained"
            className="font-weight-bold text-capitalize"
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {props.children}
      </div>
    </>
  );
}