<template>
  <div class="page1-container">
    <div class="page1-home-page">
      <div class="page1-container1">
        <div class="page1-container2">
          <img
            alt="image"
            src="/playground_assets/%E7%B6%A0%E9%9B%BB%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0-900h.png"
            class="page1-greenlogo"
          />
        </div>
        <div class="page1-container3">
          <img
            alt="image"
            src="/playground_assets/%E7%94%A8%E9%9B%BB%E7%AE%A1%E7%90%86-200h.png"
            class="page1-image"
          />
          <app-framebtn rootClassName="framebtn-root-class-name3"></app-framebtn>
        </div>
      </div>
      <div class="page1-side-nav">
        <img
          alt="image"
          src="/playground_assets/auo%20logo-900h.png"
          class="page1-auologo"
        />
        <ul class="page1-nav list">
          <li class="page1-page1 Content list-item">
            <p class="page1-text">用電管理</p>
          </li>
          <li class="page1-page2 list-item Content">
            <p class="page1-text1">合約管理</p>
          </li>
          <li class="page1-page3 Content list-item">
            <p class="page1-text2">電費管理</p>
          </li>
          <li class="page1-page4 Content list-item">
            <p class="page1-text3">
              <span>企業責任</span>
              <br />
              <br />
            </p>
          </li>
        </ul>
      </div>
      <div class="page1-main-content"><div class="page1-container4"></div></div>
    </div>
  </div>
</template>

<script>
import AppFramebtn from '../components/framebtn'

export default {
  name: 'Page1',
  components: {
    AppFramebtn,
  },
  metaInfo: {
    title: 'Page1 - Green Energy ',
    meta: [
      {
        name: 'description',
        content: 'Green Energy Platform',
      },
      {
        property: 'og:title',
        content: 'Page1 - Green Energy ',
      },
      {
        property: 'og:description',
        content: 'Green Energy Platform',
      },
    ],
  },
}
</script>

<style scoped>
.page1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(315deg, rgb(0, 27, 53) 0.00%,rgb(33, 86, 140) 99.00%);
}
.page1-home-page {
  width: 100%;
  height: 840px;
  display: flex;
  position: relative;
  max-width: 1920px;
  min-width: 483px;
  max-height: 840px;
  align-items: flex-start;
}
.page1-container1 {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  display: flex;
  position: absolute;
  margin-top: 1%;
  align-items: flex-start;
}
.page1-container2 {
  flex: 0 0 auto;
  width: 20%;
  display: flex;
  align-items: flex-start;
}
.page1-greenlogo {
  width: 80%;
  align-self: center;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0%;
}
.page1-container3 {
  flex: 0 0 auto;
  width: 76%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
}
.page1-image {
  width: 80%;
  max-width: 180px;
  margin-top: auto;
  object-fit: cover;
}
.page1-side-nav {
  flex: 0 0 auto;
  width: 20%;
  height: 100%;
  display: flex;
  margin-top: 5%;
  align-items: flex-start;
  flex-direction: column;
}
.page1-auologo {
  width: 90%;
  max-width: 300px;
  align-self: center;
  object-fit: cover;
  margin-bottom: 20px;
}
.page1-nav {
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
}
.page1-page1 {
  width: 85%;
  height: 90px;
  z-index: 3;
  position: relative;
  max-width: 300px;
  box-shadow: 0px 2px 2px 0px #929292;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5fdff;
}
.page1-page1:focus {
  color: #ffffff;
  background-color: #6182a4;
}
.page1-page1:hover {
  color: #ffffff;
  background-color: #d5e8ff;
}
.page1-text {
  color: rgb(22, 68, 138);
  width: fit-content;
  height: auto;
  margin: auto;
  font-size: 40px;
  font-style: normal;
  margin-top: auto;
  transition: 0.3s;
  font-weight: 600;
  line-height: 90px;
}
.page1-text:focus {
  color: #ffffff;
}
.page1-page2 {
  width: 85%;
  height: 90px;
  z-index: 2;
  position: relative;
  max-width: 300px;
  box-shadow: 0px 2px 2px 0px #929292;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5fdff;
}
.page1-page2:focus {
  color: #ffffff;
  background-color: #6182a4;
}
.page1-page2:hover {
  color: #ffffff;
  background-color: #d5e8ff;
}
.page1-text1 {
  color: rgb(22, 68, 138);
  width: fit-content;
  height: auto;
  font-size: 40px;
  font-style: normal;
  margin-top: auto;
  transition: 0.3s;
  font-weight: 600;
  line-height: 90px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.page1-text1:focus {
  color: #ffffff;
}
.page1-page3 {
  width: 85%;
  height: 90px;
  z-index: 1;
  position: relative;
  max-width: 300px;
  box-shadow: 0px 2px 2px 0px #929292;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5fdff;
}
.page1-page3:focus {
  color: #ffffff;
  background-color: #6182a4;
}
.page1-page3:hover {
  color: #ffffff;
  background-color: #d5e8ff;
}
.page1-text2 {
  color: rgb(22, 68, 138);
  width: fit-content;
  height: auto;
  font-size: 40px;
  font-style: normal;
  margin-top: auto;
  transition: 0.3s;
  font-weight: 600;
  line-height: 90px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.page1-text2:focus {
  color: #ffffff;
}
.page1-page4 {
  width: 85%;
  height: 90px;
  position: relative;
  max-width: 300px;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5fdff;
}
.page1-page4:focus {
  color: #ffffff;
  background-color: #6182a4;
}
.page1-page4:hover {
  color: #ffffff;
  background-color: #d5e8ff;
}
.page1-text3 {
  color: rgb(22, 68, 138);
  width: fit-content;
  height: auto;
  font-size: 40px;
  font-style: normal;
  margin-top: auto;
  transition: 0.3s;
  font-weight: 600;
  line-height: 90px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.page1-text3:focus {
  color: #ffffff;
}
.page1-main-content {
  flex: 0 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
  align-items: flex-start;
}
.page1-container4 {
  flex: 0 0 auto;
  width: 95%;
  height: 748px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  background-color: #85a1b4;
}
@media(max-width: 1600px) {
  .page1-page1 {
    width: 85%;
  }
  .page1-text {
    font-size: 40px;
  }
  .page1-page2 {
    width: 85%;
  }
  .page1-text1 {
    color: rgb(22, 68, 138);
    font-style: normal;
    font-weight: 600;
    line-height: 90px;
  }
  .page1-page3 {
    width: 85%;
  }
  .page1-text2 {
    font-size: 40px;
  }
  .page1-page4 {
    width: 85%;
  }
  .page1-text3 {
    font-size: 40px;
  }
}
@media(max-width: 1200px) {
  .page1-text {
    color: rgb(22, 68, 138);
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 90px;
  }
  .page1-text1 {
    font-size: 32px;
  }
  .page1-text2 {
    color: rgb(22, 68, 138);
    font-size: 32px;
  }
  .page1-text3 {
    color: rgb(22, 68, 138);
    font-size: 32px;
  }
}
@media(max-width: 991px) {
  .page1-text {
    font-size: 32px;
  }
  .page1-text1 {
    font-size: 32px;
  }
  .page1-text2 {
    font-size: 32px;
  }
  .page1-text3 {
    font-size: 32px;
  }
}
@media(max-width: 767px) {
  .page1-text {
    font-size: 28px;
  }
  .page1-text1 {
    font-size: 28px;
  }
  .page1-text2 {
    font-size: 28px;
  }
  .page1-text3 {
    font-size: 28px;
  }
}
</style>
