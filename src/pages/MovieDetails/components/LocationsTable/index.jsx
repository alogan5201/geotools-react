// LocationsTable
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {truncateToSixDecimals} from "util/helpers";
import { convertLatLngToAddress, extractCityAndState } from "util/geocoder";
import useStore from "store/mapStore";
import { v4 as uuidv4 } from "uuid";

export default function LocationsTable({ locations }) {
    const updateMarkerData = useStore((state) => state.setMarkerData);

    async function handleRowClick(latitude,longitude) {

    

      if (latitude && longitude) {
        const mapBoxData = await convertLatLngToAddress(latitude, longitude);

        if (mapBoxData && mapBoxData.features.length > 0) {
          let lat = mapBoxData.features[0].geometry.coordinates[1];
          let lng = mapBoxData.features[0].geometry.coordinates[0];

          const cityAndState = extractCityAndState(mapBoxData);
          const city = cityAndState.city ? cityAndState.city : null;
          const state = cityAndState.state ? cityAndState.state : null;

          const address = mapBoxData.features[0].place_name;
          const wikiData = mapBoxData.features[0].properties.wikidata;
          const uid = uuidv4();

          const markerData = [
            {
              id: uid,
              lat: lat,
              lng: lng,
              title: address,
              userLocation: false,
              wikiData: wikiData,
              city: city,
              state: state,
            },
          ];
       
      
          updateMarkerData(markerData);
        } 
      }
    }
if(locations){
 return (
   <TableContainer component={Paper}>
     <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
       <TableHead sx={{ display: "table-header-group" }}>
         <TableRow>
           <TableCell>Address</TableCell>
           <TableCell align="right">Latitude</TableCell>
           <TableCell align="right">Longitude</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {locations.map((location, index) => (
           <TableRow
             onClick={() => handleRowClick(location.lat, location.lng)}
             key={index}
             sx={{
               cursor: "pointer",
               "&:nth-of-type(odd)": { backgroundColor: "#f8f8f8" },
               "&:hover": { backgroundColor: "#eeeeee" },
             }}
           >
             <TableCell component="th" scope="row">
               {location.address}
             </TableCell>
             <TableCell align="right">{truncateToSixDecimals(location.lat)}</TableCell>
             <TableCell align="right">{truncateToSixDecimals(location.lng)}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}
else {return null}
  /* return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead sx={{ display: "table-header-group" }}>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location, index) => (
            <TableRow
              key={index}
              sx={{
                cursor: "pointer",
                "&:nth-of-type(odd)": { backgroundColor: "#f8f8f8" },
                "&:hover": { backgroundColor: "#eeeeee" },
              }}
            >
              <TableCell component="th" scope="row">
                {location.address}
              </TableCell>
              <TableCell align="right">{location.lat}</TableCell>
              <TableCell align="right">{location.lng}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ); */
}