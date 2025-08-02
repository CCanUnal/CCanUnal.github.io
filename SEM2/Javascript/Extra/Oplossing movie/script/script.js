// Array waarin alle gelikete films komen
const likedMovies = []
// Array waarin alle gedislikete films komen
const dislikedMovies = []

// Setup-functie die bij het laden van de pagina wordt uitgevoerd
const setup = () => {
	let movielist = document.getElementById('movielist')

	// Voor elke film in de movies-array een element maken en toevoegen aan de lijst
	movies.forEach(movie => {
		let movieElement = createMovieElement(movie)
		movielist.appendChild(movieElement)
	})
}

// Maakt een HTML-element voor een film
const createMovieElement = (movie) => {
	const div = document.createElement("div")
	div.classList.add('movie') // CSS class toevoegen
	div.setAttribute("data-id", movie.id) // data-attribuut voor identificatie

	const title = document.createElement("p")
	title.textContent = movie.title // Titel invullen
	title.classList.add('title')

	div.appendChild(title) // Titel toevoegen aan filmdiv

	const buttons = document.createElement("div")
	buttons.classList.add('buttons') // CSS class toevoegen

	// Like-knop aanmaken en click-event koppelen
	const likeBtn = createIconButton("fas fa-thumbs-up", () => {
		likeMovie(movie)
	})

	// Dislike-knop aanmaken en click-event koppelen
	const dislikeBtn = createIconButton("fas fa-thumbs-down", () => {
		dislikeMovie(movie)
	})

	// Like- en dislikeknop toevoegen aan buttoncontainer
	buttons.appendChild(likeBtn)
	buttons.appendChild(dislikeBtn)

	div.appendChild(buttons) // Buttoncontainer toevoegen aan filmdiv

	// Container voor afbeelding en beschrijving
	const imageDescriptionContainer = document.createElement("div")
	imageDescriptionContainer.classList.add('imageDescriptionContainer')

	// Afbeelding toevoegen
	const img = document.createElement("img")
	img.src = movie.imageUrl
	img.classList.add('image')
	imageDescriptionContainer.appendChild(img)

	// Beschrijving toevoegen
	const description = document.createElement("p")
	description.textContent = movie.description
	description.classList.add('description')
	imageDescriptionContainer.appendChild(description)

	div.appendChild(imageDescriptionContainer) // Alles toevoegen aan filmdiv

	return div // Geeft het element terug
}

// Functie om een film te liken
const likeMovie = (movieToLike) => {
	// Check of film al geliket is
	if (likedMovies.find(movie => movie.id === movieToLike.id)) {
		return // Stop als hij al geliket is
	}

	// Zoek het element in de HTML
	const movieElements = document.getElementsByClassName("movie")
	let movieElement = null
	for (const movieEl of movieElements) {
		if (movieEl.getAttribute("data-id") === movieToLike.id.toString()) {
			movieElement = movieEl
		}
	}

	// Check of hij gedisliket was en verwijder dislike
	const disliked = dislikedMovies.findIndex(movie => movie.id === movieToLike.id)
	if (disliked !== -1) {
		dislikedMovies.splice(disliked)
		const dislikeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-down")
		dislikeBtn.classList.remove("dislike")
	}

	// Voeg film toe aan likedMovies
	likedMovies.push(movieToLike)

	// Geef knop een groene kleur
	const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
	likeBtn.classList.add("like")

	// Update counters en toon in de sidebar
	recalculateCounters()
	addToLikeBar(movieToLike)
}

// Voeg de film toe aan de sidebar links
const addToLikeBar = (movieToLike) => {
	const likebar = document.getElementById("likebar")
	if (likebar.style.visibility === "hidden") {
		likebar.style.visibility = "visible" // Sidebar zichtbaar maken
	}

	const container = document.createElement("div")
	container.setAttribute("data-id", movieToLike.id)
	container.classList.add("likeBarContainer")

	const title = document.createElement("p")
	title.textContent = movieToLike.title
	container.appendChild(title)

	// Trash-icoon toevoegen om te verwijderen
	const trashBtn = createIconButton("fas fa-trash", () => {
		const likedMovie = likedMovies.findIndex(movie => movie.id === movieToLike.id)
		if (likedMovie !== -1) {
			likedMovies.splice(likedMovie)
		}
		removeFromLikeBar(movieToLike)

		// Verwijder de groene kleur van de knop in het filmlijstje
		const movieElements = document.getElementsByClassName("movie")
		let movieElement = null
		for (const movieEl of movieElements) {
			if (movieEl.getAttribute("data-id") === movieToLike.id.toString()) {
				movieElement = movieEl
			}
		}
		const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
		likeBtn.classList.remove("like")

		recalculateCounters()
	})

	container.appendChild(trashBtn)

	// Voeg toe aan de likebar
	document.getElementById("likebarmovies").appendChild(container)
}

// Verwijdert een film uit de sidebar
const removeFromLikeBar = (movieToRemove) => {
	const movieElements = document.getElementsByClassName("likeBarContainer")
	let movieElement = null
	for (const movieEl of movieElements) {
		if (movieEl.getAttribute("data-id") === movieToRemove.id.toString()) {
			movieElement = movieEl
		}
	}

	if (movieElement) {
		movieElement.remove()
	}

	// Als sidebar leeg is, verberg hem
	if (likedMovies.length === 0) {
		const likebar = document.getElementById("likebar")
		if (likebar.style.visibility === "visible") {
			likebar.style.visibility = "hidden"
		}
	}
}

// Functie om een film te disliken
const dislikeMovie = (movieToDislike) => {
	// Stop als al gedisliket
	if (dislikedMovies.find(movie => movie.id === movieToDislike.id)) {
		return
	}

	// Zoek element in HTML
	const movieElements = document.getElementsByClassName("movie")
	let movieElement = null
	for (const movieEl of movieElements) {
		if (movieEl.getAttribute("data-id") === movieToDislike.id.toString()) {
			movieElement = movieEl
		}
	}

	// Als film geliket was, verwijder like
	const likedMovie = likedMovies.findIndex(movie => movie.id === movieToDislike.id)
	if (likedMovie !== -1) {
		likedMovies.splice(likedMovie)
		const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
		likeBtn.classList.remove("like")
	}

	// Voeg film toe aan dislikedMovies
	dislikedMovies.push(movieToDislike)

	// Geef knop een rode kleur
	const dislikeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-down")
	dislikeBtn.classList.add("dislike")

	// Update counters en verwijder uit likebar
	recalculateCounters()
	removeFromLikeBar(movieToDislike)
}

// Update de like- en dislike-counters bovenaan
const recalculateCounters = () => {
	const like = document.getElementById("like")
	like.innerText = likedMovies.length.toString()

	const dislike = document.getElementById("dislike")
	dislike.innerText = dislikedMovies.length.toString()
}

// Maakt een knop aan met een icoontje en click-event
const createIconButton = (icon, onClick) => {
	const a = document.createElement("a")
	const i = document.createElement('i')
	i.className = icon
	a.appendChild(i)
	a.addEventListener('click', onClick)
	return a
}

// Start de app bij laden
window.addEventListener("load", setup)
