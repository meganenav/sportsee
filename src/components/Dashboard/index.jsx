import { useParams } from 'react-router-dom'
import UserInfos from '../../components/UserInfos'
import FoodMeasures from '../../components/FoodMeasures'
import ActivityChart from '../../components/ActivityChart'
import SessionsChart from '../../components/SessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'

//Création du tableau de bord
export default function Dashboard() {
    //Récupération de l'id dans les paramètres du lien
    const { id } = useParams()

    /*On transmet l'id de l'utilisateur dans les différents composants.
    On fait appel au composant UserInfos affichant le message pour l'utilisateur.
    On appelle les différents composants des graphiques (ActivityChart, SessionsChart, PerformanceChart, ScoreChart).
    On utilise le composant FoodMeasures pour afficher les blocs liés aux apports nutritionnels de l'utilisateur.
    */
    return (
        <>
            <UserInfos id={id} />
            <div className="container-data">
                <section className="charts-container">
                    <div className="chart activity-chart">
                        <p className="activity-chart-title">Activité quotidienne</p>
                        <ActivityChart id={id}/>
                    </div>
                    <div className="charts-blocks">
                        <article className="chart sessions-chart">
                            <p className="sessions-chart-title">Durée moyenne des sessions</p>
                            <SessionsChart id={id} />
                        </article>
                        <article className="chart performance-chart">
                            <PerformanceChart id={id} />
                        </article>
                        <article className="chart score-chart">
                            <p className="score-chart-title">Score</p>
                            <ScoreChart id={id} />
                        </article>
                    </div>
                </section>
                <section className="food-measures">
                    <FoodMeasures id={id} />
                </section>
            </div>
        </>
    )
}