import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

/*
{
    title: "React Developer",
    description:
        "Looking for a Front end Developer who has experience with React and Material UI",
    avatar: "/static/images/avatar/1.jpg",
}

*/

const JobSummaryCard = ({ title, description, avatar }) => {
  return (
    <ListItem alignItems="flex-start" sx={{ height: "100%" }}>
      <ListItemAvatar sx={{ paddingTop: "0.4rem" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        sx={{
          maxWidth: "18rem",
          overflow: "hidden",
          whiteSpace: "nowrap",

        }}
        primary="Company Name"
        secondary={
          <React.Fragment>
            <p
              className="d-block m-0"
              component="span"
              variant="body2"
              color="text.primary"
            >
              {title}
            </p>
            <p
              sx={{
                display: "inline",
              }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {/* {description} */}
              sbvhfbrhfbrhfbrfrjnjrgnjrngkgrkmkmkmkmkk
            </p>
          </React.Fragment>
        }
      />
    </ListItem>
    // </Container>
  );
};

export default JobSummaryCard;
