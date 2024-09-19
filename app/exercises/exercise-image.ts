import { API_URL } from '../common/constants/api';

export const getExerciseImage = (exerciseId: number) => {
  return `${API_URL}/images/exercises/${exerciseId}.jpg`;
};
