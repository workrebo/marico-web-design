<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark pt-4 pb-4">
      <div class="container">
        <router-link tag="a" to="/" class="navbar-brand" href="#"
          ><img src="@/assets/image/Logo.svg" alt="Logo"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <div class="link">
              <li class="nav-item link-item">
                <router-link
                  tag="a"
                  to="/"
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  >Home</router-link
                >
              </li>
              <li class="nav-item link-item">
                <router-link tag="a" to="/about" class="nav-link" href="#"
                  >About</router-link
                >
              </li>
              <li class="nav-item link-item">
                <router-link tag="a" to="/pricing" class="nav-link" href="#"
                  >Pricing</router-link
                >
              </li>
              <li class="nav-item link-item">
                <router-link tag="a" to="/blog" class="nav-link" href="#"
                  >Blog</router-link
                >
              </li>
            </div>
            <div class="button">
              <li class="nav-item link-item button-item-login">
                <router-link tag="a" to="/login" class="nav-link" href="#"
                  >Login</router-link
                >
              </li>
              <li class="nav-item button-item-signup">
                <router-link tag="a" to="/signup" class="nav-link" href="#"
                  >Sign Up</router-link
                >
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<style lang="scss">
.link {
  display: flex;
  margin-left: 300px;
  margin-right: 284px;
}
.link-item {
  padding-top: 15px;
}
.nav-link {
  font-family: "Poppins-Medium" !important;
  font-weight: 500 !important;
  font-size: 20px !important;
  line-height: 30px !important;
  color: #707070 !important;
}
.nav-link:hover {
  color: #306ef7 !important;
  transform: scale(1.2);
  transition: all 0.5s ease;
}
.button {
  display: flex;
}
.button-item-login {
  font-family: "Poppins-Medium" !important;
  font-weight: 500 !important;
  font-size: 20px !important;
  line-height: 30px !important;
  color: #707070 !important;
}

.button-item-signup {
  font-family: "Poppins-Medium" !important;
  font-weight: 500 !important;
  font-size: 20px !important;
  line-height: 30px !important;
  padding: 12px 20px !important;
  background: #306ef7 !important;
  border-radius: 10% !important;
}
.button-item-signup:hover {
  transform: rotate(360deg);
  transition: all 0.7s ease;
}
.button-item-signup a {
  color: #ffffff !important;
}
.button-item-signup a:hover {
  color: #ffffff !important;
}
@media screen and (max-width: 1400px) {
  .link {
    margin-right: 204px;
    margin-left: 120px;
  }
}
@media screen and (max-width: 1200px) {
  .link {
    margin-right: 50px;
    margin-left: 70px;
  }
}
@media screen and (max-width: 992px) {
  .link {
    display: block;
    margin: 0 0 0 0;
  }
  .button {
    display: block;
  }
}
</style>