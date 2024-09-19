'use client';

import { Card, CardActionArea, Stack, Typography } from '@mui/material';
import { Exercise as IExercise } from './interfaces/exercise.interface';
import Image from 'next/image';
import { getExerciseImage } from './exercise-image';
import { useRouter } from 'next/navigation';

interface ExerciseProps {
  exercise: IExercise;
}

export default function Exercise({ exercise }: ExerciseProps) {
  const router = useRouter();

  return (
    <CardActionArea onClick={() => router.push(`/exercises/${exercise.id}`)}>
      <Card className="p-4">
        <Stack gap={1}>
          <Typography variant="h6">{exercise.name}</Typography>
          {exercise.imageExist && (
            <Image
              src={getExerciseImage(exercise.id)}
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
    </CardActionArea>
  );
}
