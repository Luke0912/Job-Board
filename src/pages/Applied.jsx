// import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Applied = ({ newValue }) => {
  // const [newVal, setNewVal] = useState([]);

  // const value = { ...appliedJobs };

  // const nValue = { ...value, value };

  // useEffect(() => {
  //   setNewVal(nValue);
  // },[]);
  // console.log(nValue);

  // useEffect(() => {
  //   setNewVal(appliedJobs);
  // }, [appliedJobs]);

  return (
    <>
      {newValue.length !== 0 && (
        <>
          {/* {newVal.map((newValue) => ( */}
          <Card className="sx" key={newValue.id}>
            <CardMedia
              component="img"
              height="140"
              image={newValue.logo}
              alt="company logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company:{newValue.company}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Title:{newValue.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description:{newValue.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type:{newValue.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status:Applied
              </Typography>
            </CardContent>
          </Card>
          {/* ))} */}
        </>
      )}
      {newValue.length === 0 && (
        <>
          <div>
            <h3>You have not Applied for any job</h3>
          </div>
        </>
      )}
    </>
  );
};
