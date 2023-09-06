
// Librerias - React
import React from "react";
//Components
import MainRouter from "./routes/MainRouter";
import MainLayout from "./layout/MainLayout";
// Styles
import styles from "./App.module.scss";


const App  = () => {
  return (
    <MainLayout>
      <MainRouter/>
    </MainLayout>
    
  );
};

export default App;
