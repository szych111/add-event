import './Form.css'

const TestComponent = props => {
    const getEvents = async () => {
        const url = 'http://localhost:5000/api/events'

        try {
            await fetch(url)
            .then(response => {
            const responseData = response.json()
            console.log(responseData)
            return responseData
            })
            .catch(error => alert('An error occurred', error))
        } catch(err) {
            console.log(err)
        }
        }

    return (
        <div className='test-div' >
            <button onClick={getEvents}>Get Events</button>
        </div>
    )
}

export default TestComponent