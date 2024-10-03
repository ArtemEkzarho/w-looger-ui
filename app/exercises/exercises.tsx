import Grid from '@mui/material/Grid2';
import getExercises from './actions/get-exercises';
import Exercise from './exercise';
import { Props } from '../page';

export default async function Exercises({ searchParams }: Props) {
  const exercises = await getExercises(searchParams);

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
