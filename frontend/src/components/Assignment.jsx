import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

const AssignmentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AssignmentCard = styled(Card)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.25)",
  },
}));

const assignmentsData = [
  { id: 1, title: 'Math Assignment', description: 'Complete exercises 10-20.' },
  { id: 2, title: 'Science Project', description: 'Prepare a presentation on renewable energy.' },
  { id: 3, title: 'History Essay', description: 'Write an essay on World War II.' }
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(assignmentsData);

  useEffect(() => {
    // Fetch assignments from API
  }, []);

  return (
    <AssignmentContainer>
      <Typography variant="h4" gutterBottom>
        Assignments
      </Typography>
      <Divider />
      {assignments.map(assignment => (
        <AssignmentCard key={assignment.id}>
          <CardContent>
            <Typography variant="h6">{assignment.title}</Typography>
            <Typography variant="body2" color="textSecondary">{assignment.description}</Typography>
          </CardContent>
        </AssignmentCard>
      ))}
      <Divider />
      <Box mt={2}>
        <Button variant="contained" color="primary">Add New Assignment</Button>
      </Box>
    </AssignmentContainer>
  );
};

export default Assignments;
