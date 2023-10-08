const AirDetails = (id, cityData) => {
  const cityArray = cityData.filter((city) => city.id === id);
  if (cityArray.length > 0) {
    const components = Object.values(cityArray[0].data.components);
    const parsedComponents = [
      { dataname: 'CO', data: '' },
      { dataname: 'NO', data: '' },
      { dataname: 'NO2', data: '' },
      { dataname: 'O3', data: '' },
      { dataname: 'SO2', data: '' },
      { dataname: 'PM2.5', data: '' },
      { dataname: 'PM10', data: '' },
      { dataname: 'NH3', data: '' },
    ];
    const updatedComponents = parsedComponents.map((component, index) => ({
      ...component,
      data: components[index],
    }));
    return updatedComponents;
  }
  return [];
};

export default AirDetails;
