import { useEffect, useState } from 'react';
import SinglePropertyCard from './SinglePropertyCard';

const dataUrl = 'https://radial-reinvented-shoe.glitch.me';

function PropertiesList() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    // console.log('useEffect');
    getData();
  }, []);

  function getData() {
    fetch(dataUrl)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setDataArr(data);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className='properties-container'>
      {dataArr.map((dataObj) => (
        <SinglePropertyCard
          key={dataObj.id}
          image={dataObj.image}
          price={dataObj.price}
          city={dataObj.city}
          desc={dataObj.description}
        />
      ))}
    </div>
  );
}

export default PropertiesList;
