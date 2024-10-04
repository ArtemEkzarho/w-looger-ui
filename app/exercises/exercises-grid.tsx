'use client';

import Grid from '@mui/material/Grid2';
import { Exercise as IExercise } from './interfaces/exercise.interface';
import Exercise from './exercise';
import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { API_URL } from '../common/constants/api';
import revalidateExercises from './actions/revalidate-exercises';
import getAuthentication from '../auth/actions/get-authentication';

interface Props {
  exercises: IExercise[];
}

export default function ExercisesGrid({ exercises }: Props) {
  useEffect(() => {
    let socket: Socket;

    const createSocket = async () => {
      socket = io(API_URL, {
        auth: {
          Authentication: await getAuthentication(),
        },
      });

      socket.on('exerciseUpdated', () => {
        revalidateExercises();
      });
    };

    createSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <Grid container spacing={3}>
      {exercises.map((exercise) => (
        <Grid key={exercise.id} size={{ sm: 6, lg: 4, xs: 12 }}>
          <Exercise exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );
}
