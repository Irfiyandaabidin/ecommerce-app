Buat folder backend dan install react dengan nama folder frontend
*npx create-react-app frontend*

Pada folder backend install dependency seperti berikut

*npm i express socket.io bcrypt cloudinary dotenv mongoose stripe validator cors*

lalu buat server.js dan tulis kodenya seperti yang berada di server.js
install juga nodemon pada folder backend
*npm i nodemon*

tambahkan script pada package.json folder backend
*"dev": "nodemon server.js"*
*"start": "node server.js"*

pada folder frontend install bootstrap
*npm install react-bootstrap bootstrap*
*npm install react-router-dom react-router-bootstrap*

ubah script start pada package.json folder frontend
*"start": "PORT=3001 react-scripts start"*
supaya menggunakan port 3001

buat folder components pada src, dan buat file Navigation.js
tambahkan kode navbar pada filenya

buat lagi folder pages sejajar dengan folder components dan buat file Home.js

edit app.js