//Composant permettant d'afficher un bloc personnalisé avec les apports nutritionnels de l'utilisateur avec des props transmises
export default function FoodMeasureBlock(props) {
  return (
    <div className="measure-block">
      <img src={props.img} alt={props.alt}></img>
      <div className="measure-data">
        <p className="food-data">
          {props.measure}
          {props.unit}
        </p>
        <p className="food-title">{props.title}</p>
      </div>
    </div>
  )
}