import { Component } from "react";
import Slider from "react-slick";
import "./index.css";

const filtersList = [
  "Great for groups",
  "Family-friendly",
  "Animals",
  "Arts & writing",
  "Baking",
  "Cooking",
  "Dance",
  "Drinks",
];

class FiltersSection extends Component {
  render() {
    return (
      <div className="filters-container">
        <ul className="left-filters">
          <li>
            <button className="left-filter-button">Dates</button>
          </li>
          <li>
            <button className="left-filter-button">Group Size</button>
          </li>
          <li>
            <button className="left-filter-button">More Filters</button>
          </li>
        </ul>
        <div className="vl" />
        <ul className="right-filters">
          {filtersList.map((eachItem) => (
            <li>
              <button className="right-filter-button">{eachItem}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FiltersSection;
