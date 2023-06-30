import { useEffect } from "react";
import Wrapper from "./Wrapper";
import UseObjectState from "./UseObjectState";
import WhatChanged from "./WhatChanged";
import useStore from "store/mapStore";
import BasicList from "./BasicList";
import PassingFunction from "./PassingFunction";
import ConditionalCss from "./ConditionalCss";
import LocalStorage from "./LocalStorage";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import BasicTransition from "./BasicTransition";
import PopupMarker from './PopupMarker'
import TestBookmarkTable from "./TestBookmarkTable";
function Sandbox() {
  const allObjects = useStore((state) => state);
  const testData = useStore((state) => state.testData);
  useEffect(() => {}, [allObjects]);
  return (
    <div>
  <TestBookmarkTable/>
      <Wrapper
        children={<BasicList data={allObjects ? allObjects : null} />}
        name="Zustand State"
      />

      {/*      <Wrapper
        children={<WhatChanged data={testData ? testData : null} />}
        name="What Changed"
      />
   
      <Controls /> */}
    </div>
  );
}
export default Sandbox;
