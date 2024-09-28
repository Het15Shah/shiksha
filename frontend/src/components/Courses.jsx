import React, { useState, useEffect } from "react";
import { 
  Grid, 
  Box, 
  Typography, 
  TextField, 
  InputAdornment,
  CircularProgress,
  Fade,
  Button
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ClassroomCard from "./ClassroomCard";
import { useCourses } from "../context/courses";

const Courses = () => {
  const { courses, loading, error } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (courses) {
      setFilteredCourses(
        courses.filter(course => 
          course.coursename.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [courses, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: 2
      }}>
        <Typography variant="h5" color="error">Error loading courses</Typography>
        <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      padding: { xs: 2, sm: 3, md: 4 }, 
      bgcolor: '#f5f5f5', 
      minHeight: '100vh'
    }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#1a237e' }}>
        My Courses
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Search courses"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: '70%' }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          sx={{ height: '100%' }}
        >
          Join Class
        </Button>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Fade in={!loading}>
          <Grid container spacing={3} justifyContent="flex-start">
            {filteredCourses.map((course) => (
              <Grid
                key={course.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ClassroomCard
                  courseName={course.coursename}
                  instructor={course.instructor}
                  avatarLetter={course.profileimageURL}
                />
              </Grid>
            ))}
          </Grid>
        </Fade>
      )}

      {!loading && filteredCourses.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: '#757575' }}>
          No courses found. Try a different search term.
        </Typography>
      )}
    </Box>
  );
};

export default Courses;