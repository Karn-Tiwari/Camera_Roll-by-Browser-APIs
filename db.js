let db;
let openRequest = indexedDB.open("myDataBase", 2);
openRequest.addEventListener("success", (e) => {
    console.log("DB success");
    db = openRequest.result;
})
openRequest.addEventListener("error", (e) => {
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded");
    db = openRequest.result;

    // create object Store => can be created only in upgradeneeded event.
    db.createObjectStore("video", { keyPath : "id" });
    db.createObjectStore("image", { keyPath: "id" });
})