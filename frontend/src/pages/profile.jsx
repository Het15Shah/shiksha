import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  IconButton,
  Chip,
} from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import EditIcon from "@mui/icons-material/Edit";
import SchoolIcon from "@mui/icons-material/School";
import { styled } from "@mui/system";
import { useProfile } from "../context/profile";


const TransitionAvatar = styled(Avatar)({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
  },
});

const GradientBackground = styled(Box)({
	background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)", // Bluish gradient
	borderRadius: "16px 16px 0 0",
	padding: "20px",
	color: "white",
  });

const Profile = () => {
  const { name, email, phoneno, age } = useProfile();

  const courses = [
    { name: "Mathematics", code: "MATH101" },
    { name: "Computer Science", code: "CS202" },
    { name: "Physics", code: "PHY301" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Card elevation={5} sx={{ borderRadius: "16px", overflow: "visible" }}>
       <GradientBackground>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Student Profile
            </Typography>
            <IconButton color="inherit" aria-label="edit profile">
              <EditIcon />
            </IconButton>
          </Box>
		  </GradientBackground>
       

        <CardContent sx={{ mt: -5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <TransitionAvatar
              alt={name}
              src="/path-to-profile-image.jpg"
              sx={{
                width: 150,
                height: 150,
                border: "4px solid white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              email:thanks@gmail.com
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard heading="Age" info={age || "N/A"} icon="cake" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard heading="Contact" info={phoneno || "N/A"} icon="phone" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard heading="Email" info={email} icon="email" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard heading="Major" info="Computer Science" icon="school" />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, display: "flex", alignItems: "center" }}>
              <SchoolIcon sx={{ mr: 1 }} /> Registered Courses
            </Typography>
            <Grid container spacing={2}>
              {courses.map((course) => (
                <Grid item key={course.code}>
                  <Chip
                    label={`${course.name} (${course.code})`}
                    color="primary"
                    variant="outlined"
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;