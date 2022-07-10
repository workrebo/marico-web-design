<template>
  <section class="one-link-collection bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="one-link">
            <span class="one-link-subtitle">One Link</span>
            <h2 class="one-link-title">
              ALL You Create. <span class="one-link-title-other">One Link</span>
            </h2>
            <img
              class="one-link-mobile"
              src="@/assets/image/Mobile-one-link.png"
              alt="mobile"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="one-collect">
            <span class="one-collect-subtitle">Collect Subscribers</span>
            <h2 class="one-collect-title">
              Emails. Phone #s.
              <span class="one-collect-title-other">All Yours.</span>
            </h2>
          </div>
        </div>
        <div class="col-lg-12">
          <a class="one-started" href="#">Get Started </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.one-link-collection {
  padding-top: 175px;
}
.one-link {
  margin-right: 25px;
  margin-bottom: 50px;
}
.one-link-subtitle {
  padding: 33px 0 0 45px;
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #0fc65c;
}
.one-link-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 120px;
  color: #919191;
  padding: 25px 0 0 45px;
}
.one-link-title-other {
  color: #ffffff;
}
.one-link-mobile {
  max-width: 100%;
}

.one-collect-subtitle {
  padding: 34px 0 0 30px;
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #0fc65c;
}
.one-collect-title {
  padding: 96px 0 0 30px;
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 69px;
  line-height: 93px;
  color: #919191;
}
.one-collect-title-other {
  color: #ffffff;
}
.one-started {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  padding: 22px 83px;
  background: #326cf9;
  border-radius: 10%;
  margin-left: 520px;
}
.one-started:hover {
  color: #707070;
}
@media screen and (max-width: 1400px) {
  .one-started {
    margin-left: 445px;
  }
}
@media screen and (max-width: 1200px) {
  .one-started {
    margin-left: 365px;
  }
}
@media screen and (max-width: 992px) {
  .one-started {
    margin-left: 220px;
  }
  .one-collect {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 768px) {
  .one-started {
    margin-left: 120px;
  }
}
@media screen and (max-width: 520px) {
  .one-started {
    margin-left: 100px;
  }
}
@media screen and (max-width: 480px) {
  .one-started {
    margin-left: 60px;
  }
}
</style>