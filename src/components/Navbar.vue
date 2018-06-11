<template>
  <div>
  <b-navbar type="dark" variant="info" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">First Vue App</b-navbar-brand>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="/#/PersonalInfo">Account</b-dropdown-item>
          <b-dropdown-item href="/#/PersonalInfoSetting">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link{ //.router-link-active 指定
  color: red;
  text: white
}
</style>
