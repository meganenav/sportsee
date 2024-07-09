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