function Card({ name, status, species, image }) {
  return (
    <div className="characters__item">
      <img
        className="characters__item-avatar"
        src={image}
        alt="img"
        title={`
        ${name} 
        Status: ${status}
        Species: ${species}`}
      />
      <div className="characters__item-info">
        <h3 className="characters__item-name">{name}</h3>
        <div className="characters__item-status">{status}</div>
        <div className="characters__item-species">{species}</div>
      </div>
    </div>
  );
}

export default Card;
