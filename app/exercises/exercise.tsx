import { Card, Stack, Typography } from '@mui/material';
import { Exercise as IExercise } from './interfaces/exercise.interface';
import Image from 'next/image';
import { API_URL } from '../common/constants/api';

interface ExerciseProps {
  exercise: IExercise;
}

export default function Exercise({ exercise }: ExerciseProps) {
  console.log(exercise);
  return (
    <Card className="p-4">
      <Stack gap={1}>
        <Typography variant="h6">{exercise.name}</Typography>
        {exercise.imageExist && (
          <Image
            src={`${API_URL}/exercises/${exercise.id}.jpg`}
            width="0"
            height="0"
            className="w-full h-auto"
            sizes="100vw"
            alt="Picture of the exercise"
          />
        )}
        <Typography>{exercise.description}</Typography>
        <Typography variant="h3">{exercise.weight}kg</Typography>
      </Stack>
    </Card>
  );
}
