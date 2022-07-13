<template>
  <section class="get-started bg-dark">
    <div class="container">
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
.get-started-content {
  margin: 180px 200px 180px 200px;
}
.get-started-content-logo {
  padding-left: 350px;
}
.get-started-content-title {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 150px;
  color: #ffffff;
  padding-left: 30px;
}
.get-started-content-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  margin-bottom: 50px;
}
.get-started-content-button {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
  padding: 30px 110px;
  background: #326cf9;
  border-radius: 10%;
  margin-left: 210px;
}
.get-started-content-button:hover {
  color: #707070;
}
.get-started-content-text-other {
  margin-top: 70px;
  padding-left: 60px;
}
.get-started-content-number {
  font-family: "Poppins-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  padding: 0 10px;
}
.get-started-content-text-span {
  font-family: "Poppins-Regular";
  padding-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 57px;
  text-align: center;
  color: #707070;
}
@media screen and (max-width: 1400px) {
  .get-started-content {
    margin: 180px 100px 180px 100px;
  }
}
@media screen and (max-width: 1200px) {
  .get-started-content {
    margin: 180px 0px 180px 0px;
  }
}
@media screen and (max-width: 992px) {
  .get-started-content {
    margin: 180px 0px 180px 0px;
  }
  .get-started-content-logo {
    padding-left: 270px;
  }
  .get-started-content-title {
    font-size: 80px;
    padding-left: 15px;
  }
  .get-started-content-text {
    font-size: 33px;
  }
  .get-started-content-button {
    margin-left: 120px;
  }
  .get-started-content-text-other {
    padding-left: 20px;
  }
  .get-started-content-number {
    font-size: 30px;
  }
  .get-started-content-text-span {
    font-size: 35px;
  }
}
@media screen and (max-width: 768px) {
  .get-started-content {
    margin: 180px 0px 180px 0px;
  }
  .get-started-content-logo {
    padding-left: 180px;
  }
  .get-started-content-title {
    font-size: 61px;
    padding-left: 0px;
  }
  .get-started-content-text {
    font-size: 25px;
  }
  .get-started-content-button {
    margin-left: 23px;
  }
  .get-started-content-text-other {
    padding-left: 0px;
  }
  .get-started-content-number {
    font-size: 25px;
  }
  .get-started-content-text-span {
    font-size: 25px;
  }
  @media screen and (max-width: 550px) {
    .get-started-content {
      margin: 100px 0px 100px 0px;
    }
    .get-started-content-logo {
      padding-left: 110px;
    }
    .get-started-content-title {
      font-size: 45px;
      padding-left: 10px;
    }
    .get-started-content-text {
      font-size: 17px;
      margin-left: 20px;
    }
    .get-started-content-button {
      margin-left: 0px;
      padding: 20px 70px;
    }
    .get-started-content-text-other {
      padding-left: 0px;
    }
    .get-started-content-number {
      font-size: 17px;
    }
    .get-started-content-text-span {
      font-size: 17px;
    }
  }
}
</style>