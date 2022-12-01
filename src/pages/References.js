import '../App.css';

// A view containing references to all of the assets and data utilized in the project.

function References() {
  return (
    <div className="References flex-center d-flex-column p-3">
        <h1>References</h1>
        <p>Thanks for your interest in the Green Map! Check out the following links for more information about where the map's data comes from.</p>
        <p className="p-1">Wind turbine data courtesy of the <a href="https://eerscmap.usgs.gov/uswtdb/" title="Wind Data">U.S. Wind Turbine Database from the USGS</a></p>
        <p className="p-1">Geothermal facility data courtesy of the <a href="https://www.nrel.gov/gis/geothermal.html" title="Geothermal Data">National Renewable Energy Laboratory</a></p>
        <p className="p-1">Concentrating Solar Power Project data courtesy of the <a href="https://solarpaces.nrel.gov/by-country/US" title="Solar Data">National Renewable Energy Laboratory</a></p>
        <p className="p-1"><a href="https://www.flaticon.com/packs/climate-change-59" title="Climate Change Pack">Climate Change icons created by Freepik - Flaticon</a></p>
        <p className="p-1"><a href="https://www.flaticon.com/free-icons/renewable-energy" title="renewable energy icons">Renewable energy icons created by Freepik - Flaticon</a></p>
    </div>
  );
}

export default References;
