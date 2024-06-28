import caloriesImg from '../../images/calories-icon.svg'
import proteinesImg from '../../images/protein-icon.svg'
import carbsImg from '../../images/carbs-icon.svg'
import lipidsImg from '../../images/fat-icon.svg'

export default function FoodMeasures(props) {
    return (
        <div className="food-measures">
            <div className="calories measure-block">
                <img src={caloriesImg} alt="Calories icon"></img>
                <div className="measure-data">
                    <p className="calories-data food-data">{props.calories}kCal</p>
                    <p className="calories-title food-title">Calories</p>
                </div>
            </div>
            <div className="proteines measure-block">
                <img src={proteinesImg} alt="Proteines icon"></img>
                <div className="measure-data">
                    <p className="proteines-data food-data">{props.proteines}g</p>
                    <p className="proteines-title food-title">Proteines</p>
                </div>
            </div>
            <div className="carbs measure-block">
                <img src={carbsImg} alt="Carbs icon"></img>
                <div className="measure-data">
                    <p className="carbs-data food-data">{props.carbs}g</p>
                    <p className="carbss-title food-title">Glucides</p>
                </div>
            </div>
            <div className="lipids measure-block">
                <img src={lipidsImg} alt="Lipids icon"></img>
                <div className="measure-data">
                    <p className="lipids-data food-data">{props.lipids}g</p>
                    <p className="lipids-title food-title">Lipides</p>
                </div>
            </div>
        </div>
    )
}