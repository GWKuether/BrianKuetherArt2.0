import "./BioPage.css"

const BioPage = (props) => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <div>
        <img src={require("./Assets/IMG_5401.jpg")} alt="Brian"></img>
      </div>
      <div>
        <p className="text-sizer">Brian's journey began as a young boy drawing inspiration from the
          simplicity and beauty of nature. He was thoroughly impressed by
          nature's perfect expression of form, color and design. As soon as he
          began experimenting with oil paints, his talent was clearly
          recognized. His skills quickly evolved, and he went on to pursue a
          formal education at the Milwaukee Institute of Art and Design,
          mastering his style and technique as a painter. Brian is a versatile
          artist. His talents include figurative and portrait work, as well as
          landscapes and wildlife. He finds beauty not only in the smallest
          elements in nature, but also the massive open prairies and mountain
          ranges. Brian's paintings reflect what he has seen or experienced
          first-hand and he invites the viewer to experience life the way he
          sees it. During his career, Brian has traveled the country, creating
          and restoring paintings and murals and participating in many art shows
          along with garnering many awards. He has also provided illustrations
          for several major magazines. Brian's original paintings are displayed
          in many public and private corporations throughout the country. In
          recent years he has completed many commissioned works, including
          several corporate portraits. Along with donating artwork to Ducks
          Unlimited, Whitetails Unlimited, Wisconsin Waterfowl Association,
          Pheasants Forever, National Turkey Federation and Ruffed Grouse
          Society, Brian has also been chosen as a sponsor artist for Whitetails
          Unlimited, Wisconsin Waterfowl Association, Pheasants Forever and
          Milwaukee PBS's Great TV Auction. Brian is also a six-time Wisconsin
          State Stamp winner.
        </p>
      </div>
    </div>
  );
};

export default BioPage;
