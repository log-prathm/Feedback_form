const express = require("express");
const path = require("path");
const app = express();
const os = require('os');
const PORT = 8080;

app.use("/static", express.static(path.join(__dirname, '../frontend/static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/templates/index.html'));
});

app.get("/student", (req, res) =>{
    res.sendFile(path.join(__dirname, "../frontend/templates/student.html"));
});

app.get("/select", (req, res) =>{
    res.sendFile(path.join(__dirname, "../frontend/templates/select.html"));
});

app.get("/select_teacher", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/templates/select_teacher.html"));
});

app.get("/administrative", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/templates/administrative.html"));
});

app.get("/feedback_ques", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/templates/feedback_ques.html"));
});

// function getLocalIP() {
//     const nets = os.networkInterfaces();
//     for (const name of Object.keys(nets)){
//         for(const net of nets[name]){
//             if(net.family == 'IPv4' && !net.internal && net.address.startsWith('192.')){
//                 return net.address;
//             }
//         }
//     }
//     return 'localhost'
// }

const networkInterfaces = os.networkInterfaces();

// function getLocalIP() {
//   for (const iface of Object.values(networkInterfaces).flat()) {
//     if (iface.family === 'IPv4' && !iface.internal && iface.address.startsWith('192.168.')) {
//       return iface.address;
//     }
//   }
//   return 'localhost';
// }

// const ip = getLocalIP();
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server running at http://${ip}:${PORT}`);
// })

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server running on http://10.35.29.59:8080"); // uses ipv4 of Wireless LAN adapter Wi-Fi
});