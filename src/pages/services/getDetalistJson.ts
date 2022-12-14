export async function getDetalistJson(url: string) {
   try {
      const response = await fetch(url)
      const data = await response.json()
      return data
   } catch (err) {
      console.error(err)
      console.log(url);
      
      return undefined
   }
}
