import CreateExerciseFab from './exercises/create-exercise/create-exercise-fab';
import Exercises from './exercises/exercises';

export default async function Home() {
  return (
    <>
      <Exercises />
      <CreateExerciseFab />
    </>
  );
}
