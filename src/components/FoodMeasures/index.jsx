export default function FoodMeasures(props) {
    return (
        <div className="measure-block">
            <img src={ props.img } alt={ props.alt }></img>
            <div className="measure-data">
                <p className="food-data">{ props.measure }{ props.unit }</p>
                <p className="food-title">{ props.title }</p>
            </div>
        </div>
    )
}