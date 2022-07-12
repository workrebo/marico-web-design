<template>
  <section class="love-marico bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="love-marico-content">
            <h2 class="love-marico-title">Why Creators Love Marico</h2>
            <div class="love-marico-argument">
              <div class="love-marico-argument-item">
                <div class="argument-item-main-content">
                  <img src="@/assets/image/smile-emoji.svg" alt="emojo">
                  <h3 class="love-marico-argument-item-title">
                    Reduced Anxiety
                  </h3>
                </div>
                <p class="love-marico-argument-item-text">
                  Never worry about losing your audience.
                </p>
              </div>
              <div class="love-marico-argument-item">
                <div class="argument-item-main-content">
                  <img src="@/assets/image/happy-emoji.svg" alt="emojo">
                  <h3 class="love-marico-argument-item-title">
                    Lower Workload
                  </h3>
                </div>
                <p class="love-marico-argument-item-text">
                  Just share one link. We'll handle the rest.
                </p>
              </div>
              <div class="love-marico-argument-item">
                <div class="argument-item-main-content">
                  <img src="@/assets/image/party-emoji.svg" alt="emojo">
                  <h3 class="love-marico-argument-item-title">More Time</h3>
                </div>
                <p class="love-marico-argument-item-text">
                  Spend less time on marketing tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.love-marico-content {
  margin: 190px 80px 50px 80px;
}
.love-marico-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
}
.love-marico-argument {
  display: grid;
  grid-template-columns: repeat(3, 375px);
  grid-auto-rows: 95px;
  grid-gap: 30px;
}
.love-marico-argument-item {
  margin: 0 10px;
}
.love-marico-argument-item-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  color: #ffffff;
  margin-left: 10px;
}
.argument-item-main-content {
  display: flex;
}
.love-marico-argument-item-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 33px;
  color: #707070;
}
@media screen and (max-width: 1400px) {
  .love-marico-title {
    font-size: 70px;
  }
  .love-marico-argument {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-auto-rows: 180px;
    grid-gap: 30px;
  }
}
@media screen and (max-width: 1200px) {
  .love-marico-title {
    font-size: 57px;
  }
  .love-marico-argument {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-auto-rows: 180px;
    grid-gap: 30px;
  }
}
@media screen and (max-width: 992px) {
  .love-marico-title {
    font-size: 40px;
  }
  .love-marico-argument {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-auto-rows: 180px;
    grid-gap: 30px;
  }
  .love-marico-argument-item-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 33px;
    color: #707070;
  }
  .love-marico-argument-item-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 52px;
    color: #ffffff;
    margin-left: 10px;
  }
  .argument-item-main-content img {
    width: 50%;
  }
}
@media screen and (max-width: 770px) {
  .love-marico-content {
    margin: 190px 20px 50px 20px;
  }
  .love-marico-title {
    font-size: 35px !important;
  }
}
@media screen and (max-width: 555px) {
  .love-marico-content {
    margin: 190px 0px 50px 0px;
  }
  .love-marico-title {
    font-size: 28px !important;
  }
  .love-marico-argument {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: 180px;
    grid-gap: 55px;
  }
  .love-marico-argument-item-text {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 33px;
    color: #707070;
  }
  .love-marico-argument-item-title {
    font-family: "Poppins-SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 52px;
    color: #ffffff;
    margin-left: 10px;
  }
  .argument-item-main-content img {
    width: 30%;
  }
}
</style>