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
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import Box from "components/Box";
import Button from "components/Button";

function ButtonsIconLeft() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button color="info" size="small">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              small
            </Button>
            <Button color="info">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              default
            </Button>
            <Button color="info" size="large">
              <Icon sx={{ mr: 1 }}>favorite</Icon>
              large
            </Button>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}

export default ButtonsIconLeft;
