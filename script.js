let video = document.querySelector('video');

let constraints = {
    audio: true,
    video: true
}
//navigator -> global object hai aur browser ki information deta hai
// mediaDevices -> iska use hum hardware jaise camera aur microphone ko connect karne k liye karte hai
// userMedia -> mediadevices k ander ki ek functionality hai jisme wo user se access mangega

navigator.mediaDevices.getUserMedia(constraints).then((stream) =>{
video.
})

