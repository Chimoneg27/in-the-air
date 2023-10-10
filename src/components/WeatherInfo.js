import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AirDetails from './AirDetails';
import AirDetailed from './AirDetailed';
import '../Style/Details.css';

const WeatherInfo = () => {
  const capitalData = useSelector((state) => state.weather.cityData);
  const { id } = useParams();
  const selectCapitalData = capitalData.find((city) => city.id === id);
  const cityName = selectCapitalData ? selectCapitalData.city : '';
  const aqi = AirDetails(id, capitalData);
  console.log(capitalData);
  return (
    <div className="air-details">
      <nav className="details-nav">
        <Link to="/" className="back">
          <span className="arrow">←</span>
          Back
        </Link>
        <h1>{cityName}</h1>
      </nav>
      <header className="intro">
        <h2 className="title">Air Quality</h2>
      </header>
      <section className="conc-header">Concentration in μg/m3</section>
      <section className="pollution-data">
        {aqi.map((component) => (
          <AirDetailed
            key={component.dataname}
            dataname={component.dataname}
            data={component.data}
          />
        ))}
      </section>
    </div>
  );
};

export default WeatherInfo;
