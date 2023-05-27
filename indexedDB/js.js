let db;
let note = document.getElementById("xxxx");

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these event handlers act on the database being opened.
DBOpenRequest.onerror = (event) => {
	note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
	note.innerHTML += "<li>Database initialized.</li>";

	// store the result of opening the database in the db
	// variable. This is used a lot below
	db = DBOpenRequest.result;

	// Run the displayData() function to populate the task
	// list with all the to-do list data already in the IDB
	displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
// it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = (event) => {
	const db = event.target.result;

	db.onerror = (event) => {
		note.innerHTML += "<li>Error loading database.</li>";
	};

	// Create an objectStore for this database
	const objectStore = db.createObjectStore("toDoList", {
		keyPath: "taskTitle",
	});

	// define what data items the objectStore will contain

	objectStore.createIndex("hours", "hours", {
		unique: false
	});
	objectStore.createIndex("minutes", "minutes", {
		unique: false
	});
	objectStore.createIndex("day", "day", {
		unique: false
	});
	objectStore.createIndex("month", "month", {
		unique: false
	});
	objectStore.createIndex("year", "year", {
		unique: false
	});
	objectStore.createIndex("notified", "notified", {
		unique: false
	});
};

function displayData(arguments) {
	console.log('ok');
}
