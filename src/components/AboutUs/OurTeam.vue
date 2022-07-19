<template>
  <section class="our-team bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="our-team-content">
            <h5 class="our-team-content-subtitle">OUR TEAM</h5>
            <h2 class="our-team-content-title">We love creators</h2>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-12">
              <div class="our-team-content-item">
                <img
                  class="our-team-content-item-photo"
                  src="@/assets/image/Jacob-photo.svg"
                  alt="photo"
                />
                <h4 class="our-team-content-item-title">Jacob Mark</h4>
                <p class="our-team-content-item-text">CEO & Design</p>
                <a class="our-team-content-item-twitter" href="#"
                  >Twitter
                  <img
                    class="our-team-arrow"
                    src="@/assets/image/Arrow-our-team.svg"
                    alt="arrow"
                /></a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12">
              <div class="our-team-content-item">
                <img
                  class="our-team-content-item-photo"
                  src="@/assets/image/Daniel-photo.svg"
                  alt="photo"
                />
                <h4 class="our-team-content-item-title">Jacob Mark</h4>
                <p class="our-team-content-item-text">CEO & Design</p>
                <a class="our-team-content-item-twitter" href="#"
                  >Twitter
                  <img
                    class="our-team-arrow"
                    src="@/assets/image/Arrow-our-team.svg"
                    alt="arrow"
                /></a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12">
              <div class="our-team-content-item">
                <img
                  class="our-team-content-item-photo"
                  src="@/assets/image/Ryan-photo.svg"
                  alt="photo"
                />
                <h4 class="our-team-content-item-title">Jacob Mark</h4>
                <p class="our-team-content-item-text">CEO & Design</p>
                <a class="our-team-content-item-twitter" href="#"
                  >Twitter
                  <img
                    class="our-team-arrow"
                    src="@/assets/image/Arrow-our-team.svg"
                    alt="arrow"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.our-team-content {
  padding-top: 180px;
  margin: 0 150px;
}
.our-team-content-subtitle {
  padding-left: 425px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #306ef7;
}
.our-team-content-title {
  padding-left: 60px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
  padding-left: 200px;
  padding-bottom: 60px;
}
.our-team-content-item-photo {
  max-width: 100%;
  padding-left: 150px;
}
.our-team-content-item-title {
  padding-top: 20px;
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 52px;
  color: #ffffff;
  padding-left: 100px;
}
.our-team-content-item-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  color: #7f7f7f;
  padding-left: 150px;
}
.our-team-content-item-twitter {
  padding-top: 20px;
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: right;
  color: #ffffff;
  padding-left: 175px;
}
.our-team-arrow {
  padding-left: 10px;
}
@media screen and (max-width: 1400px) {
  .our-team-content {
    margin: 0 50px;
  }
}
@media screen and (max-width: 1200px) {
  .our-team-content {
    margin: 0 0px;
  }
  .our-team-content-item-photo {
    padding-left: 400px;
  }
  .our-team-content-item-title {
    padding-top: 20px;
    font-family: "Poppins-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
    color: #ffffff;
    padding-left: 350px;
  }
  .our-team-content-item-text {
    padding-left: 400px;
  }
  .our-team-content-item-twitter {
    padding-left: 430px;
  }
  .our-team-content-item {
    margin-top: 30px;
  }
}
@media screen and (max-width: 992px) {
  .our-team-content-subtitle {
    padding-left: 275px;
  }
  .our-team-content-title {
    padding-left: 50px;
  }
  .our-team-content-item-photo {
    padding-left: 300px;
  }
  .our-team-content-item-title {
    padding-left: 250px;
  }
  .our-team-content-item-text {
    padding-left: 300px;
  }
  .our-team-content-item-twitter {
    padding-left: 330px;
  }
}
@media screen and (max-width: 768px) {
  .our-team-content-subtitle {
    padding-left: 175px;
  }
  .our-team-content-title {
    padding-left: 0px;
    font-size: 60px;
  }
  .our-team-content-item-photo {
    padding-left: 200px;
  }
  .our-team-content-item-title {
    padding-left: 150px;
  }
  .our-team-content-item-text {
    padding-left: 200px;
  }
  .our-team-content-item-twitter {
    padding-left: 230px;
  }
}
@media screen and (max-width: 535px) {
  .our-team-content-title {
    padding-left: 120px;
    font-size: 60px;
  }
}
@media screen and (max-width: 490px) {
  .our-team-content-subtitle {
    padding-left: 150px;
  }
  .our-team-content-title {
    padding-left: 75px;
    font-size: 60px;
  }
  .our-team-content-item-photo {
    padding-left: 150px;
  }
  .our-team-content-item-title {
    padding-left: 100px;
  }
  .our-team-content-item-text {
    padding-left: 150px;
  }
  .our-team-content-item-twitter {
    padding-left: 180px;
  }
}
</style>