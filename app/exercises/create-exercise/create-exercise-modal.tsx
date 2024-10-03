'use client';

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FormResponse } from '../../common/interfaces/form-response.interface';
import { useState } from 'react';
import createExercise from '../actions/create-exercise';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { boxStyles, fileInputStyles } from './styles';

interface CreateExerciseModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateExerciseModal({
  open,
  handleClose,
}: CreateExerciseModalProps) {
  const [response, setResponse] = useState<FormResponse>();
  const [fileName, setFileName] = useState('');

  const onClose = () => {
    setResponse(undefined);
    handleClose();
    setFileName('');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={boxStyles}>
        <form
          className="w-full max-w-xs"
          action={async (formData) => {
            const response = await createExercise(formData);
            setResponse(response);

            if (!response.error) {
              onClose();
            }
          }}
        >
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            ></TextField>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            ></TextField>
            <TextField
              name="weight"
              label="Weight"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            ></TextField>
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
            >
              Upload File
              <input
                type="file"
                name="image"
                style={fileInputStyles}
                onChange={(e) =>
                  e.target.files && setFileName(e.target.files[0].name)
                }
              ></input>
            </Button>
            <Typography>{fileName}</Typography>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
