import { TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { IconButton, Typography, Box, Card } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../assets/styles/style.css";

interface TimeLineType {
  division: string;
  time: string;
  date: string;
}

const Home = () => {
  const [timeline, setTimeline] = useState<TimeLineType[]>([]);

  function getCities() {
    axios
      .get("http://localhost:3000/Cities")
      .then((res) => {
        setTimeline(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCities();
  }, []);

  return (
    <Card
      sx={{ margin: "0 auto", boxShadow: "none", mt: 1, }}
      className="Cardbody"
    >
      <Timeline>
        {timeline.map((timelineData, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator sx={{color: "ButtonHighlight"}}>
              <TimelineDot sx={{color: "ButtonHighlight"}}>
                <LocationOnIcon color="error"/>
              </TimelineDot>
              <TimelineConnector sx={{ height: "40px" }} />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 6
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <Typography>{timelineData.date}</Typography>
                {/* <Typography>{timelineData.time}</Typography> */}
                <Typography variant="body2">
                  Visit Type: <b>{timelineData.division}</b>
                </Typography>
              </Box>
              <IconButton
                aria-label="View"
                size="large"
                color="secondary"
                sx={{ ml: 2 }}
              >
                <VisibilityIcon />
                <Typography sx={{ ml: 1 }}>View</Typography>
              </IconButton>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
};

export default Home;
