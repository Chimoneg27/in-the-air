/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const Capitals = ({ city, aqi }) => {
  let status = '';

  if (aqi === 1) {
    status = 'Good';
  } else if (aqi === 2) {
    status = 'Fair';
  } else if (aqi === 3) {
    status = 'Moderate';
  } else if (aqi === 4) {
    status = 'Poor';
  } else if (aqi === 5) {
    status = 'Very Poor';
  }

  const statusClassName = status.toLowerCase().replace(' ', '-');

  return (
    <div className="capitals">
      <h2>{city}</h2>
      <div className="air-status">
        <span className="quality">Air Quality:</span>
        <span className={`status ${statusClassName}`}>{status}</span>
      </div>
      <div className="index">
        <span className="quality-header">Quality Index:</span>
        <span className={`status ${statusClassName}`}>{aqi}</span>
      </div>
    </div>
  );
};

Capitals.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};

export default Capitals;
