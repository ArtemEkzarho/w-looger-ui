import { get } from '@/app/common/utils/fetch';
import { Exercise } from '../interfaces/exercise.interface';

export default async function getExercise(exerciseId: number) {
  return get<Exercise>(`exercises/${exerciseId}`);
}
