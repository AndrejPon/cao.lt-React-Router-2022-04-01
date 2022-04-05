function SinglePropertyCard(props) {
  return (
    <div className='single-property-container'>
      <img className='property-image' src={props.image} alt='property' />
      <h2>${props.price}</h2>
      <p>{props.city}</p>
      <p>{props.desc}</p>
    </div>
  );
}

export default SinglePropertyCard;
