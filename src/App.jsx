import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

import RouteingPages from "./components/Routing/RoutingPages";

function App() {
  return (
    <>
      <RouteingPages />
    </>
  );
}

export default App;
