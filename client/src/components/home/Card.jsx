import React from "react";
// import {Link} from "react-router-dom";
import { Card } from "react-bootstrap";

function HomeCard({ title, text, btnText, link }) {
  const color = title === "For Companies" ? "success" : "outline-success";
  return (
    <Card className="mx-3 p-4 text-center" style={{ width: "25rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title style={{ fontSize: "2rem" }}>{title}</Card.Title>
        <Card.Text style={{ fontSize: "1.2rem" }}>{text}</Card.Text>
        <button
          onClick={() => (window.location = `${link}`)}
          className="px-4 btn btn-success"
        >
          {btnText}
        </button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
