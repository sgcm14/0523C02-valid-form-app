const Card = ({ nombre, color }) => {
  console.log(nombre, color)
  return (
    <div className="card">
      <h2>Hola {nombre}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div
        // style={{
        //   backgroundColor: color,
        //   width: "100px",
        //   height: "50px",
        //   margin: "10px auto",
        //   borderRadius: "5px",
        //   border: "inherit",
        // }}
        className="color-box"
        style={{
          backgroundColor: color,
        }}
      >
        <span>{color}</span>
      </div>
    </div>
  );
};

export default Card;
