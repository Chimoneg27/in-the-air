/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const AirDetailed = ({ dataname, data }) => {
  const parsedName = React.createElement('div', { dangerouslySetInnerHTML: { __html: dataname } });
  return (
    <div className="details">
      <div className="names">
        {parsedName}
      </div>
      <div className="data-component">
        {data}
      </div>
    </div>
  );
};

AirDetailed.propTypes = {
  dataname: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default AirDetailed;
