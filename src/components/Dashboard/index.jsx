import user from '../../data/user.json'
import activity from '../../data/activity.json'
import sessions from '../../data/sessions.json'
import performance from '../../data/performance.json'
import UserInfos from '../../components/UserInfos'
import FoodMeasures from '../../components/FoodMeasures'
import ActivityChart from '../../components/ActivityChart'
import SessionsChart from '../../components/SessionsChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import caloriesImg from '../../images/calories-icon.svg'
import proteinesImg from '../../images/protein-icon.svg'
import carbsImg from '../../images/carbs-icon.svg'
import lipidsImg from '../../images/fat-icon.svg'

export default function Dashboard() {
    const firstName = user.user.userInfos.firstName
    let calories = user.user.keyData.calorieCount
    if(calories >= 1000) {
        const caloriesLength = calories.toString().length
        calories = calories.toString()
        const caloriesFirstPart = calories.substring(0, caloriesLength-3)
        const caloriesLastPart = calories.substring(caloriesLength-3, caloriesLength)
        calories = caloriesFirstPart + "," + caloriesLastPart
    }
    const proteines = user.user.keyData.proteinCount
    const carbs = user.user.keyData.carbohydrateCount
    const lipids = user.user.keyData.lipidCount

    const activitySessions = activity.data.sessions
    const durationSessions = sessions.data.sessions
    const performanceData = performance.data
    const score = user.user.todayScore

    return (
        <>
            <UserInfos name={firstName} />
            <div className="container-data">
                <section className="charts-container">
                    <div className="chart activity-chart">
                        <p className="activity-chart-title">Activité quotidienne</p>
                        <ActivityChart sessions={activitySessions} />
                    </div>
                    <div className="charts-blocks">
                        <article className="chart sessions-chart">
                            <p className="sessions-chart-title">Durée moyenne des sessions</p>
                            <SessionsChart sessions={durationSessions} />
                        </article>
                        <article className="chart performance-chart"><PerformanceChart performance={performanceData} /></article>
                        <article className="chart score-chart">
                            <p className="score-chart-title">Score</p>
                            <ScoreChart score={score} />
                        </article>
                    </div>
                </section>
                <div className="food-measures">
                    <FoodMeasures img={ caloriesImg } alt="Calories icon" measure={ calories } title="Calories" unit="kCal" />
                    <FoodMeasures img={ proteinesImg } alt="Proteines icon" measure={ proteines } title="Protéines" unit="g" />
                    <FoodMeasures img={ carbsImg } alt="Carbs icon" measure={ carbs } title="Glucides" unit="g" />
                    <FoodMeasures img={ lipidsImg } alt="Lipids icon" measure={ lipids } title="Lipides" unit="g" />
                </div>
            </div>
        </>
    )
}