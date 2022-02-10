import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

/*
{
    title: "React Developer",
    description:
        "Looking for a Front end Developer who has experience with React and Material UI",
    avatar: "/static/images/avatar/1.jpg",
}

*/

const Jobcards = ({title, description,avatar}) => {
return (
  <ListItem alignItems="flex-start" className="">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary="Company Name"
      secondary={
        <React.Fragment>
          <Link to="/jobs/recommended/job-details"
            className="d-block"
            component="span"
            variant="body2"
            color="text.primary"
          >
            {title}
          </Link>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {description}
          </Typography>

        </React.Fragment>
      }
    />
  </ListItem>
);
};

export default Jobcards;
