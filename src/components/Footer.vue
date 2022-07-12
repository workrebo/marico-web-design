<template>
  <footer class="bg-dark">
    <div class="container">
      <nav class="footer-menu">
        <ul class="menu-list">
          <li class="menu-list-item-logo">
            <router-link tag="a" to="/" href="#"
              ><img src="@/assets/image/Logofooter.svg" alt="logofooter"></router-link>
          </li>
          <li class="menu-list-item">
            <router-link tag="a" to="/about" href="#">About</router-link>
          </li>
          <li class="menu-list-item">
            <router-link tag="a" to="/pricing" href="#">Pricing</router-link>
          </li>
          <li class="menu-list-item">
            <router-link tag="a" to="/blog" href="#">Blog</router-link>
          </li>
          <li class="menu-list-item">
            <router-link tag="a" to="/login" href="#">Sign in</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss">
.menu-list {
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
}
.menu-list-item-logo {
  margin-right: 652px;
}
.menu-list-item {
  padding-top: 35px;
  margin-right: 45px;
}
.menu-list-item a {
  font-family: "Poppins-Medium";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #707070 !important;
}
.menu-list-item a:hover {
  color: #306ef7 !important;
  transform: scale(1.2) !important;
  transition: all 0.5s ease !important;
}
@media screen and (max-width: 1400px) {
  .menu-list-item-logo {
    margin-right: 420px;
  }
}
@media screen and (max-width: 1200px) {
  .menu-list-item-logo {
    margin-right: 220px;
  }
}
@media screen and (max-width: 993px) {
  .menu-list-item-logo {
    margin-right: 100px;
  }
}
@media screen and (max-width: 770px) {
  .menu-list {
    display: block;
  }
}
</style>