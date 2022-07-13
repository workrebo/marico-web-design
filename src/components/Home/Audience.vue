<template>
  <section class="audience bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="audience-title">
            We've helped over 1,000 creatorsre claim control of their audience.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.audience {
  padding: 200px 0px;
  background-image: url("@/assets/image/audience-bcg.png");
}
.audience-title {
  padding: 0 150px;
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 105px;
  text-align: center;
  color: #ffffff;
}
@media screen and (max-width: 1200px) {
  .audience {
    padding: 150px 0px;
  }
  .audience-title {
    padding: 0 20px;
    font-size: 60px;
  }
}
@media screen and (max-width: 625px) {
  .audience {
    padding: 100px 0px;
  }
  .audience-title {
    font-size: 50px;
  }
}
@media screen and (max-width: 465px) {
  .audience {
    padding: 50px 0px;
  }
  .audience-title {
    font-size: 40px;
  }
}
</style>