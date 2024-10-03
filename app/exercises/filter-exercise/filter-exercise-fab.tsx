'use client';

import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function FilterExerciseFab() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFavorite = searchParams.get('favorite') === 'true';

  const createQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get('favorite') !== 'true') {
        params.set(name, 'true');
      } else {
        params.delete(name);
      }

      return `?${params.toString()}`;
    },
    [searchParams],
  );

  return (
    <div className="absolute right-10 top-24">
      <Fab
        color={isFavorite ? 'warning' : 'info'}
        onClick={() => {
          router.push(pathname + createQueryString('favorite'));
        }}
      >
        <FavoriteIcon />
      </Fab>
    </div>
  );
}
