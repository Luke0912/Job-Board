import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Applied = ({ newValue }) => {
  return (
    <>
      {newValue.length !== 0 && (
        <>
          <Card className="sx">
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
