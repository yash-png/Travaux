import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const Popular = ({ location, skills, work }) => {
  return (
    <>
      {" "}
      <p className="text-muted mt-2 mb-0">POPULAR</p>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          <List className="py-1 px-4">
            <ListItem className="p-0">
              <ListItemText className="w-50" primary={location} />
            </ListItem>
            {/* first listitem closed */}
            <ListItem className="p-0">
              <ListItemText className="w-50" primary="Javascript" />
            </ListItem>
          </List>
        </Grid>
      </Box>
    </>
  );
};

export default Popular;
