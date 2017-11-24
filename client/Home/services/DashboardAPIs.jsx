const options = {
    method: 'GET'
}

const checkStatus = (response) => {
  console.log(response)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const toJson = response => response.json()

const getEventsAttendees = () => {
  console.log("here2")
  return fetch("/api/v1/getProducts", options)
  .then(checkStatus)
  .then(toJson)
    .then(data => {
      return data
    })
}

export {
  getEventsAttendees
}
