import user from '../../data/user.json'
import activity from '../../data/activity.json'
import UserInfos from '../../components/UserInfos'
import FoodMeasures from '../../components/FoodMeasures'
import ActivityChart from '../../components/ActivityChart'

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

    return (
        <>
            <UserInfos name={firstName} />
            <div className="container-data">
                <FoodMeasures calories={calories} proteines={proteines} carbs={carbs} lipids={lipids} />
                <div className="activity-chart"><ActivityChart sessions={activitySessions} /></div>
            </div>
        </>
    )
}