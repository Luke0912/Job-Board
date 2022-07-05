import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Applied = ()=>{
    return(
        <>
         <Card className="sx">
            <CardMedia
              component="img"
              height="140"
            //   image={e.logo}
              alt="company logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Company:{e.company} */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Title:{e.title} */}
              </Typography>
            </CardContent>
          </Card>
        </>
    )
}