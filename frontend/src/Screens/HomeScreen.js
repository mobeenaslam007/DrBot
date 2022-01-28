import React from "react";
import { Button } from "react-bootstrap";
import ProductCarousel from "../Components/ProductCarousel";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/disease");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "400px",
          marginTop: "10px",
          height: "50%",
          width: "50%",
        }}
      >
        <ProductCarousel />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4 rowC"
      >
        <img
          src="https://i.postimg.cc/m2StfH1K/chatbot.png"
          width="250px"
          alt=""
          className="me-5"
        />

        <div
          style={{ width: "40%", height: "100", color: "white" }}
          className="mt-4"
        >
          <h1 style={{ color: "white" }}>Introduction</h1>
          <p>
            Our chatbot offers a personalized approach to every user; in ways
            that can be more convenient, and efficient that they surpass human
            capabilities. Dr. Bot will help you to diagnose your disease through
            gathering your symptoms. Additionally it will give you tips about
            precautionary measure. Recommendation to doctor and tests is also
            included along with alarming health condition indication.
          </p>
          <div>
            <Button variant="primary" onClick={clickHandler}>
              Check Your Disease
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
