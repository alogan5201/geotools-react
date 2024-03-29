// Coworking page sections
import BaseLayout from 'layouts/sections/components/BaseLayout';
// Routes
import Grid from '@mui/material/Grid';

import { Box, Typography } from '@mui/material';
import notFoundImage from 'assets/images/404.png';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

  return (
    <>
      <BaseLayout>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
            textAlign: 'center',
            padding: 1,
          }}
        >
          <img src={notFoundImage} alt="404 Page not found"></img>
          <Typography variant="body1" component="p" color="textSecondary" gutterBottom>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Grid item xs={12} pr={1} mb={2}>
            <Button type="submit" variant="gradient" color="info" onClick={() => navigate('/')}>
              Go to Home Page
            </Button>
          </Grid>
        </Box>
      </BaseLayout>
    </>
  );
}
export default NotFoundPage;
