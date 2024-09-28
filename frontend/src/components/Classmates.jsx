import React, { useState, useEffect } from 'react';
import {
  Box,
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ClassmatesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ClassmateCard = styled(Card)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.25)",
  },
}));

const classmatesData = [
  { id: 1, name: 'Alice', avatarLetter: 'A' },
  { id: 2, name: 'Bob', avatarLetter: 'B' },
  { id: 3, name: 'Charlie', avatarLetter: 'C' }
];

const Classmates = () => {
  const [classmates, setClassmates] = useState(classmatesData);

  useEffect(() => {
    // Fetch classmates from API
  }, []);

  return (
    <ClassmatesContainer>
      <Typography variant="h4" gutterBottom>
        Classmates
      </Typography>
      <Divider />
      {classmates.map(classmate => (
        <ClassmateCard key={classmate.id}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{classmate.avatarLetter}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={classmate.name} />
              </ListItem>
            </List>
          </CardContent>
        </ClassmateCard>
      ))}
    </ClassmatesContainer>
  );
};

export default Classmates;
