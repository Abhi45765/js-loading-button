const SearchButton = document.querySelector('#search-button')
const SearchButtonContent = document.querySelector('#search-button div')

SearchButton.addEventListener('click',toggleButton)

function toggleButton() {
  SearchButtonContent.classList.toggle('loading')
}