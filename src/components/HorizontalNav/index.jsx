import logo from '../../images/logo.svg'
//Affichage de la barre de navigation horizontale
export default function Home() {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav className="primary-nav">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}