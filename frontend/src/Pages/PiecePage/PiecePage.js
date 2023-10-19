import { useLocation } from "react-router-dom";
import "./PiecePage.css"
import ReactImageMagnify from 'react-image-magnify'

const PiecePage = (props) => {
  const state = useLocation();

  const piece = state.state;

  const height = piece.imageSize.substring(0, 2);
  const width = piece.imageSize.substring(5, 7);

  const intHeight = Number(height * 40)
  const intWidth = Number(width * 40)

  function checkSold() {
    if (piece.imageSold === true) {
      return <h3>SOLD</h3>;
    } else {
      return <h3>{piece.imagePrice}</h3>;
    }
  }
  



  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>{piece.imageTitle}</h1>
      <div className="piece-box" id= "imageMagnifyer" style={{height: `${height}em`, width: `${width}em`, margin: "3em",}}>
      <ReactImageMagnify {...{
        smallImage: {
          alt: 'alt',
          isFluidWidth: true,
          src: piece.imageLocation
        },
        largeImage: {
          src: piece.imageLocation,
          width: intWidth,
          height: intHeight
        },
        enlargedImagePosition: "over"
      }}/>

    </div>

      <h3>{piece.imageSize}</h3>
      {checkSold()}
    </div>
  );
};

export default PiecePage;

