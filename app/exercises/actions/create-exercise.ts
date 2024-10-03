'use server';

import { revalidateTag } from 'next/cache';
import { getHeaders, post } from '../../common/utils/fetch';
import { API_URL } from '@/app/common/constants/api';

export default async function createExercise(formData: FormData) {
  const response = await post('exercises', formData);

  const exerciseImage = formData.get('image');

  if (exerciseImage instanceof File && !response.error) {
    await uploadExerciseImage(response.data.id, exerciseImage);
  }

  revalidateTag('exercises');

  return response;
}

async function uploadExerciseImage(exerciseId: number, file: File) {
  const formData = new FormData();
  formData.append('image', file);
  await fetch(`${API_URL}/exercises/${exerciseId}/image`, {
    body: formData,
    method: 'POST',
    headers: getHeaders(),
  });
}
