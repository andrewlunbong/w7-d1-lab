document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit", handleFormSubmit)
  
  const deleteAll = document.querySelector("#delete-all")
  deleteAll.addEventListener("click", handleDelete)
})

const handleFormSubmit = function(event){
  event.preventDefault()
  console.log("Submitted")
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value
  console.log(title, author, category)
  const newReadingList = document.createElement("li")
  newReadingList.innerHTML = ` Title: ${title} <br>By ${author} <br> Category: ${category} `
  const readingList = document.querySelector("ul")
  readingList.appendChild(newReadingList)
  event.target.reset()
}

const handleDelete = function(){
const readingList = document.querySelector("ul")
readingList.remove()
}



