<template>
  <div class="framebtn-framebtn" v-bind:class="rootClassName">
    <div class="framebtn-homebtn">
      <button class="framebtn-button button">{{ home_btn }}</button>
      <svg viewBox="0 0 1024 1024" class="framebtn-home">
        <path
          d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"
        ></path>
      </svg>
    </div>
    <div class="framebtn-leftbtn">
      <button class="framebtn-button1 button">{{ left_btn }}</button>
      <svg viewBox="0 0 1024 1024" class="framebtn-left">
        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
      </svg>
    </div>
    <div class="framebtn-rightbtn">
      <button class="framebtn-button2 button">{{ right_btn }}</button>
      <svg viewBox="0 0 1024 1024" class="framebtn-right">
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
    </div>
    <div class="framebtn-logoutbtn">
      <button class="framebtn-button3 button">{{ logout_btn }}</button>
      <svg viewBox="0 0 1024 1024" class="framebtn-logout">
        <path
          d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Framebtn',
  props: {
    home_btn: String,
    logout_btn: String,
    rootClassName: String,
    left_btn: String,
    right_btn: String,
  },
}
</script>

<style scoped>
.framebtn-framebtn {
  width: 231.4405517578125px;
  height: 44.775638580322266px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(206, 186, 186, 0);
}
.framebtn-homebtn {
  display: flex;
  align-self: center;
  align-items: stretch;
  flex-direction: row;
  justify-content: center;
}
.framebtn-button {
  width: 39px;
  height: 39px;
  z-index: 100;
  margin-top: auto;
  transition: 0.3s;
  margin-left: auto;
  padding-top: 1rem;
  border-width: 0px;
  margin-right: auto;
  border-radius: var(--dl-radius-radius-round);
  margin-bottom: auto;
  padding-bottom: 1rem;
}
.framebtn-button:hover {
  background-color: #def1ff;
}
.framebtn-home {
  top: 10px;
  fill: #0d4871;
  left: 7px;
  width: 24px;
  height: 24px;
  z-index: 100;
  position: absolute;
}
.framebtn-leftbtn {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.framebtn-button1 {
  width: 39px;
  height: 39px;
  z-index: 100;
  margin-top: auto;
  transition: 0.3s;
  margin-left: auto;
  padding-top: 1rem;
  border-width: 0px;
  margin-right: auto;
  border-radius: var(--dl-radius-radius-round);
  margin-bottom: auto;
  padding-bottom: 1rem;
}
.framebtn-button1:hover {
  background-color: #def1ff;
}
.framebtn-left {
  top: 8px;
  fill: #0d4871;
  left: 66px;
  width: 32px;
  height: 30px;
  z-index: 100;
  position: absolute;
}
.framebtn-rightbtn {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.framebtn-button2 {
  width: 39px;
  height: 39px;
  z-index: 100;
  margin-top: auto;
  margin-left: auto;
  padding-top: 1rem;
  border-width: 0px;
  margin-right: auto;
  border-radius: var(--dl-radius-radius-round);
  margin-bottom: auto;
  padding-bottom: 1rem;
  background-color: #ffffff;
}
.framebtn-right {
  top: 7px;
  fill: #0d4871;
  left: 133px;
  width: 32px;
  height: 30px;
  z-index: 100;
  position: absolute;
}
.framebtn-logoutbtn {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.framebtn-button3 {
  width: 39px;
  height: 39px;
  z-index: 100;
  margin-top: auto;
  transition: 0.3s;
  margin-left: auto;
  padding-top: 1rem;
  border-width: 0px;
  margin-right: auto;
  border-radius: var(--dl-radius-radius-round);
  margin-bottom: auto;
  padding-bottom: 1rem;
}
.framebtn-button3:hover {
  background-color: #def1ff;
}
.framebtn-logout {
  top: 10px;
  fill: #0d4871;
  right: 6px;
  width: 22px;
  height: 25px;
  z-index: 100;
  position: absolute;
  align-self: center;
}
.framebtn-root-class-name {
  top: 12.3203125px;
  right: 6px;
  position: absolute;
  margin-right: 0;
  margin-bottom: 0;
}
.framebtn-root-class-name1 {
  top: 12.3203125px;
  right: 6px;
  position: absolute;
  margin-right: 0;
  margin-bottom: 0;
}
.framebtn-root-class-name2 {
  top: 12.3203125px;
  right: 6px;
  position: absolute;
  margin-right: 0;
  margin-bottom: 0;
}
.framebtn-root-class-name3 {
  width: 100%;
  height: auto;
  max-width: 231.4405517578125px;
  margin-top: auto;
  margin-left: auto;
}
</style>
