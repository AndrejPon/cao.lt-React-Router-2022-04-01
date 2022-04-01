import { useEffect, useState } from 'react';

const dataUrl = 'https://believed-shore-vanadium.glitch.me';

function Table() {
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
  function handleClick() {
    const confirmDelete = window.confirm('Confirm to delete?');
    if (confirmDelete) {
      getData();
    }
  }
  return (
    <div>
      {dataArr.length === 0 && <h3>Loading...</h3>}
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>People</th>
            <th>Price</th>
          </tr>
        </thead>
        {dataArr.map((dataObj) => (
          <tbody key={dataObj.id}>
            <tr>
              <td onClick={handleClick}>{dataObj.id}</td>
              <td onClick={handleClick}>{dataObj.people}</td>
              <td onClick={handleClick}>{dataObj.price}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
