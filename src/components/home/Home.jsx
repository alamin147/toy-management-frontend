import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import TabToys from "./TabToys";

const Home = () => {
  document.title = "Wonder Spark Toy";
  const [activeTab, setActiveTab] = useState("");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch(`https://wonder-eight.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => setAllToys(result));
  }, [activeTab]);

  return (
    <div>
      <section className="position-relative imgBG text-black">
        <div className="position-absolute top-50 bg-info-subtle bg-info bg-gradient py-4 pe-4 rounded rounded-3">
          <h1 className="fw-bold ms-5">Welcome to our toy store</h1>
          <p className="ms-5">
            Wonder Spark is an gem of a toy shop. explore the huge collection of
            toys having smaller to bigger size.
          </p>
          <Link to="/allToysShop">
            {" "}
            <button type="button" className="ms-5 btn btn-light">
              Explore Our Toys
            </button>
          </Link>
        </div>
      </section>

      {/* services section */}
      <div className="">
        <h2 className="pt-5 mb-4 text-center">Our Services</h2>
        <div className="container mx-auto row row-cols-1 row-cols-md-3 text-center mb-5">
          <div className="col">
            <div className="">
              <span className="">
                <img
                  src="https://assets.nicepagecdn.com/ea042681/4933451/images/819873.png"
                  alt=""
                />
              </span>
              <h3 className="">Free Shipping</h3>
              <p className="">Free home delivery</p>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  src="https://assets.nicepagecdn.com/ea042681/4933451/images/1067566.png"
                  alt=""
                />
              </span>
              <h3 className="">24/7 Support</h3>
              <p className="">We support our customers 24/7 hour</p>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  src="https://assets.nicepagecdn.com/ea042681/4933451/images/3172183.png"
                  alt=""
                />
              </span>
              <h3 className="">Quality</h3>
              <p className="">We have best quality toys</p>
            </div>
          </div>
        </div>
      </div>

      {/* gallery section */}
      <h2 className="mt-5 mb-4 text-center">Our Stocks</h2>
      <div>
        <div
          data-aos="fade-up"
          className="container mx-auto row row-cols-1 row-cols-md-3 text-center mb-5"
        >
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as1.ftcdn.net/v2/jpg/00/54/91/68/1000_F_54916831_lvFmpkYxbrzRTmi6rUzRB7NTGg7kFeiq.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Trucks</h3>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as2.ftcdn.net/v2/jpg/01/77/54/87/1000_F_177548745_RoP77sEX2EHAnb7gjiaApzutefx39P6R.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Monster car</h3>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as1.ftcdn.net/v2/jpg/00/65/12/52/1000_F_65125261_t63m9XWeSjFjkm9XCGn5x1ZWyDi9E2my.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Car</h3>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as2.ftcdn.net/v2/jpg/03/20/58/29/1000_F_320582965_azp4iQjUMPvsxE21HAFEBAgETPMMJ1Yk.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Sports car</h3>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as1.ftcdn.net/v2/jpg/00/82/31/68/1000_F_82316800_SwW19ngt6erS2aVsEZbaxrwFs3q83KKM.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Fire Trucks</h3>
            </div>
          </div>
          <div className="col">
            <div className="">
              <span className="">
                <img
                  className="img-fluid"
                  src="https://as1.ftcdn.net/v2/jpg/00/82/26/12/1000_F_82261249_bJe0ElDLCO5OH3jZPBNvsIw2ijW2Mnvn.jpg"
                  alt=""
                />
              </span>
              <h3 className="">Police cars</h3>
            </div>
          </div>
        </div>
      </div>

      {/* shop */}
      <h2 className="mt-5 text-center mb-4">Shop By Category</h2>
      <div className="mb-5">
        <div className="text-center container mx-auto">
          <div className="d-flex justify-content-center align-items-center g-5 gap-5">
            <div
              onClick={() => handleTab("car")}
              className={`btn-primary btn${
                activeTab == "car"
                  ? " bg-info text-white border border-none"
                  : ""
              } py-2 px-4 rounded rounded-5`}
            >
              Car
            </div>
            <div
              onClick={() => handleTab("truck")}
              className={`btn-primary btn${
                activeTab == "truck"
                  ? " bg-info text-white border border-none"
                  : ""
              } py-2 px-4 rounded rounded-5`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTab("jeep")}
              className={`btn-primary btn ${
                activeTab == "jeep"
                  ? " bg-info text-white border border-none"
                  : ""
              } py-2 px-4 rounded rounded-5`}
            >
              Jeep
            </div>
          </div>
        </div>
      </div>

      {/* all toys show */}
      <div
        data-aos="fade-up"
        className="container mb-5 mx-auto row row-cols-1 row-cols-md-3 g-3"
      >
        {allToys.map((toy) => {
          return <TabToys key={toy._id} toys={toy}></TabToys>;
        })}
      </div>

      {/* section */}
      <h2 className="pt-5 mb-4 text-center">Our Customers</h2>
      <div
        data-aos="fade-up"
        className="container row row-cols-1 row-cols-md-3 g-4 mx-auto mb-5 text-center"
      >
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contenteditable="false">
            Wonder Spark is an absolute gem of a toy shop! The moment you walk
            in, you're greeted by a magical atmosphere that ignites the
            imagination. The selection of toys is truly remarkable. The staff is
            incredibly knowledgeable and friendly, making the shopping
            experience a delight. Highly recommended!
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contenteditable="false"
          >
            Martha Stewart
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contenteditable="false"
          >
            Businessman - New York
          </small>
        </div>
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar4.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contenteditable="false">
            I can't say enough positive things about Wonder Spark! This toy shop
            is a haven for both kids and adults. The moment you step inside. The
            quality of the toys is exceptional, and I appreciate the emphasis on
            sustainability and eco-friendly options.{" "}
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contenteditable="false"
          >
            Arian Menage
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contenteditable="false"
          >
            Recording Artist - Los Angeles
          </small>
        </div>
        <div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
            className="wpx-100 img-round mgb-20"
            title=""
            alt=""
            data-edit="false"
            data-editor="field"
            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
          />
          <p className="fs-110 font-cond-l" contenteditable="false">
            Wonder Spark is simply magical! This toy shop has everything you
            could ever want and more. The whimsical decor and enchanting
            displays create an immersive experience that captivates both
            children and adults.{" "}
          </p>
          <h5
            className="font-cond mgb-5 fg-text-d fs-130"
            contenteditable="false"
          >
            Sean Carter
          </h5>
          <small
            className="font-cond case-u lts-sm fs-80 fg-text-l"
            contenteditable="false"
          >
            Fund Manager - Chicago
          </small>
        </div>
      </div>

     



      <h2 class="pt-5 mb-4 text-center">Our Sellers</h2>
      <div data-aos="fade-up" className="container mb-5 mx-auto row row-cols-1 row-cols-md-3 g-3">
    
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1693801806~exp=1693802406~hmac=c2311bb00f06d3944f832fc7a4ae8fd7eeb313c36c09cf71f5be2b503ebbbbfc" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">Alex</h3>
            
            <p className="card-title">Rating: 4.2</p>
             
          </div>
        </div>
      </div>
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1693801809~exp=1693802409~hmac=913ea33c2f2983d5c9194a2a5bfd287b0c5a2663c5fa471164fcb03c810815eb" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">Shaun</h3>
            
            <p className="card-title">Rating: 4.3</p>
             
          </div>
        </div>
      </div>
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/portrait-african-american-model_23-2149072164.jpg?w=1380&t=st=1693801821~exp=1693802421~hmac=bea63bc9ea818e834ce40a08e08509f192995fbb7d4b226b40fc27733603458e" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">Raymond</h3>
            
            <p className="card-title">Rating: 4</p>
              
          </div>
        </div>
      </div>
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?w=1380&t=st=1693801826~exp=1693802426~hmac=8a1b701f952797f5fc4e855c93a610c8ec42ee1729bde1b63e993eb1b751d96a" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">Johnny</h3>
            
            <p className="card-title">Rating: 3.8</p>
              
          </div>
        </div>
      </div>
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1380&t=st=1693801837~exp=1693802437~hmac=e6e90ebed43539cabce6ccd2ac5e2075be0fbe110e6a460f0f54f660d96cbe4c" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">Sheldon</h3>
            
            <p className="card-title">Rating: 3.5</p>
             
          </div>
        </div>
      </div>
    <div className="col">
        <div className="card h-100">
          <img src="https://img.freepik.com/free-photo/smiling-businessman-standing-with-arms-folded-isolated-white_231208-13007.jpg?w=1380&t=st=1693801848~exp=1693802448~hmac=28fb1b869492b68bcf6118863a7d447ef2f353fd8ccef7008d8fc21e957e5be3" className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">John paul</h3>
            
            <p className="card-title">Rating: 4</p>
        
          </div>
        </div>
      </div>

      </div>
      
      <div data-aos="fade-up" className="mt-5 mx-auto container d-flex row row-cols-1 row-cols-md-2 g-0"><div className="py-5 px-4"><h2>WHY US</h2><p>At String Symphony, we understand that you have choices when it comes to your musical journey. We believe that our commitment to excellence and dedication to our users set us apart. Our team consists of skilled musicians and educators who are deeply passionate about music and education. We bring years of experience and a genuine love for what we do, ensuring that you receive top-notch service and content. String Symphony offers a comprehensive learning experience tailored to your needs. Whether you're a beginner, intermediate, or advanced learner, our platform provides a diverse range of resources, lessons, and support to help you achieve your musical goals. Join our vibrant and supportive community of music enthusiasts. String Symphony fosters an environment where you can connect with fellow learners, share your progress, and seek guidance from experienced musicians. We take pride in delivering high-quality educational content. Our lessons are designed to be engaging, informative, and enjoyable, ensuring that you stay motivated and inspired on your musical journey.</p></div><div><img className="imgAbt img-fluid" src="https://as1.ftcdn.net/v2/jpg/02/55/83/16/1000_F_255831674_noIY1zQdV2ZNfHmNHPqVQueHdTVXEDqs.jpg" alt=""/></div></div>
    </div>
  );
};

export default Home;
