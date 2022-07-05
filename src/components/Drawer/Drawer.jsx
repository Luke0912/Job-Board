import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const TDrawer = ({ data }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Card className="sx">
          <CardMedia
            component="img"
            height="140"
            image={data.logo}
            alt="company logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Company:{data.company}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Title : {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description : <br />
              {data.desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Job Type: <br />
              {data.type}
            </Typography>
            <br />
            <br />
            <Button variant="contained">Apply</Button>
          </CardContent>
        </Card>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <>
          <Button onClick={toggleDrawer(anchor, true)}>View / Apply</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
};
