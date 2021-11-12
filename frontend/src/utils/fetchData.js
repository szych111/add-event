export const postData = (data) => {
    const url = 'http://localhost:5000/api/events'

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

    return fetch(url, requestOptions)

}