# WebRTC Practice Project

This is a simple project to practice WebRTC (Web Real-Time Communication) by establishing peer-to-peer communication between two users. The project uses `React` and `WebRTC` to set up audio and video streams.

## Features

- Real-time video streaming using WebRTC.
- Peer-to-peer connection establishment.
- Muted streams for testing purposes.
- Simple user interface with React.js.

## Technologies Used

- **React.js** - Frontend framework.
- **WebRTC** - Web Real-Time Communication for peer-to-peer streaming.
- **ReactPlayer** - To embed video streams.
- **CSS/ TailwindCSS** - For basic styling. //checkout in the code

## Home Page 
<p align="center"> <img src="https://github.com/ashish8513/webRtc-main/blob/main/Home.png" alt="Form" width="800"> </p> 

The user provides two pieces of information: their email and a unique room ID. The room ID is shared with another person, allowing both users to connect and communicate with each other through the same room.

If someone else knows the room ID, they can enter it and join the conversation or session with the original user who also has the same room ID. This setup allows peer-to-peer communication between the two users.

## main 

<p align="center"> <img src="https://github.com/ashish8513/webRtc-main/blob/main/Cal.png" alt="home Page" width="800"> </p>  

There is a button on the page that indicates whether users are connected or not. When the users are connected, it shows a green light, signaling that they can communicate with each other. If a red light appears, it means the other person is not properly connected, and communication is not possible at that moment.

This way, the button gives a visual cue (green or red light) to indicate the connection status between the users in the project.

## Calling Page 


<p align="center"> <img src="https://github.com/ashish8513/webRtc-main/blob/main/Video.png" alt="last Page" width="800"> </p>  
