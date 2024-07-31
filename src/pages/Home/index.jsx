import { useEffect } from 'react'
import '../../sass/main.scss'
import HorizontalNav from '../../components/HorizontalNav'
import VerticalNav from '../../components/VerticalNav'
import Dashboard from '../../components/Dashboard'

//Création de la page d'accueil affichant les barres de navigation et le tableau de bord
export default function Home() {

	useEffect(() => 
        { document.title="Sportsee - Page d'accueil" }
    )

	return (
		<>
			<HorizontalNav />
			<div className="container">
				<VerticalNav />
				<main>
					<Dashboard />
				</main>
			</div>
		</>
	)
}