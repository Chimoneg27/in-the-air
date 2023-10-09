import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AirDetails from './AirDetails';
import AirDetailed from './AirDetailed';

const WeatherInfo = () => {
  const cityData = useSelector((state) => state.weather.cityData);
  const { id } = useParams();
  const selectCapitalData = cityData.find((city) => city.id === id);
  const cityName = selectCapitalData.city ? selectCapitalData.city : '';
  const air = AirDetails(id, cityData);

  return (
    <div className="air-details">
      <nav className="details-nav">
        <Link to="/" className="back">
          <span className="arrow">←</span>
          Back
        </Link>
        <h2>{cityName}</h2>
      </nav>
      <header className="intro">
        <h1 className="title">Air Quality</h1>
      </header>
      <section className="conc-header">Concentration in μg/m3</section>
      <section className="pollution-data">
        {air.map((component) => (
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
