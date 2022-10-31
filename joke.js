let count = 0
let jokesArray = []

window.onload = () => {
  fetchJoke()
}
document.querySelector('#next').addEventListener('click', nextJoke)
document.querySelector('#previous').addEventListener('click', previousJoke)

function fetchJoke() {
  fetch(
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=5',
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data)
      data.jokes.forEach((index) => {
        jokesArray.push(index.joke)
      })
    document.querySelector(//2
        '.joke',
      ).innerHTML = `<strong>${jokesArray[0]}</strong>`
    })
    .catch((err) => {
      console.log(err)
    })
}
function nextJoke() {
  count++
  if (count <= 4) {
    document.querySelector(
      '.joke',
    ).innerHTML = `<strong>${jokesArray[count]}</strong>`

    console.log(count)
  } else {
    count = 0
    jokesArray = []
    fetchJoke()
  }
}
function previousJoke() {
  count--
  console.log('count in previous: ' + count)
  if (count >= 0) {
    document.querySelector(
      '.joke',
    ).innerHTML = `<strong>${jokesArray[count]}</strong>`
    // console.log(count);
  } else {
    document.querySelector(
      '.joke',
    ).innerHTML = `<strong>Can't go beyond this. Press Next!</strong>`
    count = 0
  }
}
