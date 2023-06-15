<template>
  <div class="mainnav-mainnav" v-bind:class="rootClassName">
    <div class="mainnav-framebtn"><span class="mainnav-text">用電管理</span></div>
    <div class="mainnav-framebtn1">
      <span class="mainnav-text1">{{ text }}</span>
    </div>
    <div class="mainnav-framebtn2">
      <span class="mainnav-text2"><span>電費管理</span></span>
    </div>
    <div class="mainnav-framebtn3">
      <span class="mainnav-text4"><span>企業永續</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mainnav',
  props: {
    text: {
      type: String,
      default: '合約管理',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.mainnav-mainnav {
  width: 340px;
  height: 360px;
  display: flex;
  position: relative;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.mainnav-framebtn {
  top: 23px;
  right: -108px;
  width: 340px;
  height: 90px;
  z-index: 3;
  box-shadow: 0px 2px 2px 0px #989898;
  align-items: center;
  background-color: #ffffff;
}
.mainnav-text {
  top: 17px;
  color: #1d5083;
  right: 30px;
  width: 287px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.mainnav-framebtn1 {
  width: 340px;
  height: 90px;
  display: flex;
  padding: 0;
  z-index: 2;
  align-self: auto;
  box-shadow: 0px 2px 2px 0px #989898;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}
.mainnav-text1 {
  top: 101px;
  left: 41px;
  color: rgb(29, 80, 131);
  width: 251px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.mainnav-framebtn2 {
  width: 340px;
  height: 90px;
  display: flex;
  padding: 0;
  z-index: 1;
  align-self: auto;
  box-shadow: 0px 2px 2px 0px #989898;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}
.mainnav-text2 {
  top: 192px;
  left: 41px;
  color: rgba(29, 80, 131, 1);
  width: 251px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.mainnav-framebtn3 {
  width: 340px;
  height: 90px;
  display: flex;
  padding: 0;
  align-self: auto;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}
.mainnav-text4 {
  left: 52px;
  color: rgba(29, 80, 131, 1);
  width: 251px;
  bottom: 14px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.mainnav-root-class-name {
  top: 331.3203125px;
  left: 2px;
  position: absolute;
}
.mainnav-root-class-name1 {
  top: 331.3203125px;
  left: 2px;
  position: absolute;
}
.mainnav-root-class-name2 {
  top: 331.3203125px;
  left: 2px;
  position: absolute;
}
</style>
