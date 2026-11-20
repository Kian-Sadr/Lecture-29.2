const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<button onClick={makePic}>Show Pictue</button);

function makePic(){
  const altText = "Sunflower picture not shown.";
  root.render(<img src="flower.jpg" alt={altText}></img>);
}
