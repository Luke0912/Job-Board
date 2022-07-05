import "./Box.css"

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Jobs } from "../../configs/data";
import { TDrawer } from "../Drawer/Drawer";
import Typography from "@mui/material/Typography";

export const Box = () => {
  return (
    <>
      <div className="Box">
        {Jobs.map((e) => (
          <Card className="sx">
            <CardMedia
              component="img"
              height="140"
              image={e.logo}
              alt="company logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company:{e.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Title:{e.title}
              </Typography>
            </CardContent>
            <CardActions>
              <TDrawer data={e}></TDrawer>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};
