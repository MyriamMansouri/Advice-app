const axios = require('axios')

// access API data with axios
const getQuote = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')
      return response.data.slip.advice
    } catch (error) {
      console.error(error)
    }
  }

module.exports = getQuote;

