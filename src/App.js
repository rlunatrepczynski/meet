import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = usestate(32);

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
}
export default App;
