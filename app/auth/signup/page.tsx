'use client';

import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';
import createUser from './create-user';

export default function Signup() {
  const [{ error }, formAction] = useFormState(createUser, { error: '' });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          helperText={error}
          error={!!error}
        ></TextField>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          helperText={error}
          error={!!error}
        ></TextField>
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center">
          Login
        </Link>
      </Stack>
    </form>
  );
}
