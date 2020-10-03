import React from "react";
import DocScannerPolicyContents from "./DocScannerPolicyContents";

function DocscannerPolicy() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.headerText}>DOC SCANNER USER POLICY</h2>
        </div>
        <div style={styles.subContainer}>
          <DocScannerPolicyContents></DocScannerPolicyContents>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "80%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e8ffff",
    borderRadius: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {},
  subContainer: {
    border: "2px dashed black",
    flex: 1,
    padding: "20px",
    margin: "20px",
    borderRadius: "20px",
  },
  policyText: {},
};

export default DocscannerPolicy;
