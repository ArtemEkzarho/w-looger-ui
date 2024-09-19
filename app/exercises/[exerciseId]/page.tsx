import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import getExercise from './get-exercise';
import Image from 'next/image';
import { getExerciseImage } from '../exercise-image';

interface SingleExerciseProps {
  params: {
    exerciseId: string;
  };
}

export default async function SingleExercise({ params }: SingleExerciseProps) {
  const exercise = await getExercise(+params.exerciseId);

  return (
    <Grid container rowGap={3} marginBottom={'2rem'}>
      {exercise.imageExist && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getExerciseImage(exercise.id)}
            width={0}
            height={0}
            className="w-full md:w-3/4 h-auto"
            sizes="100vw"
            alt="Picture of exercise"
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography>{exercise.name}</Typography>
          <Typography>{exercise.description}</Typography>
          <Typography variant="h4">{exercise.weight}kg</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
