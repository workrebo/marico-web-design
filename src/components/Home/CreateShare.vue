<template>
  <section class="create-share bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="create-share-content">
            <span class="create-share-subtitle">Create & Share</span>
            <h2 class="create-share-title">
              Reach Your Audience <span style="color: #3c82f4">Directly.</span>
            </h2>
            <p class="create-share-text-option-1">
              <img src="@/assets/image/bullet-1.svg" alt="bullet" /> Embed
              content or create something new to share.
            </p>
            <p class="create-share-text-option-2">
              <img src="@/assets/image/Bullet-2.svg" alt="bullet" /> Share
              content over email, text message or your homepage.
            </p>
            <div class="create-buttons">
              <router-link
                tag="a"
                to="/login"
                class="create-share-buttons-started"
                href="#"
                >Get Started Now</router-link
              >
              <router-link
                tag="a"
                to="/home"
                class="create-share-buttons-demo"
                href="#"
                >View A Demo</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 pt-5">
          <div class="create-share-photo">
            <img src="@/assets/image/create-share.png" alt="screen" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.create-share {
  padding-top: 180px;
}
.create-share-subtitle {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
}
.create-share-title {
  padding-top: 80px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
}
.create-share-text-option-1 {
  padding-top: 25px;
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 34px;
  color: #ffffff;
  padding-bottom: 10px;
}
.create-share-text-option-1 img {
  margin-right: 10px;
}
.create-share-text-option-2 {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: #ffffff;
  margin-bottom: 60px;
}
.create-share-text-option-2 img {
  margin-right: 10px;
}
.create-share-buttons {
  padding-top: 66px;
}
.create-share-buttons-started {
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
.create-share-buttons-demo {
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
.create-share-buttons-demo:hover {
  color: #326cf9;
}
.create-share-buttons-started:hover {
  color: #707070;
}
.create-share-photo img {
  max-width: 100%;
}
@media screen and (max-width: 1200px) {
  .create-share-photo img {
    padding-top: 200px;
  }
}
@media screen and (max-width: 465px) {
  .create-share-buttons-started {
    padding: 10px 15px;
  }
  .create-share-buttons-demo {
    padding: 12px 20px;
  }
}
</style>