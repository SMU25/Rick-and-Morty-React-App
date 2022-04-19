// import ContentLoader from "react-content-loader";

function Card({ name, status, species, image, loading }) {
  const titleImg = `
        ${name} 
        Status: ${status}
        Species: ${species}`;
  return (
    <div className="characters__item">
      {loading ? (
        {
          /* <ContentLoader
          speed={2}
          width={222}
          height={346.8}
          viewBox="0 0 222 346.8"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="110" cy="110" r="110" />
          <rect x="76" y="264" rx="0" ry="0" width="70" height="19" />
          <rect x="40" y="232" rx="0" ry="0" width="142" height="22" />
          <rect x="61" y="294" rx="0" ry="0" width="100" height="19" />
        </ContentLoader> */
        }
      ) : (
        <>
          <img
            className="characters__item-avatar"
            src={image}
            alt="img"
            title={titleImg}
          />
          <div className="characters__item-info">
            <h3 className="characters__item-name">{name}</h3>
            <div className="characters__item-status">{status}</div>
            <div className="characters__item-species">{species}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
