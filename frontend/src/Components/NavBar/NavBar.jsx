import { useNavigate } from "react-router-dom";


const NavBar = (props) => {

      const navigate = useNavigate();


      const handleOriginalsClick = () => {
        navigate("/originals");
      };

      const handlePrintsClick = () => {
        navigate("/prints");
      };

      const handleBioClick = () => {
        navigate("/bio");
      };

      const handlePortraitsClick = () => {
        navigate("/portraits");
      };

      const handleCommissionsClick = () => {
        navigate("/commissions");
      };


    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <h2 onClick={() => handleOriginalsClick()}>Originals</h2>
            <h2 onClick={() => handlePrintsClick()}>Prints</h2>
            <h2 onClick={() => handleBioClick()}>Bio</h2>
            <h2 onClick={() => handlePortraitsClick()}>Portraits</h2>
            <h2 onClick={() => handleCommissionsClick()}>Commisions</h2>
        </div>
     );
}
 
export default NavBar;