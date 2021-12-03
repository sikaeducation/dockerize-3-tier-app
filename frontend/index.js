const $dogs = document.querySelector(".dogs")
const $error = document.querySelector(".error")

fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(({ dogs }) => {
    dogs.map(dog => {
      const $li = document.createElement("li")
      $li.textContent = dog.name
      return $li
    }).forEach($dog => {
      $dogs.append($dog)
    })
  }).catch(error => {
    $error.textContent = "Couldn't get the dogs!"
  })
