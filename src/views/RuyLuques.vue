<template>
  <div class="container-body">
    <div class="content-body">
      <img class="logo" src="../assets/logo-b.png"/>
      <h2 class="title">Bem vinda(o)</h2>
      <h2 style="font-size: 80px">Porfólio Ruy Luques</h2>
      <p style="font-size: 25px; color: #fff; text-align: center">
        Serviços de marketing digital e desenvolvimento web
      </p>
      <a href="https://www.linkedin.com/company/ruyluques-dev" class="contact-btn">Contrate Agora</a>
    </div>
  </div>
  <section class="container-content">
    <p class="text">Oferecemos os seguintes serviços</p>
    <div class="card-content">
      <div>
        <h3 class="content">Developer Web</h3>
        <section class="hidden">
          <img class="icon" src="../assets/php.png" />
          <img class="icon" src="../assets/mysql.png" />
          <img class="icon" src="../assets/html.png" />
          <img class="icon" src="../assets/css-3.png" />
          <img class="icon" src="../assets/js.png" />
          <img class="icon" src="../assets/vue.png" />
          <img class="icon" src="../assets/vue-test.jpeg" />
          <img class="icon" src="../assets/api.png" />
          <img class="icon" src="../assets/bootstrap.png" />
          <img class="icon" src="../assets/git.png" />
          <img class="icon" src="../assets/react.png" />
        </section>
      </div>
      <div>
        <h3 class="content">RPA (automation)</h3>
        <section class="hidden">
          <img class="icon" src="../assets/uipath.webp" />
        </section>
      </div>
      <div>
        <h3 class="content">Content Creator</h3>
        <section class="hidden">
          <img class="icon" src="../assets/linkedin.png" />
          <img class="icon" src="../assets/youtube.png" />
        </section>
      </div>
      <div>
        <h3 class="content">Computer and Programming Teacher</h3>
        <section class="hidden">
          <img class="icon" src="../assets/html.png" />
          <img class="icon" src="../assets/css-3.png" />
          <img class="icon" src="../assets/ifs.png" />
        </section>
      </div>
      <div>
        <h3 class="content">Templates de Marketing Digita</h3>
        <section class="hidden">
          <img class="icon" src="../assets/canva.png" />
          <img class="icon" src="../assets/trello.png" />
          <img class="icon" src="../assets/jira.png" />
        </section>
      </div>
      <div>
        <h3 class="content">Mentoria de linkedin</h3>
        <section class="hidden">
          <img class="icon" src="../assets/linkedin.png" />
        </section>
      </div>
    </div>
  </section>
  <footer class="content-baseboard">
    <div class="baseboard">
      <img class="logo-footer" src="../assets/logo-b.png" />
      <p class="text-footer">E-mail: ruyluques@hotmail.com</p>
    </div>
  </footer>

  <a href="" target="_blank"
    ><img class="zap" src="../assets/whatsapp.png" alt="zap"
  /></a>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: arial;
}

.logo {
  width: 8%;
  margin-left: 20px;
}


body {
  font-family: "Roboto", sans-serif;
  overflow-y: scroll;
}

body::-webkit-scrollbar {
  background: #fff;
  width: 4px;
}
body::-webkit-scrollbar-track {
  background: #000;
}
body::-webkit-scrollbar-thumb {
  border-radius: 15px;
  border: calc(14px / 4) solid #AA2851;
}

body::-webkit-scrollbar-thumb {
  border-radius: 15px;
  border: calc(14px / 4) solid #AA2851;
}

h1 {
  font-family: "Oleo Script Swash Caps", cursive;
  color: #ffffff;
}

.container-body {
  background-image: url("../assets/background.png");
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1000px) {
  .container-body {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
  }
}

.content-body {
  margin: 3%;
  flex: 40%;
}
@media (max-width: 1000px) {
  .content-body {
    margin: 5% 10%;
  }
}
.content-body h2 {
  color: #ffffff;
  font-weight: 900;
}
.content-body p {
  color: gray;
  text-align: justify;
  padding: 50px 0;
}

.title {
  letter-spacing: 15px;
}

.contact-btn {
  display: inline-block;
  background: #AA2851;
  padding: 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: bold;
}
.contact-btn:hover {
  background: #142c77;
}

.container-content {
  margin: 10% 5%;
}

.text {
  text-align: center;
  color: #142c77;
  font-size: 50px;
  font-weight: bold;
  margin-top: 5%;
}

.card-content {
  display: flex;
  flex-flow: row wrap;
  font-weight: 900;
}
@media (max-width: 1150px) {
  .card-content {
    flex-flow: column wrap;
    align-items: center;
  }
}
.card-content div {
  color: #142c77;
  margin: 90px 20px;
  width: 30%;
  height: 50vh;
  text-align: center;
  border: 1px solid #f1c300;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}
@media (max-width: 1150px) {
  .card-content div {
    width: 80%;
    margin: 5%;
    height: auto;
  }
}
.card-content div:hover {
  background: #f1c300;
  color: white;
}
.card-content div:hover .content {
  display: none;
}
.card-content div:hover .hidden {
  display: block;
}

.content {
  font-size: 25px;
  padding: 0px 20px 70px 20px;
  margin-top: 10%;
}

.icon {
  width: 12%;
  margin: 6%;
}

.hidden {
  display: none;
  width: 100%;
  height: 100%;
}

.baseboard {
  background-image: linear-gradient(110deg, #180f4a, #090422, black);
  color: white;
  height: 50%;
  align-items: center;
}

.logo-footer {
  width: 10%;
}

.zap {
  width: 100px;
  position: fixed;
  bottom: 10px;
  right: 10px;
}

@media screen and (max-width: 1150px) {
  .img-content-menu {
    max-width: 40%;
  }
}
@media screen and (max-width: 1000px) {
  .menu {
    display: none;
  }
  footer img {
    display: none;
  }
}
</style>
