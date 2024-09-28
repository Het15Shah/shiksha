import React from "react";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ClassIcon from "@mui/icons-material/Class";
import Carousel from "../components/Carousel";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
}));

const ColorfulAvatar = styled(Avatar)(({ bgColor }) => ({
  backgroundColor: bgColor,
}));

function Home() {
  const classes = [
    { id: 1, name: "Mathematics 101", teacher: "Dr. Smith", color: "#4285F4" },
    { id: 2, name: "Computer Science 202", teacher: "Prof. Johnson", color: "#0F9D58" },
    { id: 3, name: "Physics 301", teacher: "Dr. Brown", color: "#DB4437" },
  ];

  const assignments = [
    { id: 1, title: "Algebra Quiz", dueDate: "2023-09-15", class: "Mathematics 101" },
    { id: 2, title: "Programming Project", dueDate: "2023-09-20", class: "Computer Science 202" },
    { id: 3, title: "Lab Report", dueDate: "2023-09-18", class: "Physics 301" },
  ];

  const announcements = [
    { id: 1, title: "Welcome to the new semester!", date: "2023-09-01" },
    { id: 2, title: "Virtual office hours schedule", date: "2023-09-05" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    {/* <Carousel /> */}
          <Typography variant="h4" gutterBottom component="h1" sx={{ fontWeight: "bold", mb: 4 }}>
        Welcome to Your Classes
      </Typography>

      <Grid container spacing={4}>
        {/* Classes Section */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardHeader title="Your Classes" />
            <CardContent>
              <List>
                {classes.map((cls) => (
                  <React.Fragment key={cls.id}>
                    <ListItem button>
                      <ListItemAvatar>
                        <ColorfulAvatar bgColor={cls.color}>
                          <ClassIcon />
                        </ColorfulAvatar>
                      </ListItemAvatar>
                      <ListItemText primary={cls.name} secondary={cls.teacher} />
                    </ListItem>
                    {cls.id !== classes.length && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Upcoming Assignments Section */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardHeader title="Upcoming Assignments" />
            <CardContent>
              <List>
                {assignments.map((assignment) => (
                  <ListItem key={assignment.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={assignment.title}
                      secondary={`Due: ${assignment.dueDate} - ${assignment.class}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Announcements Section */}
        <Grid item xs={12}>
          <StyledCard>
            <CardHeader title="Recent Announcements" />
            <CardContent>
              <List>
                {announcements.map((announcement) => (
                  <ListItem key={announcement.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <AnnouncementIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={announcement.title}
                      secondary={`Posted on: ${announcement.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;