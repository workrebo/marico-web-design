<template>
  <section class="sign-up-text bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="sign-up-text-content">
            <h3 class="sign-up-text-content-title">Sign up</h3>
            <p class="sign-up-text-content-paragraph">
              Fill all field for create an account.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="sign-up-form">
                <form action="#">
                  <input
                    class="sign-up-form-text"
                    type="text"
                    placeholder="Username"
                    required
                  /><img
                    class="sign-up-form-icon"
                    src="@/assets/image/form-user.svg"
                    alt="icon"
                  />
                </form>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="sign-up-form">
                <form action="#">
                  <input
                    class="sign-up-form-text"
                    type="email"
                    placeholder="Email Address"
                    required
                  /><img
                    class="sign-up-form-icon"
                    src="@/assets/image/form-email.svg"
                    alt="icon"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="sign-up-form">
                <form action="#">
                  <input
                    class="sign-up-form-text"
                    type="password"
                    placeholder="Password"
                    required
                  /><img
                    class="sign-up-form-icon"
                    src="@/assets/image/Eye.svg"
                    alt="icon"
                  />
                </form>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12">
              <div class="sign-up-form-button">
                <form action="#">
                  <input
                    class="sign-up-form-btn"
                    type="button"
                    value="Sign Up"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="sign-up-content-or-text">
                <h3 class="sign-up-content-or-text-title">Or</h3>
                <p class="sign-up-content-or-text-paragraph">Sign up with...</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="social-content">
                <a class="social-content-btn" href="#"
                  ><img
                    class="social-content-logo"
                    src="@/assets/image/with-facebook.svg"
                    alt="logo"
                  />Sign up with Facebook</a
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="social-content">
                <a class="social-content-btn" href="#"
                  ><img
                    class="social-content-logo"
                    src="@/assets/image/with-google.svg"
                    alt="logo"
                  />Sign up with Google</a
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="social-content">
                <a class="social-content-btn" href="#"
                  ><img
                    class="social-content-logo"
                    src="@/assets/image/with-apple.svg"
                    alt="logo"
                  />Sign up with Apple</a
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="login-account-content-text">
                <p class="login-account-content-text-paragraph">
                  Already have an account? Please Log in.
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
.sign-up-text-content {
  margin-top: 80px;
  margin-left: 450px;
  width: 400px;
  height: 146px;
}
.sign-up-text-content-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
  padding: 0 50px;
}
.sign-up-text-content-paragraph {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
}
.sign-up-form {
  margin-top: 80px;
  margin-left: 120px;
  margin-right: 100px;
  mix-blend-mode: normal;
  opacity: 0.35;
  border-bottom: 1px solid #ffffff;
}
.sign-up-form:hover {
  transform: scale(1.2);
  transition: 0.3s all ease;
}
.sign-up-form-text {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  color: #ffffff;
  background: none;
  border: none;
}
.sign-up-form-icon {
  margin-left: 90px;
}
.sign-up-form-button {
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 100px;
}
.sign-up-form-btn {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 39px;
  color: #ffffff;
  padding: 23px 160px;
  background: #326cf9;
  border-radius: 10px;
  border: 1px solid #326cf9;
}
.sign-up-form-btn:hover {
  background-color: gray;
  transform: scale(1.2);
  transition: 0.3s all ease;
}
.sign-up-content-or-text {
  margin-top: 70px;
  margin-left: 560px;
  width: 200px;
  height: 266px;
}
.sign-up-content-or-text-title {
  font-family: "Poppins-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 75px;
  line-height: 112px;
  color: #ffffff;
  padding: 0 50px 0 25px;
}
.sign-up-content-or-text-paragraph {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
}
.social-content {
  border: 2px solid #ffffff;
  border-radius: 10px;
}
.social-content-logo {
  margin-right: 20px;
}
.social-content-btn {
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;
  color: #ffffff;
  padding: 20px 50px;
}
.login-account-content-text {
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: 500px;
  width: 324px;
  height: 24px;
}
.login-account-content-text-paragraph {
  font-family: "Poppins-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
@media screen and (max-width: 1400px) {
  .sign-up-text-content {
    margin-left: 350px;
  }
  .sign-up-content-or-text {
    margin-left: 460px;
  }
  .sign-up-form-icon {
    margin-left: 0px;
  }
  .sign-up-form-btn {
    padding: 18px 110px;
  }
  .social-content-btn {
    padding: 20px 30px;
  }
  .login-account-content-text {
    margin-left: 400px;
  }
}
@media screen and (max-width: 1200px) {
  .sign-up-text-content {
    margin-left: 250px;
  }
  .sign-up-content-or-text {
    margin-left: 360px;
  }
  .sign-up-form {
    margin-left: 100px;
  }
  .sign-up-form-text {
    font-size: 17px;
  }
  .sign-up-form-button {
    margin-left: 100px;
  }
  .sign-up-form-btn {
    padding: 18px 80px;
  }
  .social-content-btn {
    padding: 20px 0px;
  }
  .login-account-content-text {
    margin-left: 300px;
  }
}
@media screen and (max-width: 992px) {
  .sign-up-text-content {
    margin-left: 150px;
  }
  .sign-up-content-or-text {
    margin-left: 260px;
  }
  .sign-up-form-text {
    font-size: 25px;
  }
  .sign-up-form-icon {
    margin-left: 150px;
  }
  .sign-up-form-button {
    margin-left: 220px;
  }
  .login-account-content-text {
    margin-left: 200px;
  }
}
@media screen and (max-width: 768px) {
  .sign-up-text-content {
    margin-left: 50px;
  }
  .sign-up-content-or-text {
    margin-left: 160px;
  }
  .sign-up-form-text {
    font-size: 22px;
  }
  .sign-up-form-icon {
    margin-left: 0px;
  }
  .sign-up-form-button {
    margin-left: 130px;
  }
  .social-content {
    margin-top: 20px;
  }
  .social-content-btn {
    padding: 20px 110px;
  }
  .login-account-content-text {
    margin-left: 100px;
  }
}
@media screen and (max-width: 540px) {
  .sign-up-form-text {
    font-size: 20px;
  }
  .social-content-btn {
    padding: 20px 50px;
  }
  .login-account-content-text {
    margin-left: 50px;
  }
}
@media screen and (max-width: 520px) {
  .sign-up-text-content {
    margin-left: 30px;
  }
  .sign-up-form-text {
    font-size: 18px;
  }
  .sign-up-form-button {
    margin-left: 100px;
  }
  .sign-up-form-btn {
    padding: 18px 60px;
  }
}
@media screen and (max-width: 490px) {
  .sign-up-form-text {
    font-size: 13px;
  }
}
@media screen and (max-width: 480px) {
  .sign-up-text-content {
    margin-left: 10px;
  }
}
</style>