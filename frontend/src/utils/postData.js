export const postData = async (data) => {
    const url = 'http://localhost:5000/api/events'

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

    try {
        await fetch(url, requestOptions)
        .then(response => {
          const responseData = response.json()
          console.log(responseData)
        })
        .catch(error => alert('Form submit error', error))
      } catch(err) {
        console.log(err)
      }
  } 