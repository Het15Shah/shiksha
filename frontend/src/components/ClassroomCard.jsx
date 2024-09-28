import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import UpdateIcon from "@mui/icons-material/Update";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  width: 60,
  height: 60,
  fontSize: "1.5rem",
  fontWeight: 600,
  border: `3px solid ${theme.palette.background.paper}`,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const DetailChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.grey[100],
  "& .MuiChip-icon": {
    color: theme.palette.text.secondary,
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    color: theme.palette.primary.dark,
  },
}));

const ClassroomCard = ({ courseName, instructor, avatarLetter, enrolledCount, lastUpdated }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/courses/course-inside");
  };

  return (
    <StyledCard>
      <CardHeader onClick={handleNavigate}>
        <CourseTitle variant="h6">{courseName}</CourseTitle>
      </CardHeader>
      <Divider />
      <CardContent sx={{ padding: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mb: 2 }}>
          <DetailChip
            icon={<PeopleOutlineIcon />}
            label={`${enrolledCount} Enrolled`}
            variant="outlined"
          />
          <DetailChip
            icon={<UpdateIcon />}
            label={`Updated ${lastUpdated}`}
            variant="outlined"
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Tooltip title="View Contacts" arrow>
            <ActionButton>
              <ContactsIcon />
            </ActionButton>
          </Tooltip>
          <Tooltip title="Open Folder" arrow>
            <ActionButton>
              <FolderOpenOutlinedIcon />
            </ActionButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            A course by {instructor}
          </Typography>
          <StyledAvatar>{avatarLetter}</StyledAvatar>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ClassroomCard;