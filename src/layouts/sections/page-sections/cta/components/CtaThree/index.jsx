/*
=========================================================
* Material Kit 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import Box from "components/Box";
import Button from "components/Button";
import Typography from "components/Typography";

// Images
import bgImage from "assets/images/bg3.jpg";

function CtaThree() {
  return (
    <Box
      display="flex"
      my={24}
      py={6}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8} lg={5}>
            <Typography variant="h5" color="white" fontWeight="bold">
              For being a bright color. For standing out. But the time is now to be okay to be the
              greatest you.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto" }}>
            <Box width="12rem" ml="auto">
              <Button variant="gradient" color="warning" fullWidth sx={{ boxShadow: "none" }}>
                start now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CtaThree;
