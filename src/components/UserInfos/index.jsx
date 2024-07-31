import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterUserInfos.js'

//Création du bloc des informations de l'utilisateur
export default function UserInfos(props) {
  //Initialisation des variables d'état pour la mise en place des données, le chargement et les erreurs  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Récupération des données
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await dataAdapter(props.id)
        setData(result)
      } 
      catch(error){
        setError(error)
      } 
      finally{
        setLoading(false)
      }
    }
    getData()
  }, [props.id])

  if(loading){
    return <div>Chargement</div>
  }

  if(error){
    return <div>Erreur: {error.message}</div>
  }

  //Affichage du message personnalisé pour l'utilisateur
  return (
    <div className="user-infos">
      <h1>
        Bonjour{" "}
        <span className="first-name">{data.data.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}