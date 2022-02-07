import './App.css';
import { useEffect, useState } from 'react';
import VehicleDetails from './components/VehicleDetails';
import { getApiRequest } from './apiRequests'
import PlanetDetails from './components/PlanetDetails';

const GET_VEHICAL_REQUEST = 'http://swapi.py4e.com/api/vehicles/';

function App() {

  const [vehicleLength, setVehicleLength] = useState(0);
  const [vehicleNextCall, setVehicleNextCall] = useState('');
  const [vehicles, setVehicles] = useState([]);

  const handleSetVehicles = (vehiclesToAdd) => {
    setVehicleNextCall(vehiclesToAdd.next)
    setVehicles([...vehicles, ...vehiclesToAdd.results])
    return vehiclesToAdd
  }

  const getVehicles = ({ url }) => getApiRequest({ url, handleFunction: handleSetVehicles })
  useEffect(() => {
    !vehicles.length && getVehicles({ url: GET_VEHICAL_REQUEST }).then(res => setVehicleLength(res.count));
  }, [])

  useEffect(() => {
    console.log('change in: ', vehicles)
    vehicleNextCall && getVehicles({ url: vehicleNextCall })
  }, [vehicles])

  return (
    <div className="App">
      <h1>Star Wars!</h1>
      <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        <div style={{ width: '65%' }}>
          {(!vehicleNextCall && vehicleLength === vehicles.length) &&
            < VehicleDetails vehicles={vehicles} />
          }
          <br />
          <PlanetDetails style={{ height: '600px', background: 'black' }} />

        </div>

      </div>
    </div>
  );
}

export default App;
