import React from "react";
import logo from "../LOGO_512.png";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer} className="imageContainer">
        <img
          style={styles.image}
          src={logo}
          className="image"
          alt="kodecke"
        ></img>
      </div>
      <div style={styles.messageContainer}>
        <div style={styles.message}>contact us at support@kodecke.com</div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    width: "100%",
    borderWidth: "1px",
    height: "100%",
  },
  container: {
    display: "flex",
    height: "100%",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    animation: "logo-pop",
  },
  image: {
    width: "200px",
    height: "200px",
  },
  messageContainer: {
    alignItems: "center",
    bottom: "20px",
    color: "white",
  },
  message: {
    color: "white",
  },
};
export default Home;
