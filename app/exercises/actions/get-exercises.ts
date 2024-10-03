'use server';
import { get } from '../../common/utils/fetch';
import { Exercise } from '../interfaces/exercise.interface';

export default async function getExercises(searchParams: {
  [key: string]: string;
}) {
  const queryParams = new URLSearchParams(searchParams);

  const queryString = queryParams.toString()
    ? `?${queryParams.toString()}`
    : '';

  return get<Exercise[]>(`exercises${queryString}`, ['exercises']);
}
