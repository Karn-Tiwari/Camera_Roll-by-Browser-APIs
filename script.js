// let video = document.querySelector('video');
// let recordBtnCont = document.querySelector('.record-btn-cont');
// let recordBtn = document.querySelector('.record-btn');
// let captureBtnCont = document.querySelector('.capture-btn-cont');
// let captureBtn = document.querySelector('.capture-btn');
// let recordFlag = false;

// let recorder;
// let chunks = [];// media data in chunks

// let constraints = {
//     audio: true,
//     video: true
// }
// //navigator -> global object hai aur browser ki information deta hai
// // mediaDevices -> iska use hum hardware jaise camera aur microphone ko connect karne k liye karte hai
// // userMedia -> mediadevices k ander ki ek functionality hai jisme wo user se access mangega

// navigator.mediaDevices.getUserMedia(constraints).then((stream) =>{
//     video.srcObject = stream;
//     recorder = new MediaRecorder(stream);
//     recorder.addEventListener("start",(e)=>{
//         chunks = [];
//     })
//     recorder.addEventListener("dataavailable",(e)=>{
//         chunks.push(e.data);
//     })
//     recorder.addEventListener=("stop", (e) => {// jab bhi  main stop pe click karunga to chunke k form me video download ho jaye aur url generate ho jaye aur ek file me store ho jaye
//         //conversion of media chunks int video mp4

//         let blob = new Blob(chunks,{type:"video/mp4"});
//         let videoURL = URL.createObjectURL(blob);// isko through url mill jati hai
        
//         let a = document.createElement('a');
//         a.href = videoURL;
//         a.download = 'video.mp4';
//         a.click();
//     })
        
// })
// // mediastream -> this interface returns a stream of media content. and it consist of several tracks such as video or audio


// recordBtnCont.addEventListener('click', (e) => {
//     if(!recorder)return;
//     recordFlag = !recordFlag;
//     if(recordFlag){
//         recorder.start();
//         recordBtn.classList.add("scale-record")
//     }
//     else{
//         recorder.stop();
//         recordBtn.classList.remove("scale-record");
//     }
// })


// function startTimer(){
//     setInterval
// }