import getExercises from './actions/get-exercises';
import { Props } from '../page';
import ExercisesGrid from './exercises-grid';

export default async function Exercises({ searchParams }: Props) {
  const exercises = await getExercises(searchParams);

  return <ExercisesGrid exercises={exercises} />;
}
