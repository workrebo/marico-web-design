<template>
  <section class="home-button bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="home-button-content">
            <h3 class="home-button-title">
              Turn your audience into email and text message subscribers.
            </h3>
            <div class="buttons">
              <router-link tag="a" to="/login" href="#" class="started"
                >Get Started Now</router-link
              >
              <router-link tag="a" to="/" href="#" class="demo"
                >View A Demo</router-link
              >
            </div>
            <p class="home-button-text">
              <img src="@/assets/image/Dothome.svg" alt="dothome">
              <span class="home-button-number">1000+</span>
              <span class="home-button-other-text"
                >creators have already started</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-button {
  padding-top: 120px;
}
.home-button-content {
  margin: 0 300px;
}
.home-button-title {
  margin: 0 auto;
  width: 694px;
  height: 120px;
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
}
.buttons {
  padding-top: 50px;
}
.started {
  margin-left: 25px;
  margin-right: 25px;
  font-family: "Poppins-Medium";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding: 25px 75px;
  background-color: #326cf9;
  border-radius: 10%;
}
.demo {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #707070;
  background: #000000;
  border: 1px solid #707070;
  padding: 25px 75px;
  border-radius: 10%;
}
.started:hover {
  color: gray !important;
}
.demo:hover {
  color: #ffffff;
}
.home-button-text {
  padding-top: 40px;
  margin: 0 100px;
}
.home-button-number {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  color: #fff;
  margin-left: 20px;
}
.home-button-other-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 38px;
  text-align: center;
  color: #707070;
  margin-left: 20px;
}
@media screen and (max-width: 1400px) {
  .home-button-content {
    margin: 0 200px;
  }
}
@media screen and (max-width: 1200px) {
  .home-button-content {
    margin: 0 100px;
  }
}
@media screen and (max-width: 992px) {
  .home-button-content {
    margin: 0 0 0 0;
  }
}
@media screen and (max-width: 770px) {
  .home-button-title {
    width: 512px;
  }
  .home-button {
    padding-top: 60px;
  }
  .buttons {
    padding-top: 100px;
  }
  .started {
    padding: 20px 20px;
  }
  .demo {
    padding: 20px 20px;
  }
  .home-button-text {
    margin: 0 17px;
  }
}

@media screen and (max-width: 545px) {
  .home-button-title {
    width: 450px;
  }
  .home-button-number {
    font-family: "Poppins-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 38px;
    color: #fff;
    margin-left: 20px;
  }
  .home-button-other-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    text-align: center;
    color: #707070;
    margin-left: 20px;
  }
  .home-button-title {
    width: 350px;
  }
  .buttons {
    padding-top: 200px;
  }
  .started {
    padding: 10px 10px;
    margin: 0 20px 0 15px;
  }
  .demo {
    padding: 10px 10px;
  }
}
</style>