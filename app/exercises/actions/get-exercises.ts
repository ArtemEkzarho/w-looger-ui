'use server';
import { get } from '../../common/utils/fetch';
import { Exercise } from '../interfaces/exercise.interface';

export default async function getExercises() {
  return get<Exercise[]>('exercises', ['exercises']);
}
