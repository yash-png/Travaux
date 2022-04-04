import React from "react";
import { Card, Button } from "react-bootstrap";
import WorkIcon from "@mui/icons-material/Work";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const CandidateCard = () => {
  return (
    <>
      <Card
        style={{
          width: "40rem",
          marginBottom: "20px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          fontFamily: "Lato,sans-serif",
        }}
      >
        <Card.Body>
          <div className="d-flex">
            <img
              className="border border-dark"
              src="data:image/png;base64,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"
              height="100px"
              width="100px"
              alt="..."
            />
            <div className="p-3">
              <Card.Title>Bhavesh Sengunthar</Card.Title>
              <Card.Subtitle className="mb-2 text-primary">
                Flutter Developer
              </Card.Subtitle>
            </div>
          </div>
          <hr></hr>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <i>
                  <WorkIcon />
                </i>
                &nbsp;
                <span>
                  <strong>Experience :</strong> Flutter Developer
                </span>
              </li>
              <br></br>
              <li>
                <i>
                  <EngineeringIcon />
                </i>
                &nbsp;
                <span>
                  <strong>Skills :</strong> Flutter Developer
                </span>
              </li>
              <br></br>
              <li>
                <i>
                  <LocationOnIcon />
                </i>
                &nbsp;
                <span>
                  <strong>Location :</strong> Flutter Developer
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
        <div className="container-fluid p-0 mb-3">
          <Button variant="outline-primary" className="mx-2">
            Shortlist
          </Button>
          <Button variant="success" className="px-4 mx-4">
            Hire
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CandidateCard;
