<script setup>
import { RouterLink } from 'vue-router';

const navItems = [
  {
    name: 'Все задачи',
    path: '/tasks'
  },
  {
    name: 'Создать',
    path: '/new'
  }
];
</script>

<template>
  <div class="theNavbar">
    <RouterLink
      class="theNavbar__logo"
      to="/">
      TaskBoard
    </RouterLink>
    <ul class="theNavbar__navbar">
      <ul class="theNavbar__navbarMenu">
        <li
          v-for="({ name, path }, i) in navItems"
          :key="i"
          class="theNavbar__navbarItem">
          <RouterLink
            class="theNavbar__navbarLink"
            :to="path">
            {{ name }}
          </RouterLink>
        </li>
      </ul>
    </ul>
  </div>
</template>

<style scoped>
.theNavbar {
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;

}

.theNavbar__logo {
  font-weight: 700;
  font-size: 20px;
  font-style: italic;
  color: var(--main-textColor);
  font-variant: small-caps;
}


.theNavbar__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-white);
    box-sizing: border-box;
    border-bottom: 1px solid var(--main-grey);
}

.theNavbar__navbarMenu {
    list-style: none;
    display: flex;
}

.theNavbar__navbarItem {
  margin-right: 2rem;
}

.theNavbar__navbarLink {
  color: var(--main-textColor);
  text-decoration: none;
}

.theNavbar__navbarLink:hover, .theNavbar__navbarLink.active {
  border-bottom: 2px solid var(--main-green);
}
</style>