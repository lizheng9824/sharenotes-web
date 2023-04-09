import { Button, Container, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";

export default function NoteDetail() {
  return (
    <Container>
      <Box>
        <TextField
          label="Title"
          type="text"
          variant="outlined"
          fullWidth
          required
        />
      </Box>
      <Box paddingTop={2}>
        <TextField
          label="Content"
          variant="outlined"
          multiline
          minRows={6}
          fullWidth
          required
        />
      </Box>
      <Grid paddingTop={2} container justifyContent="flex-end">
        <Button variant="contained">Save</Button>
      </Grid>
    </Container>
  );
}
