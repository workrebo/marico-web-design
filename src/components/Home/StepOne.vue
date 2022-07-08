<template>
  <section class="step-one bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="step-one-content">
            <span class="step-one-sub-title">STEP 1</span>
            <h2 class="step-one-title">Connect Your Content</h2>
            <p class="step-one-text">
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
            <router-link tag="a" to="/pricing" class="step-one-button" href="#"
              >View Avaliable Sources</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.step-one-content {
  margin: 190px 200px 0 200px;
}
.step-one-sub-title {
  font-family: "Poppins-SemiBold";
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #3d82f2;
  margin: 0 400px;
}
.step-one-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  text-align: center;
  color: #ffffff;
}
.step-one-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #707070;
  width: 929px;
  margin-bottom: 35px;
}
.step-one-button {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #707070;
  padding: 23px 37px;
  border: 1px solid #707070;
  border-radius: 30%;
  margin: 0px 280px;
}
.step-one-button:hover {
  color: #ffffff;
}
@media screen and (max-width: 1400px) {
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 319px;
  }
  .step-one-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 112px;
    text-align: center;
    color: #ffffff;
  }
  .step-one-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #707070;
    width: 740px;
    margin-bottom: 35px;
  }
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 199px;
  }
}
@media screen and (max-width: 1200px) {
  .step-one-content {
    margin: 190px 100px 0 100px;
  }
}
@media screen and (max-width: 992px) {
  .step-one-content {
    margin: 190px 0px 0 0px;
  }
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 309px;
  }
  .step-one-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 112px;
    text-align: center;
    color: #ffffff;
  }
  .step-one-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #707070;
    width: 700px;
    margin-bottom: 35px;
  }
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 189px;
  }
}
@media screen and (max-width: 768px) {
  .step-one-content {
    margin: 190px 0px 0px 0px;
  }
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 219px;
  }
  .step-one-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 112px;
    text-align: center;
    color: #ffffff;
  }
  .step-one-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #707070;
    width: 520px;
    margin-bottom: 35px;
  }
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 99px;
  }
}
@media screen and (max-width: 540px) {
  .step-one-content {
    margin: 190px 0px 0px 0px;
  }
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 200px;
  }
  .step-one-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 112px;
    text-align: center;
    color: #ffffff;
  }
  .step-one-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #707070;
    width: 419px;
    margin-bottom: 35px;
  }
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 59px;
  }
}
@media screen and (max-width: 502px) {
  .step-one-content {
    margin: 190px 0px 0px 0px;
  }
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 170px;
  }
}
@media screen and (max-width: 460px) {
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 45px;
  }
}
@media screen and (max-width: 442px) {
  .step-one-content {
    margin: 190px 0px 0px 0px;
  }
  .step-one-sub-title {
    font-family: "Poppins-SemiBold";
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #3d82f2;
    margin: 0 150px;
  }
  .step-one-button {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
    padding: 23px 37px;
    border: 1px solid #707070;
    border-radius: 30%;
    margin: 0px 35px;
  }
}
</style>