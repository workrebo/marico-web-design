<template>
  <section class="heading-text bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="heading-text-title">Content Sources</h2>
          <p class="heading-text-paragraph">
            Connect these sources to your Marico homepage.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.heading-text {
  padding-top: 120px;
}
.heading-text-title {
  padding-left: 140px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 120px;
  line-height: 180px;
  color: #ffffff;
}
.heading-text-paragraph {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
  padding-left: 270px;
}
@media screen and (max-width: 1400px) {
  .heading-text-title {
    padding-left: 0px;
  }
  .heading-text-paragraph {
    padding-left: 140px;
  }
}
@media screen and (max-width: 1200px) {
  .heading-text-title {
    font-size: 100px;
  }
  .heading-text-paragraph {
    padding-left: 50px;
  }
}
@media screen and (max-width: 992px) {
  .heading-text {
    padding-top: 50px;
  }
  .heading-text-title {
    font-size: 80px;
  }
  .heading-text-paragraph {
    padding-left: 0px;
    font-size: 27px;
  }
}
@media screen and (max-width: 768px) {
  .heading-text-title {
    font-size: 60px;
  }
  .heading-text-paragraph {
    font-size: 20px;
  }
}
@media screen and (max-width: 530px) {
  .heading-text-title {
    font-size: 47px;
  }
  .heading-text-paragraph {
    font-size: 16px;
  }
}
</style>