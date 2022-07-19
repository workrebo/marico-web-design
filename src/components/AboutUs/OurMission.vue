<template>
  <section class="our-mission bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="our-mission-content">
            <h5 class="our-mission-content-subtitle">OUR MISSION</h5>
            <h3 class="our-mission-content-title">
              We exist to help creators own their audience.
            </h3>
            <p class="our-mission-content-text">
              We believe that social platforms are taking advantage of creators.
              We want to change that and help creators fight back.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.our-mission-content {
  width: 995px;
  height: 335px;
  margin-left: 150px;
}
.our-mission-content-subtitle {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  color: #306ef7;
  padding-left: 415px;
}
.our-mission-content-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  text-align: center;
  color: #ffffff;
  padding: 0 25px;
}
.our-mission-content-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
}
@media screen and (max-width: 1400px) {
  .our-mission-content {
    margin-left: 50px;
  }
}
@media screen and (max-width: 1200px) {
  .our-mission-content {
    margin-left: 0px;
    width: 855px;
    height: 535px;
  }
  .our-mission-content-subtitle {
    padding-left: 350px;
  }
}
@media screen and (max-width: 992px) {
  .our-mission-content {
    margin-left: 0px;
    width: 655px;
    height: 535px;
  }
  .our-mission-content-subtitle {
    padding-left: 250px;
  }
}
@media screen and (max-width: 768px) {
  .our-mission-content {
    margin-left: 0px;
    width: 555px;
    height: 800px;
  }
  .our-mission-content-subtitle {
    padding-left: 200px;
  }
}
@media screen and (max-width: 610px) {
  .our-mission-content {
    margin-left: 40px;
    width: 455px;
    height: 850px;
  }
  .our-mission-content-subtitle {
    padding-left: 150px;
  }
}
@media screen and (max-width: 520px) {
  .our-mission-content {
    margin-left: 0px;
    width: 400px;
    height: 1000px;
  }
  .our-mission-content-subtitle {
    padding-left: 120px;
  }
}
</style>