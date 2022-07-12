import axios from 'axios'

const apiUrl = 'http://my-app-yikvv.ondigitalocean.app/'

export default {
    async get(path) {
        try {
            const resultUrl = `${apiUrl}${path}`
            const getResult = await axios.get(resultUrl)
            return getResult
        } catch (e) {
            console.error(e.message, e)
        }
    },

   async post(path, objectToPost = {}) {
        try {
            const resultUrl = `${apiUrl}${path}`
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache"
                }
            }
            const postResult = await axios.post(resultUrl,objectToPost, config)
            return postResult
        } catch (e) {
            console.error(e.message, e)
        }
    }
}