// Aantal stoelen per rij
const SEATS_PER_ROW = 9;
// Aantal rijen in de zaal
const NUM_ROWS = 4;
// Hoeveel stoelen naast elkaar gezocht worden
const SEATS_NEXT_TO_EACH_OTHER = 3;

// Arrays om bij te houden welke stoelen geblokkeerd of geselecteerd zijn
let bannedSeats = [];
let currentlySelectedSeats = [];
let seats = []; // Alle stoelen als een array

// Wanneer de pagina laadt, voer setup uit
const load = () => {
	document.getElementById("btnFind").addEventListener("click", findSeatsHandler);
	initSeats(); // Maak de stoelen en voeg ze toe aan de pagina
};

// Stoelen initialiseren met random beschikbaarheid
const initSeats = () => {

	const container = document.getElementById("seatContainer");

	for (let row = 0; row < NUM_ROWS; row++) {

		for (let seat = 0; seat < SEATS_PER_ROW; seat++) {
			const seatImg = document.createElement("img");

			// Random 20% kans dat een stoel bezet is
			const available = Math.random() >= 0.2;
			seatImg.src = available ? "images/seat_avail.png" : "images/seat_unavail.png";

			// Sla rij en stoelnummer op als data-attributen (later handig)
			seatImg.dataset.row = row;
			seatImg.dataset.seat = seat;

			// Voeg stoel toe aan de lijst en de container
			seats.push(seatImg);
			container.appendChild(seatImg);
		}
	}
};

// Handler voor wanneer op "find" wordt geklikt
const findSeatsHandler = () => {
	bannedSeats = []; // Reset de geblokkeerde stoelen
	findSeats();      // Start zoeken naar stoelen
};


// Maakt alle geselecteerde stoelen weer beschikbaar
const clearSelectedSeats = () => {
	currentlySelectedSeats.forEach(seat => seat.src = "images/seat_avail.png");
	currentlySelectedSeats = [];
};


// Zoekt naar een groep beschikbare stoelen naast elkaar
const findSeats = () => {
	clearSelectedSeats(); // Eerst oude selectie wissen

	for (let row = 0; row < NUM_ROWS; row++) {

		// Loop door alle mogelijke startposities in de rij
		for (let start = 0; start <= SEATS_PER_ROW - SEATS_NEXT_TO_EACH_OTHER; start++) {

			// Selecteer de groep stoelen in deze rij vanaf startpositie
			const group = seats.filter(seat =>
				parseInt(seat.dataset.row) === row &&
				parseInt(seat.dataset.seat) >= start &&
				parseInt(seat.dataset.seat) < start + SEATS_NEXT_TO_EACH_OTHER
			);

			// Check of deze groep beschikbaar is
			if (isGroupAvailable(row, start, group)) {
				selectSeats(row, start, group);
				return; // Stop zodra je een geschikte groep vindt
			}
		}
	}
	alert("Sorry, geen plaatsen beschikbaar.");
};

// Checkt of de groep stoelen beschikbaar is
const isGroupAvailable = (row, start, group) => {
	return !group.some(seat =>
		// Check of deze stoel al geblokkeerd is (banned) of bezet
		bannedSeats.some(b => b.row === row && b.seat === parseInt(seat.dataset.seat)) ||
		!seat.src.endsWith("seat_avail.png")
	);
};

// Selecteert de stoelen in de groep en vraagt om bevestiging
const selectSeats = (row, start, group) => {
	// Markeer de stoelen als geselecteerd
	group.forEach(seat => seat.src = "images/seat_select.png");
	currentlySelectedSeats = group;

	// Toon een dialoogvenster om te bevestigen
	const seatNumbers = group.map(seat => parseInt(seat.dataset.seat) + 1).join(", ");
	const rowNumber = row + 1;

	setTimeout(() => {
		if (confirm(`Wilt u deze ${SEATS_NEXT_TO_EACH_OTHER} stoelen reserveren?\nRij ${rowNumber}, Stoelen: ${seatNumbers}`)) {
			// Stoelen reserveren: markeer als onbeschikbaar
			group.forEach(seat => seat.src = "images/seat_unavail.png");
			alert("Uw stoelen zijn gereserveerd.");
			currentlySelectedSeats = [];
		} else {
			// Stoelen niet gereserveerd: blokkeer deze groep en zoek verder
			bannedSeats.push({ row, seat: start });
			group.forEach(seat => seat.src = "images/seat_avail.png");
			currentlySelectedSeats = [];
			findSeats(); // Probeer opnieuw een andere groep te vinden
		}
	}, 50);
};

// Voeg eventlistener toe voor het laden van de pagina
window.addEventListener("load", load);
