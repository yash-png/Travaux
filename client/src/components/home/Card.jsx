import React,{useState} from "react";
import { Card, Button } from "react-bootstrap";

function HomeCard({ title, text, link }) {
  const color=title==="For Companies"?  "success" : "outline-success";
  return (
    <Card className="mx-3 p-4 text-center" style={{width:"25rem"}}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title style={{fontSize:"2rem"}}>{title}</Card.Title>
          <Card.Text style={{fontSize:"1.2rem"}}>
            {text}
          </Card.Text>
          <Button variant={color} className="px-4">{link}</Button>
        </Card.Body>
      </Card>
  );
}

export default HomeCard;
