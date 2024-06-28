export default function UserInfos(props) {
    
    return (
        <div className="container">
            <h1>Bonjour <span className="first-name">{props.name}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}