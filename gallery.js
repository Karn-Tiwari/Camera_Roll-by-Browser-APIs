setTimeout(() => {
    if(db) {
        //videos retrieval
        let videoDBtransaction = db.transaction("video", "readonly");
        let videoStore = videoDBtransaction.objectStore("video");
        let videoRequest = videoStore.getAll(); //event driven
        videoRequest.onsuccess = (e) => {
            let videoResult = videoRequest.result;
            console.log(videoResult);
            let galleryContainer = document.querySelector(".gallery-container");
            videoResult.forEach((videoObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class", "media-container");
                mediaElem.setAttribute("id", videoObj.id);
               
               let url = URL.createObjectURL(videoObj.blobData);
               
                mediaElem.innerHTML = `
                    <div class="media">
                        <video autoplay loop src="${url}"></video>
                    </div>
                    <div class="delete action-btn">DELETE</div>
                    <div class="download action-btn">DOWNLOAD</div>
                    `;
                    
                    galleryContainer.appendChild(mediaElem);
                    
                    let deleteBtn = mediaElem.querySelector(".delete");
                    deleteBtn.addEventListener("click", deleteListener);
                    let downloadBtn = mediaElem.querySelector(".download");
                    downloadBtn.addEventListener("click", downloadListener);

            });
        }

        // image retrieval
        let imageDBtransaction = db.transaction("image", "readonly");
        let imageStore = imageDBtransaction.objectStore("image");
        let imageRequest = imageStore.getAll(); //event driven
        imageRequest.onsuccess = (e) => {
            let imageResult = imageRequest.result;

            let galleryContainer = document.querySelector(".gallery-container");
            imageResult.forEach((imageObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class", "media-container");
                mediaElem.setAttribute("id", imageObj.id);
               
               let url = imageObj.url
               
                mediaElem.innerHTML = `
                    <div class="media">
                        <img src="${url}">
                    </div>
                    <div class="delete action-btn">DELETE</div>
                    <div class="download action-btn">DOWNLOAD</div>
                    `;
                    
                    galleryContainer.appendChild(mediaElem);

                    let deleteBtn = mediaElem.querySelector(".delete");
                    deleteBtn.addEventListener("click", deleteListener);
                    let downloadBtn = mediaElem.querySelector(".download");
                    downloadBtn.addEventListener("click", downloadListener);
                    
            });
        }
    }
}, 100)

// UI remove, db remove
function deleteListener(e) {
    // DB removal
    let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0, 3);
    if (type === "vid") {
        let videoDBtransaction = db.transaction("video", "readwrite");
        let videoStore = videoDBtransaction.objectStore("video");
        videoStore.delete(id);
    }
    else if(type === "img") {
        let imageDBtransaction = db.transaction("image", "readwrite");
        let imageStore = imageDBtransaction.objectStore("image");
        imageStore.delete(id);
    }

    // UI removal
    e.target.parentElement.remove();

}

function downloadListener(e) {
    let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0, 3);
    if (type === "vid") {
        let videoDBtransaction = db.transaction("video", "readonly");
        let videoStore = videoDBtransaction.objectStore("video");
        let videoRequest = videoStore.get(id);
        videoRequest.onsuccess = (e) => {
            let videoResult = videoRequest.result;

            let videoURL = URL.createObjectURL(videoResult.blobData);
            let a = document.createElement("a");
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
        }
    }
    else if(type === "img") {
        let imageDBtransaction = db.transaction("image", "readwrite");
        let imageStore = imageDBtransaction.objectStore("image");
        let imageRequest = imageStore.get(id);
        imageRequest.onsuccess = (e) => {
            let imageResult = imageRequest.result;

            let a = document.createElement("a");
            a.href = imageResult.url;
            a.download = "image.jpg";
            a.click();
        }

    }
}

