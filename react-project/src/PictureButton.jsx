
function PictureButton (){

    const imageUrl = './src/assets/Kouman.jpg';
     
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}
export default PictureButton;