import React from "react";
import "./Main.css";
import { Greeting } from "../../atoms";
import { Card, Wrapper } from "../../molecules";
const Main = () => {
  return (
    <div>
      <div className="Content-Wrapper">
        <Card
          name="Welcome"
          desc="Dapatkan panduan praktis mengenai pemrograman dengan metode studi kasus pengembangan aplikasi!"
        >
          <Greeting />
        </Card>
        <Wrapper />
      </div>
    </div>
  );
};

export default Main;
