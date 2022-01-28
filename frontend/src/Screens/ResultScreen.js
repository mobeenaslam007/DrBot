import React from "react";

const ResultScreen = ({ closeFinalResultModal, diseaseDetails }) => {
  console.log(diseaseDetails);
  console.log(diseaseDetails["title"]);
  const onClickHandler = () => closeFinalResultModal();
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255, 20%)",
        backdropFilter: "blur(40px)",
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "2",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "10px",
        border: "1px solid #ffffff",
        padding: "20px",
        width: "50%",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={onClickHandler}
      >
        <img src="/icons/cross-for-modal-invite.webp" alt="" />
      </div>
      {!Array.isArray(diseaseDetails.title) ? (
        <div>
          <h4>
            Title: <i>{diseaseDetails.title}</i>
          </h4>
          <p style={{ backgroundColor: "white" }} className="m-1 p-2">
            <i>{diseaseDetails.description}</i>
          </p>
          <h5 className="mt-3">Precautions:</h5>
          <p style={{ backgroundColor: "white" }} className="m-1 p-2">
            {diseaseDetails.precautions.map((value, key) => (
              <li key={key}>{value}</li>
            ))}
          </p>
        </div>
      ) : (
        <div>
          <h4>
            Title: <i>{diseaseDetails.title[0]}</i> {" OR "}{" "}
            <i>{diseaseDetails.title[1]}</i>
          </h4>
          <p style={{ backgroundColor: "white" }} className="m-1 p-2">
            <i>{diseaseDetails.description[0]}</i> {" \n "}{" "}
            <i>{diseaseDetails.description[1]}</i>
          </p>
          <h5 className="mt-3">Precautions:</h5>
          <p style={{ backgroundColor: "white" }} className="m-1 p-2">
            {diseaseDetails.precautions.map((value, key) => (
              <li key={key}>{value}</li>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultScreen;
