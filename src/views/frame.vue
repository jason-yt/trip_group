<template>
  <div class="frame-container">
    <div class="frame-frame">
      <div class="frame-right">
        <img
          alt="IMAGE7749"
          src="/playground_assets/image7749-y9h-1500w.png"
          class="frame-image"
        />
        <div class="frame-frame1">
          <span class="frame-text"><span>用電管理</span></span>
          <div class="frame-frame2">
            <img
              alt="Polygon17757"
              src="/playground_assets/polygon17757-8iq9.svg"
              class="frame-polygon1"
            />
            <img
              alt="Polygon27757"
              src="/playground_assets/polygon27757-agjk.svg"
              class="frame-polygon2"
            />
          </div>
        </div>
        <app-framebtn rootClassName="framebtn-root-class-name"></app-framebtn>
      </div>
      <div class="frame-container1">
        <div class="frame-greenlogo">
          <span class="frame-text2">綠電管理平台</span>
          <img
            alt="greenw117747"
            src="/playground_assets/greenw117747-yyvw-200h.png"
            class="frame-greenw11"
          />
        </div>
        <div class="frame-auologo">
          <span class="frame-text3"><span>友達光電</span></span>
          <img
            alt="IMAGE2560pxAUOptronicsLogo1I107"
            src="/playground_assets/image2560pxauoptronicslogo1i107-ctaa-200h.png"
            class="frame-image2560px-a-optronics-logo1"
          />
        </div>
        <app-mainnav rootClassName="mainnav-root-class-name"></app-mainnav>
      </div>
    </div>
  </div>
</template>

<script>
import AppFramebtn from '../components/framebtn'
import AppMainnav from '../components/mainnav'

export default {
  name: 'Frame',
  components: {
    AppFramebtn,
    AppMainnav,
  },
  metaInfo: {
    title: 'Green Energy ',
  },
}
</script>

<style scoped>
.frame-container {
  min-height: 100vh;
}
.frame-frame {
  width: 100%;
  height: 840px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
  background-image: linear-gradient(-59deg, rgba(5, 46, 74, 1) 0%, rgba(0, 80, 135, 0.8600000143051147) 87%);
}
.frame-right {
  top: 90.6796875px;
  left: 418px;
  width: 1470px;
  height: 713.3203125px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.frame-image {
  top: 73.3203125px;
  left: 0px;
  width: 1473px;
  height: 640px;
  position: absolute;
  max-width: 1470px;
  box-sizing: content-box;
  max-height: 100%;
  border-color: transparent;
}
.frame-frame1 {
  top: 0px;
  left: 124.7265625px;
  width: 220.93505859375px;
  height: 55.01433563232422px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.frame-text {
  left: -111px;
  color: rgba(255, 255, 255, 1);
  width: 205px;
  bottom: -11px;
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Noto Sans CJK TC;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-frame2 {
  left: -116px;
  width: 21.06905746459961px;
  bottom: -3px;
  height: 40.645389556884766px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.frame-polygon1 {
  top: -2px;
  left: -6px;
  width: 14px;
  height: 33px;
  position: absolute;
}
.frame-polygon2 {
  left: 2px;
  width: 14px;
  bottom: -4px;
  height: 33px;
  position: absolute;
}
.frame-container1 {
  top: 37.6796875px;
  left: 36px;
  width: 342px;
  height: 691.3203125px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.frame-greenlogo {
  top: 0px;
  left: 10.6953125px;
  width: var(--dl-size-size-xxlarge);
  height: auto;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.frame-text2 {
  top: 5px;
  color: rgb(255, 255, 255);
  right: -70px;
  width: 100%;
  height: auto;
  position: absolute;
  font-size: 36px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: left;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-greenw11 {
  top: 3.91943359375px;
  left: 0px;
  width: 59px;
  height: 57px;
  position: absolute;
  border-color: transparent;
}
.frame-auologo {
  top: 130.3203125px;
  left: 0px;
  width: 340px;
  height: 167px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: #ffffff;
  border-style: solid;
  border-width: 8px;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  justify-content: flex-start;
  background-color: transparent;
}
.frame-text3 {
  top: 85px;
  left: 79px;
  color: rgba(255, 255, 255, 1);
  width: 161px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-image2560px-a-optronics-logo1 {
  top: 28px;
  left: 91px;
  width: 137px;
  height: 48px;
  margin: auto;
  position: absolute;
  border-color: transparent;
}
@media(max-width: 1600px) {
  .frame-image {
    width: 72%;
    position: static;
    max-height: auto;
  }
}
@media(max-width: 1200px) {
  .frame-image {
    width: 740px;
  }
}
</style>
