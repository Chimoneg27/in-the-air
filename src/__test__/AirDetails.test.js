import AirDetails from '../components/AirDetails';

describe('AirDetails', () => {
  it('should return an empty array', () => {
    const cityId = 'invalidCityId';
    const cityData = [
      {
        id: 'exampleCityId',
        data: {
          components: {
            CO: '1',
            NO: '2',
          },
        },
      },
    ];

    const updatedComponents = AirDetails(cityId, cityData);
    expect(updatedComponents).toEqual([]);
  });
});
