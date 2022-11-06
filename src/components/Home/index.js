import { Component } from "react";
import Slider from "react-slick";
import { AiOutlineRight } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import Header from "../Header";
import PlanCard from "../PlanCard";
import BannerItem from "../BannerItem";

import "./index.css";

const bannerDetails = [
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667663504/a-1_i9e08x.jpg",
    title: "Most popular around the world",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667663505/a2_opbpg3.jpg",
    title: "Great for team building",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667663515/a3_o6blsq.png",
    title: "Fun for the family",
  },
];

const plansListDetails = [
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664656/tripDetails05_z9d9o5.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "4.99",
    noOfRatings: "153",
    cost: "1,456",
    country: "USA",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664653/tripDetails01_tm0edb.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "5.0",
    noOfRatings: "53",
    cost: "12,156",
    country: "Spain",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664641/tripDetails02_k4lmsa.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "4.0",
    noOfRatings: "13",
    cost: "3,656",
    country: "Korea",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664644/tripDetails06_ccddtb.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "3.0",
    noOfRatings: "113",
    cost: "6,446",
    country: "Mexico",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664653/tripDetails01_tm0edb.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "4.94",
    noOfRatings: "343",
    cost: "1,496",
    country: "USA",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664655/tripDetails08_uss8lq.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "3.59",
    noOfRatings: "3",
    cost: "8,456",
    country: "Italy",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664655/tripDetails07_fmllrh.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "2.29",
    noOfRatings: "34",
    cost: "9,356",
    country: "India",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664656/tripDetails05_z9d9o5.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "1.29",
    noOfRatings: "54",
    cost: "1,456",
    country: "Srilanka",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664659/tripDetails12_jw8ga3.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "2.49",
    noOfRatings: "323",
    cost: "5,453",
    country: "Spain",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664660/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3_yfosgo.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "3.59",
    noOfRatings: "153",
    cost: "5,456",
    country: "England",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664661/tripDetails09_mhwmtx.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "4.59",
    noOfRatings: "11",
    cost: "3,456",
    country: "Netherlands",
  },
  {
    id: uuid(),
    imgUrl:
      "https://res.cloudinary.com/dftcpr6nl/image/upload/v1667664662/tripDetails11_rflm8f.jpg",
    title: "Plan The Perfect New York Vacation",
    rating: "4.3",
    noOfRatings: "53",
    cost: "1,457",
    country: "Australia",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const planSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class Home extends Component {
  renderBannerItems = () => {
    console.log("banner");

    return (
      <div>
        <div className="banner-header">
          <h1 className="banner-heading">New this week</h1>
          <AiOutlineRight className="right-arrow" />
        </div>
        <Slider {...settings}>
          {bannerDetails.map((eachBanner) => (
            <BannerItem
              bannerDetails={eachBanner}
              key={eachBanner.id}
              className="banner"
            />
          ))}
        </Slider>
      </div>
    );
  };

  renderPlansListView = () => {
    console.log("fd");
    return (
      <div className="plans-list-container">
        <div className="plans-header">
          <h1 className="plans-heading">
            Plan a trip with help from local Hosts around the world
          </h1>
          <p className="show-all">Show(12)</p>
          <AiOutlineRight className="right-arrow" />
        </div>
        <Slider {...planSettings}>
          {plansListDetails.map((eachPlan) => (
            <PlanCard planDetails={eachPlan} />
          ))}
        </Slider>
      </div>
    );
  };

  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="slick-banner-container">{this.renderBannerItems()}</div>
        <div>
          <FiltersSection />
        </div>
        <div className="slick-container">{this.renderPlansListView()}</div>
      </div>
    );
  }
}

export default Home;
