<template>
  <section class="your-home-page bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="your-home-page-content">
            <span class="your-home-page-subtitle">Your Homepage</span>
            <h2 class="your-home-page-title">
              Your Content. All in <span style="color: #3c82f4">One Spot</span>
            </h2>
            <p class="your-home-page-text-option-1">
              <img src="@/assets/image/bullet-1.svg" alt="bullet" /> Bring all
              of your content together into one homepage.
            </p>
            <p class="your-home-page-text-option-2">
              <img src="@/assets/image/Bullet-2.svg" alt="bullet" /> Your page
              automatically updates whenever you create.
            </p>
            <div class="your-home-page-buttons">
              <a class="your-home-page-buttons-started" href="#"
                >Get Started Now</a
              >
              <a class="your-home-page-buttons-demo" href="#">View A Demo</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 pt-5">
          <div class="your-home-page-photo">
            <img src="@/assets/image/Screen-step-1.png" alt="screen" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.your-home-page {
  padding-top: 180px;
}
.your-home-page-subtitle {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
}
.your-home-page-title {
  padding-top: 80px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
}
.your-home-page-text-option-1 {
  padding-top: 25px;
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 34px;
  color: #ffffff;
  padding-bottom: 10px;
}
.your-home-page-text-option-1 img {
  margin-right: 10px;
}
.your-home-page-text-option-2 {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: #ffffff;
}
.your-home-page-text-option-2 img {
  margin-right: 10px;
}
.your-home-page-buttons {
  padding-top: 66px;
}
.your-home-page-buttons-started {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding: 15px 20px;
  background: #326cf9;
  border-radius: 10%;
  margin-right: 25px;
}
.your-home-page-buttons-demo {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #707070;
  padding: 17px 35px;
  border: 1px solid #707070;
  border-radius: 10%;
}
.your-home-page-buttons-demo:hover {
  color: #326cf9;
}
.your-home-page-buttons-started:hover {
  color: #707070;
}
.your-home-page-photo img {
  max-width: 100%;
}
@media screen and (max-width: 1200px) {
  .your-home-page-photo img {
    padding-top: 200px;
  }
}
@media screen and (max-width: 465px) {
  .your-home-page-buttons-started {
    padding: 10px 15px;
  }
  .your-home-page-buttons-demo {
    padding: 12px 20px;
  }
}
</style>