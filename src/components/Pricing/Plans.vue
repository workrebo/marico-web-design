<template>
  <section class="plans bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="plans-content">
            <h2 class="plans-content-title">
              Choose the plan that's right for you.
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-12">
          <div class="plans-started-content">
            <h4 class="plans-started-title">Basic</h4>
            <p class="plans-started-subtitle">Build your online home</p>
            <h3 class="plans-started-price">$14 per month</h3>
            <h5 class="plans-started-subtitle-subscribes">
              Collect Unlimited subscribers
            </h5>
            <p class="plans-started-emails">2,000 free monthl emails</p>
            <p class="plans-started-condition">
              Purchase more for $0.002 per email
            </p>
            <h5 class="plans-started-subtitle-features">
              Everything in starter, plus
            </h5>
            <p class="plans-started-features-item">
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Remove Wavium branding
            </p>
            <p
              class="plans-started-features-item plans-started-features-item-mb"
            >
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Embed Wavium on your own domain
            </p>
            <a class="plans-started-button" href="#">Start Free 14-day Trial</a>
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="plans-basic-content">
            <h4 class="plans-basic-title">Starer</h4>
            <p class="plans-basic-subtitle">Perfect for tying out Wavium</p>
            <h3 class="plans-basic-price">Free</h3>
            <h5 class="plans-basic-subtitle-subscribes">
              Collect Unlimited subscribers
            </h5>
            <p class="plans-basic-emails">500 monthly emails</p>
            <p class="plans-basic-condition">Upgrade to send more emails</p>
            <h5 class="plans-basic-subtitle-features">Key features</h5>
            <p class="plans-basic-features-item">
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Automatic updating home page
            </p>
            <p class="plans-basic-features-item plans-basic-features-item-mb">
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Unlimited sources + posts
            </p>
            <a class="plans-basic-button" href="#">Start For Free</a>
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="plans-complete-content">
            <h4 class="plans-complete-title">Complete</h4>
            <p class="plans-complete-subtitle">Enhanced engagement</p>
            <h3 class="plans-complete-price">$29 per month</h3>
            <h5 class="plans-complete-subtitle-subscribes">
              Collect Unlimited subscribers
            </h5>
            <p class="plans-complete-emails">10,000 free monthly emails</p>
            <p class="plans-complete-condition">
              Purchase more for $0.002 per email
            </p>
            <h5 class="plans-complete-subtitle-features">
              Everything in basic, plus
            </h5>
            <p class="plans-complete-features-item">
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Collect text massage subscribers
            </p>
            <p
              class="
                plans-complete-features-item plans-complete-features-item-mb
              "
            >
              <img src="@/assets/image/pricing-shape.svg" alt="shape" />
              Share posts over text massage
            </p>
            <a class="plans-complete-button" href="#"
              >Start Free 14-day Trial</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="get-started-content">
            <img
              src="@/assets/image/Logo-get-started.svg"
              alt="logo"
              class="get-started-content-logo"
            />
            <h2 class="get-started-content-title">Get Started Now</h2>
            <p class="get-started-content-text">
              Setup is easy and takes under 5 minutes.
            </p>
            <router-link
              tag="a"
              to="/login"
              href="#"
              class="get-started-content-button"
              >Get Started Now</router-link
            >
            <p class="get-started-content-text-other">
              <img src="@/assets/image/Dothome.svg" alt="dothome" />
              <span class="get-started-content-number">1000+</span>
              <span class="get-started-content-text-span"
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
.plans-content {
  padding-top: 125px;
}
.plans-content-title {
  padding-left: 125px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 112px;
  color: #ffffff;
}
.plans-started-content {
  margin-top: 125px;
  border: 2px solid #131313;
  padding-bottom: 50px;
  border-radius: 10px;
}
.plans-started-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  color: #ffffff;
  padding: 38px 0 0 35px;
}
.plans-started-subtitle {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #b4b1b1;
  padding-left: 15px;
}
.plans-started-price {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  color: #ffffff;
  padding: 40px 0 0 30px;
}
.plans-started-subtitle-subscribes {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 105px 0 0 9px;
}
.plans-started-emails {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 9px 0 0 9px;
}
.plans-started-condition {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #b4b1b1;
  padding: 45px 0 0 40px;
}
.plans-started-subtitle-features {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 45px 0px 0px 20px;
}
.plans-started-features-item {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #ffffff;
  padding: 24px 0 0 20px;
}
.plans-started-features-item-mb {
  margin-bottom: 60px;
}
.plans-started-button {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 30px 10px;
  border: 3.5px solid #4681e7;
  margin-left: 40px;
  border-radius: 10px;
}
.plans-started-button:hover {
  background-color: #8affcd;
}
.plans-basic-content {
  margin-top: 125px;
  border: 2px solid #131313;
  padding-bottom: 50px;
  border-radius: 10px;
}
.plans-basic-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  color: #ffffff;
  padding: 38px 0 0 35px;
}
.plans-basic-subtitle {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #b4b1b1;
  padding-left: 15px;
}
.plans-basic-price {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 69px;
  line-height: 104px;
  color: #ffffff;
  padding: 14px 0 0 37px;
}
.plans-basic-subtitle-subscribes {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 105px 0 0 9px;
}
.plans-basic-emails {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 9px 0 0 9px;
}
.plans-basic-condition {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #b4b1b1;
  padding: 45px 0 0 40px;
}
.plans-basic-subtitle-features {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 45px 0px 0px 20px;
}
.plans-basic-features-item {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #ffffff;
  padding: 24px 0 0 20px;
}
.plans-basic-features-item-mb {
  margin-bottom: 125px;
}
.plans-basic-button {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 30px 80px;
  border: 3.5px solid #4681e7;
  margin-left: 40px;
  border-radius: 10px;
}
.plans-basic-button:hover {
  background-color: #8affcd;
}
.plans-complete-content {
  margin-top: 125px;
  border: 2px solid #3c82f4;
  background: #3c82f4;
  padding-bottom: 50px;
  border-radius: 10px;
}
.plans-complete-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 75px;
  color: #ffffff;
  padding: 38px 0 0 35px;
}
.plans-complete-subtitle {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #b4b1b1;
  padding-left: 15px;
}
.plans-complete-price {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  color: #ffffff;
  padding: 40px 0 0 30px;
}
.plans-complete-subtitle-subscribes {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 105px 0 0 9px;
}
.plans-complete-emails {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 9px 0 0 9px;
}
.plans-complete-condition {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #b4b1b1;
  padding: 45px 0 0 40px;
}
.plans-complete-subtitle-features {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  padding: 45px 0px 0px 20px;
}
.plans-complete-features-item {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #ffffff;
  padding: 24px 0 0 20px;
}
.plans-complete-features-item-mb {
  margin-bottom: 60px;
}
.plans-complete-button {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  color: #3c82f4;
  padding: 30px 15px;
  border: 3.5px solid #ffffff;
  margin-left: 40px;
  border-radius: 10px;
  background-color: #ffffff;
}
.plans-complete-button:hover {
  background-color: #8affcd;
}
@media screen and (max-width: 1400px) {
  .plans-content-title {
    padding-left: 20px;
  }
  .plans-started-button {
    margin-left: 15px;
  }
  .plans-basic-button {
    margin-left: 4px;
  }
  .plans-complete-button {
    margin-left: 10px;
  }
  .plans-basic-features-item-mb {
    margin-bottom: 200px;
  }
  .plans-started-features-item-mb {
    margin-bottom: 97px;
  }
}
@media screen and (max-width: 1200px) {
  .plans-content-title {
    padding-left: 20px;
    font-size: 50px;
    line-height: 70px;
  }
  .plans-started-title {
    padding-left: 400px;
  }
  .plans-started-subtitle {
    padding-left: 300px;
  }
  .plans-started-price {
    padding-left: 275px;
  }
  .plans-started-subtitle-subscribes {
    padding-left: 260px;
  }
  .plans-started-emails {
    padding-left: 300px;
  }
  .plans-started-condition {
    padding-left: 255px;
  }
  .plans-started-subtitle-features {
    padding-left: 295px;
  }
  .plans-started-features-item {
    padding: 30px 0 0 250px;
  }
  .plans-started-button {
    margin-left: 320px;
  }
  .plans-basic-title {
    padding-left: 400px;
  }
  .plans-basic-subtitle {
    padding-left: 300px;
  }
  .plans-basic-price {
    padding-left: 405px;
  }
  .plans-basic-subtitle-subscribes {
    padding-left: 260px;
  }
  .plans-basic-emails {
    padding-left: 300px;
  }
  .plans-basic-condition {
    padding-left: 255px;
  }
  .plans-basic-subtitle-features {
    padding-left: 295px;
  }
  .plans-basic-features-item {
    padding: 30px 0 0 250px;
  }
  .plans-basic-button {
    margin-left: 320px;
  }
  .plans-complete-title {
    padding-left: 400px;
  }
  .plans-complete-subtitle {
    padding-left: 300px;
  }
  .plans-complete-price {
    padding-left: 275px;
  }
  .plans-complete-subtitle-subscribes {
    padding-left: 260px;
  }
  .plans-complete-emails {
    padding-left: 300px;
  }
  .plans-complete-condition {
    padding-left: 255px;
  }
  .plans-complete-subtitle-features {
    padding-left: 295px;
  }
  .plans-complete-features-item {
    padding: 30px 0 0 250px;
  }
  .plans-complete-button {
    margin-left: 320px;
  }
}
@media screen and (max-width: 992px) {
  .plans-content-title {
    padding-left: 0px;
    font-size: 38px;
    line-height: 80px;
  }
  .plans-content {
    padding-top: 50px;
  }
  .plans-started-title {
    padding-left: 300px;
  }
  .plans-started-subtitle {
    padding-left: 200px;
  }
  .plans-started-price {
    padding-left: 175px;
  }
  .plans-started-subtitle-subscribes {
    padding-left: 160px;
  }
  .plans-started-emails {
    padding-left: 200px;
  }
  .plans-started-condition {
    padding-left: 155px;
  }
  .plans-started-subtitle-features {
    padding-left: 195px;
  }
  .plans-started-features-item {
    padding-left: 150px;
  }
  .plans-started-button {
    margin-left: 210px;
  }
  .plans-basic-title {
    padding-left: 300px;
  }
  .plans-basic-subtitle {
    padding-left: 200px;
  }
  .plans-basic-price {
    padding-left: 300px;
  }
  .plans-basic-subtitle-subscribes {
    padding-left: 160px;
  }
  .plans-basic-emails {
    padding-left: 200px;
  }
  .plans-basic-condition {
    padding-left: 155px;
  }
  .plans-basic-subtitle-features {
    padding-left: 195px;
  }
  .plans-basic-features-item {
    padding-left: 150px;
  }
  .plans-basic-button {
    margin-left: 210px;
  }
  .plans-complete-title {
    padding-left: 235px;
  }
  .plans-complete-subtitle {
    padding-left: 200px;
  }
  .plans-complete-price {
    padding-left: 175px;
  }
  .plans-complete-subtitle-subscribes {
    padding-left: 160px;
  }
  .plans-complete-emails {
    padding-left: 200px;
  }
  .plans-complete-condition {
    padding-left: 155px;
  }
  .plans-complete-subtitle-features {
    padding-left: 195px;
  }
  .plans-complete-features-item {
    padding-left: 150px;
  }
  .plans-complete-button {
    margin-left: 210px;
  }
}
@media screen and (max-width: 768px) {
  .plans-content-title {
    padding-left: 0px;
    font-size: 28px;
    line-height: 60px;
  }
  .plans-content {
    padding-top: 20px;
  }
  .plans-started-title {
    padding-left: 200px;
  }
  .plans-started-subtitle {
    padding-left: 100px;
  }
  .plans-started-price {
    padding-left: 75px;
  }
  .plans-started-subtitle-subscribes {
    padding-left: 60px;
  }
  .plans-started-emails {
    padding-left: 100px;
  }
  .plans-started-condition {
    padding-left: 55px;
  }
  .plans-started-subtitle-features {
    padding-left: 95px;
  }
  .plans-started-features-item {
    padding-left: 50px;
  }
  .plans-started-button {
    margin-left: 100px;
  }
  .plans-basic-title {
    padding-left: 200px;
  }
  .plans-basic-subtitle {
    padding-left: 100px;
  }
  .plans-basic-price {
    padding-left: 200px;
  }
  .plans-basic-subtitle-subscribes {
    padding-left: 60px;
  }
  .plans-basic-emails {
    padding-left: 100px;
  }
  .plans-basic-condition {
    padding-left: 55px;
  }
  .plans-basic-subtitle-features {
    padding-left: 95px;
  }
  .plans-basic-features-item {
    padding-left: 50px;
  }
  .plans-basic-button {
    margin-left: 100px;
  }
  .plans-complete-title {
    padding-left: 135px;
  }
  .plans-complete-subtitle {
    padding-left: 100px;
  }
  .plans-complete-price {
    padding-left: 75px;
  }
  .plans-complete-subtitle-subscribes {
    padding-left: 60px;
  }
  .plans-complete-emails {
    padding-left: 100px;
  }
  .plans-complete-condition {
    padding-left: 55px;
  }
  .plans-complete-subtitle-features {
    padding-left: 95px;
  }
  .plans-complete-features-item {
    padding-left: 50px;
  }
  .plans-complete-button {
    margin-left: 100px;
  }
}
@media screen and (max-width: 540px) {
  .plans-content-title {
    padding-left: 0;
    font-size: 22px;
    line-height: 60px;
  }
  .plans-started-title {
    padding-left: 150px;
  }
  .plans-started-subtitle {
    padding-left: 40px;
  }
  .plans-started-price {
    padding-left: 17px;
  }
  .plans-started-subtitle-subscribes {
    font-size: 26px;
    padding-left: 3px;
  }
  .plans-started-emails {
    padding-left: 30px;
  }
  .plans-started-condition {
    padding-left: 0;
    font-size: 22px;
  }
  .plans-started-subtitle-features {
    padding-left: 20px;
  }
  .plans-started-features-item {
    padding-left: 30px;
  }
  .plans-started-button {
    margin-left: 40px;
  }
  .plans-basic-title {
    padding-left: 140px;
  }
  .plans-basic-subtitle {
    padding-left: 0px;
  }
  .plans-basic-price {
    padding-left: 140px;
  }
  .plans-basic-subtitle-subscribes {
    font-size: 26px;
    padding-left: 3px;
  }
  .plans-basic-emails {
    padding-left: 30px;
  }
  .plans-basic-condition {
    padding-left: 0;
    font-size: 22px;
  }
  .plans-basic-subtitle-features {
    padding-left: 20px;
  }
  .plans-basic-features-item {
    padding-left: 30px;
  }
  .plans-basic-button {
    margin-left: 25px;
  }
  .plans-complete-title {
    padding-left: 75px;
  }
  .plans-complete-subtitle {
    padding-left: 40px;
  }
  .plans-complete-price {
    padding-left: 17px;
  }
  .plans-complete-subtitle-subscribes {
    font-size: 26px;
    padding-left: 3px;
  }
  .plans-complete-emails {
    padding-left: 0px;
  }
  .plans-complete-condition {
    padding-left: 0;
    font-size: 22px;
  }
  .plans-complete-subtitle-features {
    padding-left: 20px;
  }
  .plans-complete-features-item {
    padding-left: 30px;
  }
  .plans-complete-button {
    margin-left: 40px;
  }
}
</style>