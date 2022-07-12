<template>
  <section class="experts-agree bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="experts-agree-content">
            <h2 class="experts-agree-title">Experts Agree</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 pt-5">
          <img
            class="experts-agree-photo"
            src="@/assets/image/experts-agree-photo.png"
            alt="photo"
          >
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.experts-agree-content {
  padding-top: 100px;
}
.experts-agree-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
  margin-left: 400px;
}
.experts-agree-photo {
  max-width: 100%;
}
@media screen and (max-width: 1400px) {
  .experts-agree-title {
    margin-left: 300px;
  }
}
@media screen and (max-width: 1200px) {
  .experts-agree-title {
    margin-left: 200px;
  }
}
@media screen and (max-width: 992px) {
  .experts-agree-title {
    margin-left: 100px;
  }
}
@media screen and (max-width: 770px) {
  .experts-agree-title {
    margin-left: 50px;
    font-size: 60px;
  }
}
@media screen and (max-width: 505px) {
  .experts-agree-title {
    margin-left: 10px;
    font-size: 50px;
  }
}
</style>