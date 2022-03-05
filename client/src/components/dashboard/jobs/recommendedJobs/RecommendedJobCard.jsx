import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CheckIcon from "@mui/icons-material/Check";
/*
{
    title: "React Developer",
    description:
        "Looking for a Front end Developer who has experience with React and Material UI",
    avatar: "/static/images/avatar/1.jpg",
}

*/

const JobSummaryCard = ({ title, description, avatar }) => {
  const [click, setClick] = useState(false);

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
          <>
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
          </>
        }
      />
      <div className="container-fluid my-3 d-flex justify-content-end ">
        <Button variant="contained" color="success" endIcon={<CheckIcon />}>
          Apply
        </Button>
        <Button
          className="mx-4"
          variant="contained"
          color="primary"
          onClick={() => setClick(!click)}
          endIcon={click ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
        >
          Save
        </Button>
      </div>
    </ListItem>
    // </Container>
  );
};

export default JobSummaryCard;
