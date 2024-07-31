import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterSessions.js'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

//Création du graphique de sessions
export default function SessionsChart(props) {
  //Initialisation des variables d'état pour la mise en place des données, le chargement et les erreurs
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Initialisation des variables d'état pour la position de la souris et le survol
  const [mouseX, setMouseX] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  //Fonction permettant d'enregistrer la position de la souris
  const handleMouseMove = (e) => {
    if (e && e.activeCoordinate) {
      setMouseX(e.activeCoordinate.x)
    }
  }

  //Fonction permettant de modifier la variable isHovered à true
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  //Fonction permettant d'indiquer une position de la souris à 0 et de modifier la variable isHovered à false
  const handleMouseLeave = () => {
    setMouseX(0)
    setIsHovered(false)
  }

  //Création de la couleur de fond avec mise en place d'un dégradé dynamique lors du survol grâce aux pourcentages
  const getBackgroundColor = () => {
    const chartWidth = 258
    //Lorsque le graphique n'est pas survolé, on renvoie la couleur rouge par défaut
    if (!isHovered) {
      return '#FF0000'
    }
    const percentage = (mouseX / chartWidth) * 100
    return `linear-gradient(to right, rgba(255, 0, 0, 1) ${percentage}%, rgba(0, 0, 0, 0.0975) ${percentage}%)`
  }

  //Récupération des données 
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await dataAdapter(props.id)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [props.id])

  if (loading) {
    return <div>Chargement</div>
  }

  if (error) {
    return <div>Erreur: {error.message}</div>
  }

  /* Création d'un object contenant la première lettre des jours de la semaine
  pour pouvoir ensuite l'utiliser dans l'axe des abscisses.
  Ajout de deux valeurs nulles au début et à la fin pour permettre à la ligne du graphique de toucher les bords
  */
  const days = {
    0: '',
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
    8: '',
  }

  //Création d'un Tooltip personnalisé pour indiquer les données souhaitées
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-sessions">
          <p className="tooltip-duration">{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }

  //Duplication de la première et de la dernière valeur du tableau de données pour permettre à la ligne du graphique de toucher les bords
  let newArray = [...data.data.sessions]
  newArray.unshift({day: 0, sessionLength: newArray[0].sessionLength})
  newArray.push({day: 8, sessionLength: newArray[newArray.length-1].sessionLength})

  /* Mise en place du graphique avec les propriétés nécessaires.
  On appelle la fonction getBackgroundColor() pour mettre en place la couleur de fond avec une transition.
  On met en place les propriétés onMouseEnter, onMouseLeave et onMouseMove avec appel aux fonctions dédiées pour gérer les animations.
  On intègre un dégradé pour la courbe du graphique grâce au composant LinearGradient.
  */
  return (
    <div
      style={{
        width: 258,
        height: 263,
        borderRadius: 5,
        background: getBackgroundColor(),
        transition: 'background 0.3s',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LineChart
        width={258}
        height={263}
        margin={{
          top: 77,
          bottom: 20,
        }}
        data={newArray}
        onMouseMove={handleMouseMove}
      >
        <CartesianGrid />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#colorLine)"
          strokeWidth={2}
          dot={false}
        />
        <defs>
          <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4032)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tickFormatter={(tick) => days[tick]} tickLine={false} axisLine={false} stroke="#FFFFFF" padding={{ left: -15, right: -15 }} />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#FFFFFF' }} cursor={false} />
      </LineChart>
    </div>
  )
}