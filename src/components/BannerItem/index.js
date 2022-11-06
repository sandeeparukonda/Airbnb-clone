import "./index.css";

const BannerItem = (props) => {
  console.log("banner");
  const { bannerDetails } = props;
  const { title, imgUrl } = bannerDetails;
  console.log(bannerDetails);

  return (
    <div className="banner-container">
      <img src={imgUrl} alt="banner" className="banner-image" />
      <div className="title-container">
        <p className="collection">Collection</p>
        <h1 className="title">{title}</h1>
      </div>
      <button className="show-all-button">Show all</button>
    </div>
  );
};

export default BannerItem;
