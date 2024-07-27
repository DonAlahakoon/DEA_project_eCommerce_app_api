import { library } from "@fortawesome/fontawesome-svg-core";
import Card from "./components/card.jsx";
import SideBar from "./components/sideBar.jsx";

import { faAngleRight } from "./configs/config.jsx";
library.add(faAngleRight);

function App() {
  return <SideBar />;
}

export default App;
