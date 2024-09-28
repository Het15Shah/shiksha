import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import CakeIcon from "@mui/icons-material/Cake";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";

const StyledPaper = styled(Paper)({
  padding: "16px",
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  },
});

const IconWrapper = styled(Box)({
  backgroundColor: "#1976d2", // Using a static color instead of theme.palette.primary.main
  borderRadius: "50%",
  padding: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "8px",
  color: "white", // Ensure icon is visible on the blue background
});

const ProfileCard = ({ heading, info, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case "cake":
        return <CakeIcon />;
      case "phone":
        return <PhoneIcon />;
      case "email":
        return <EmailIcon />;
      case "school":
        return <SchoolIcon />;
      default:
        return null;
    }
  };

  return (
    <StyledPaper elevation={2}>
      <IconWrapper>
        {getIcon()}
      </IconWrapper>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
        {heading}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center" }}>
        {info}
      </Typography>
    </StyledPaper>
  );
};

export default ProfileCard;