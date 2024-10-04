'use server';
import { get } from '../../common/utils/fetch';
import { Exercise } from '../interfaces/exercise.interface';

export default async function getExercises(searchParams: {
  [key: string]: string;
}) {
  return get<Exercise[]>(
    `exercises`,
    ['exercises'],
    new URLSearchParams(searchParams),
  );
}
