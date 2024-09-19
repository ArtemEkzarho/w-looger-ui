import Grid from '@mui/material/Grid2';
import getExercises from './actions/get-exercises';
import Exercise from './exercise';

export default async function Exercises() {
  const exercises = await getExercises();

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
