import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p className="text-sizer">
            Original paintings are unique, one-of-a-kind renderings which will
            never be duplicated. Subsequent prints, mechanical or digital
            copies, imitations or other reproductions are excluded from this
            definition.
          </p>
        </div>
        <div>
          <img
            src={require("./Assets/brian kuether - Google Search.png")}
            alt="profile"
            className="image-sizer"
          ></img>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            src={require("./Assets/IMG_0275.jpg")}
            alt="profile two"
            className="image-sizer"
          ></img>
        </div>
        <div>
          <p className="text-sizer">
            The majority of Brian Kuether's original paintings are based on his
            own personal experiences. He is also commissioned by collectors or
            businesses to create original paintings. Original paintings
            typically require ample time to gather references, conduct research,
            and design, including size determination and sketching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
