import CreateExerciseFab from './exercises/create-exercise/create-exercise-fab';
import Exercises from './exercises/exercises';
import FilterExerciseFab from './exercises/filter-exercise/filter-exercise-fab';

export interface Props {
  searchParams: {
    favorite?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  return (
    <>
      <FilterExerciseFab />
      <Exercises searchParams={searchParams} />
      <CreateExerciseFab />
    </>
  );
}
