import '../../sass/main.scss'
import HorizontalNav from '../../components/HorizontalNav/'
import VerticalNav from '../../components/VerticalNav/'
import Dashboard from '../../components/Dashboard'

export default function Home() {
    return (
        <>
            <HorizontalNav />
            <main>
                <VerticalNav />
                <Dashboard />
            </main>
        </>
    )
}