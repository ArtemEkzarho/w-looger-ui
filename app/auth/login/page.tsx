'use client';

import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';
import login from './login';

export default function Login() {
  const [{ error }, formAction] = useFormState(login, { error: '' });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2} className="w-full max-w-xs">
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          error={!!error}
          helperText={error}
        ></TextField>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          error={!!error}
          helperText={error}
        ></TextField>
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Signup
        </Link>
      </Stack>
    </form>
  );
}
