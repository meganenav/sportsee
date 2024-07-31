//Fonction permettant de créer un appel à l'API avec une URL passée en paramètres et de renvoyer les données reçues en gérant les erreurs
export async function fetchData(url) {
	try {
		const response = await fetch(url)
		if(!response.ok){
			throw new Error("Response not ok")
		}
	  const data = await response.json()
	  return data
	} 
	catch(error){
		console.error("Error:", error)
		throw error
	}
}