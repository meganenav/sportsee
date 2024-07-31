import sitIcon from '../../images/sit.svg'
import swimIcon from '../../images/swim.svg'
import bikeIcon from '../../images/bike.svg'
import gymIcon from '../../images/gym.svg'

//Affichage de la barre de navigation verticale
export default function Home() {
  return (
    <div className="secondary-nav">
      <nav>
        <img src={sitIcon} alt="Icône menu yoga"></img>
        <img src={swimIcon} alt="Icône menu natation"></img>
        <img src={bikeIcon} alt="Icône menu vélo"></img>
        <img src={gymIcon} alt="Icône menu musculation"></img>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </div>
  )
}