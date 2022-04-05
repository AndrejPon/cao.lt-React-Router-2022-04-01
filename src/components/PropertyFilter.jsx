const citiesData = [
  {
    id: 1,
    name: 'Vilnius',
  },
  {
    id: 2,
    name: 'Kaunas',
  },
  {
    id: 3,
    name: 'Klaipėda',
  },
];

function PropertyFilter() {
  return (
    <div>
      {citiesData.map((cObj) => (
        <button key={cObj.id} className='property-btn'>
          {cObj.name}
        </button>
      ))}
    </div>
  );
}
export default PropertyFilter;
