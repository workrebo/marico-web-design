<template>
  <section class="company-logo bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <img
            class="company-logo-photo"
            src="@/assets/image/Company_logo.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.company-logo-photo {
  padding-top: 100px;
  padding-left: 460px;
}
@media screen and (max-width: 1400px) {
  .company-logo-photo {
    padding-left: 400px;
  }
}
@media screen and (max-width: 1200px) {
  .company-logo-photo {
    padding-left: 280px;
  }
}
@media screen and (max-width: 992px) {
  .company-logo-photo {
    padding-left: 150px;
  }
}
@media screen and (max-width: 768px) {
  .company-logo-photo {
    padding-left: 100px;
  }
}
@media screen and (max-width: 500px) {
  .company-logo-photo {
    padding-left: 50px;
  }
}
</style>