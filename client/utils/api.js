
export function getNotes () {
  fetch('/api/notes').then((response) => {
    if (response.status !== 200) {
      console.log(`Looks like there was a problem. Status Code: ${response.status}`)
      return
    }
    response.json().then((data) => {
      console.log(data)
      return data
    })
  }).catch((err) => {
    console.log('Fetch Error :-S', err)
  })
}

export function sendNote (state) {
  fetch('/api/notes', {
    method: 'POST',
    body: JSON.stringify({
      title: this.state.title,
      text: this.state.text
    }).then((data) => {
      console.log('Request success: ', data)
    })
    .catch((error) => {
      console.log('Request failure: ', error)
    })
  })
}
