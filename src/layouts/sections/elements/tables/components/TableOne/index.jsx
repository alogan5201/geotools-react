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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import Box from "components/Box";
import Badge from "components/Badge";
import MKAvatar from "components/MKAvatar";
import Typography from "components/Typography";

// Material Kit 2 PRO React examples
import Table from "examples/Tables/Table";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Components
function Author({ image, name, email }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <MKAvatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {email}
        </Typography>
      </Box>
    </Box>
  );
}

// Typechecking props for the Author
Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function Role({ job, org }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="caption" fontWeight="medium" color="text">
        {job}
      </Typography>
      <Typography variant="caption" color="secondary">
        {org}
      </Typography>
    </Box>
  );
}

// Typechecking props for the Role
Role.propTypes = {
  job: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
};

function TableOne() {
  const { columns, rows } = {
    columns: [
      { name: "author", align: "left" },
      { name: "function", align: "left" },
      { name: "status", align: "center" },
      { name: "employed", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Role job="Manager" org="Organization" />,
        status: (
          <Badge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Role job="Programator" org="Developer" />,
        status: (
          <Badge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            11/01/19
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Role job="Executive" org="Projects" />,
        status: (
          <Badge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            19/09/17
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Role job="Programator" org="Developer" />,
        status: (
          <Badge variant="contained" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            24/12/08
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
      {
        author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Role job="Manager" org="Executive" />,
        status: (
          <Badge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            04/10/21
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Role job="Programtor" org="Developer" />,
        status: (
          <Badge
            variant="contained"
            badgeContent="offline"
            color="secondary"
            size="xs"
            container
          />
        ),
        employed: (
          <Typography variant="caption" color="secondary" fontWeight="medium">
            14/09/20
          </Typography>
        ),
        action: (
          <Typography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </Typography>
        ),
      },
    ],
  };

  return (
    <Box component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Table columns={columns} rows={rows} />
        </Grid>
      </Container>
    </Box>
  );
}

export default TableOne;
