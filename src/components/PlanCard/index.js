import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";

const PlanCard = (props) => {
  const { planDetails } = props;
  const { title, country, imgUrl, rating, noOfRatings, cost } = planDetails;

  return (
    <li className="plan-item">
      <img src={imgUrl} alt="plan" className="image" />
      <div className="first-line">
        <p className="rating">
          <span>
            <AiFillStar />
          </span>
          {rating}
        </p>

        <p className="no-of-ratings">({noOfRatings})</p>
        <p className="dot">.</p>

        <p className="country">{country}</p>
      </div>
      <p>{title}</p>
      <p className="cost">
        <span className="from-span">
          From <FaRupeeSign />
          {cost}
        </span>
        /person
      </p>
    </li>
  );
};
export default PlanCard;
