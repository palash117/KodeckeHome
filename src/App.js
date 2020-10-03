import React from 'react';
// import logo from './logo.svg';
import './App.css';
import logo from './LOGO_512.png'

function App() {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <div style={styles.imageContainer} className="imageContainer">
          <img style={styles.image} src={logo} className="image" ></img>
        </div>
        <div style={styles.messageContainer}>
          <div style={styles.message}>
            contact us at support@kodecke.com
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app:{
    width:"100%",
    borderWidth:"1px",
    height:"100%"
  },
  container:{
    display:"flex",
    height:"100%",
    
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
    
  },
  imageContainer:{
    width:"200px",
    height:"200px",
    animation:"logo-pop"
  },
  image:{
    width:"200px",
    height:"200px",
    
  },
  messageContainer:{
    // alignSelf:"flex-start",
    // position:"absolute",
    alignItems:"center",
    bottom:"20px",
    color:"white",
    // borderWidth:"1px",
    // borderColor:"black"
  },
  message:{
    color:"white"
  }
}
export default App;
