// IDBFactory
// IDBFactory.cmp
// IDBFactory.databases
// IDBFactory.deleteDatabase
// IDBFactory.open

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
	console.error("Error loading database.");
};

DBOpenRequest.onsuccess = (event) => {
	console.info("Database initialized.");

	// store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
	db = DBOpenRequest.result;
};
//  Como puedo saber sinuna base de datos existe ?  Puedo crear mas de  una base de datos simultaneamente. 
const nombreBaseDeDatos = "miBaseDeDatos";
const request = window.indexedDB.open(nombreBaseDeDatos);

request.addEventListener("error", function (event) {
	console.error("Error al abrir la base de datos", event.target.error);
});

request.addEventListener("success", function (event) {
	console.log("La base de datos existe");
});

request.addEventListener("upgradeneeded", function (event) {
	console.log("La base de datos no existe");
});

// Puedes mejorar esto ?

// async function existe(nombreBaseDeDatos, i) {
// 	const request = window.indexedDB.open(nombreBaseDeDatos);

// 	request.addEventListener("error", function (event) {
// 		console.error("Error al abrir la base de datos", event.target.error);
// 	});

// 	request.addEventListener("success", function (event) {
// 		console.log("La base de datos existe");
// 	});

// 	request.addEventListener("upgradeneeded", function (event) {
// 		console.log("La base de datos no existe");
// 	});
// 	console.log('================= #' + i);
// }
// let nombreBaseDeDatos = "s999999s999999s999999s999999s999999";

// Promise.resolve(existe(nombreBaseDeDatos, 1), existe(nombreBaseDeDatos, 1))
// 	.then((x) => {
// 		console.log(x); // Success!
// 	})
// 	.then((y) => {
// 		console.log(y); // Success!
// 	});
