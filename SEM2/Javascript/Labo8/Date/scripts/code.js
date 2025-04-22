const setup = () => {

	let start = new Date('2025-04-01T12:10:30');
	console.log(start);

	//dag van de week
	console.log((start.getDay()));

	//maand
	console.log((start.getMonth() + 1));

	//jaar
	console.log(start.getFullYear());

	//dag
	console.log(start.getDate() + "-"
		+ (start.getMonth() + 1) + "-"
		+ start.getFullYear() + " " + start.getHours()
		+ ":" + start.getMinutes() + ":" + start.getSeconds());


	let Geboortedatum = new Date(2004,11,26);
	let vandaag = new date();
	console.log(Geboortedatum);

	let milliseconden= vandaag-Geboortedatum;
	console.log(milliseconden);

	let OneDay=1000*60*60*24
	let countDay= milliseconden/oneDay;

	console.log("Aantal dagen: "+parseInt(countDay))






	let event = new Date();

	console.log("toString" + event.toString()); //gebruik jouwe tijdzone

	console.log("toISOString" + event.toString());

	console.log("toDateString" + event.toString());

	console.log("toTimeString" + event.toString());



}



window.addEventListener("load", setup);