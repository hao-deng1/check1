<template>
  <div class="container" id="container" style="">
    <div class="title" style="font-family:'HelveticaNeue';">Welcome To Our Site</div>
    <down-outlined style="color: white;fontSize: 60px;position:relative;top: 480px;left: 50%" class="down" @click="scrollToCmtList"/>
  </div>

  <div class="urgent" style="height: 60px;background-color: white;width: 1085px;border-radius: 1rem;border-bottom-left-radius: 1rem">
    <div style="font-size: 23px;padding-top: 12px;padding-left: 30px;font-weight: bold;font-family:'Source-Han-Ligh32138fda2d24a70';">紧急通告单</div>
      <a-button type="link" class="more" @click="link"><link-outlined />更多</a-button>
  </div>
  <div class="introduce" style="background-color: white;height: 300px; width: 0px;">
    <a-card title="关于本站" :bordered="false" style="width: 280px;font-size: 15px;position: relative;left: 10px;border-radius: 1rem;font-family:'Source-Han-Ligh32138e13b524a70';">
      &nbsp;&nbsp;一个竭尽全力为人民服务的网站。您可以在本网站发送寻物信息，也可以发送拾取信息，让更多的的便利。当然还有更多的功能期待你的探索哦！
<!--      <img src="../assets/1.png" style="width: 25px;">-->
<!--      <img src="../assets/1.png" style="width: 25px;">-->
<!--      <img src="../assets/1.png" style="width: 25px;">-->
    </a-card>
  </div>
  <div class="rank" style="background-color: white;height: 500px;z-index: 1">
    <a-card title="联系我们" :bordered="false" style="width: 280px;font-size: 15px;position: relative;left: 10px;border-radius: 1rem;height: 220px;">
      <div class="msg">
<!--        <a-avatar :src="item.img" style="height: 30px"></a-avatar>-->
<!--        <div class="msg-name" style="position: relative;top: -35px;left: 50px;font-size: 16px">{{ item.userName }}</div>-->
<!--        <div class="Integral" style="font-size: 14px;color: gray;position: relative;top: -30px;left: 50px">本周积分:&nbsp;&nbsp;{{ item.Integral }}</div>-->
<!--        <div style="position: relative;top: -75px;left: 190px;font-size: 18px">Top {{ item.rank }}</div>-->
        <span>联系QQ：2114275890</span>
        <br>
        <span>联系邮箱：2114275890@qq.com</span>
        <a style="color: black ;position: relative;top: -70px"><svg style="width: 30px" t="1668940736795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2870" width="200" height="200"><path d="M512.465 98.744c-236.05-2.401-429.41 187.034-431.998 423.242 0.894 183.912 120.176 346.283 295.332 402.018 21.6 3.93 29.451-9.04 29.451-20.436v-71.916c-120.17 25.545-145.7-56.59-145.7-56.59a112.364 112.364 0 0 0-47.914-62.089c-39.272-25.937 3.141-25.545 3.141-25.545a90.702 90.702 0 0 1 65.978 43.624c25.358 43.993 81.26 59.548 125.678 34.976a91.569 91.569 0 0 1 27.487-56.59c-95.825-10.615-196.36-46.768-196.36-209.067a163.13 163.13 0 0 1 43.591-114.358 148.652 148.652 0 0 1 4.32-111.609c15.896-35.223 36.525-11.397 117.815 43.229a419.24 419.24 0 0 1 216.002 0c82.471-54.626 117.82-43.229 117.82-43.229a148.657 148.657 0 0 1 4.32 111.61 163.145 163.145 0 0 1 45.945 113.57c0 162.695-101.321 198.458-196.36 209.067a98.273 98.273 0 0 1 29.452 78.594v115.933c0 13.752 7.856 24.756 29.457 20.43 174.63-56.071 293.466-218.106 294.545-401.622C941.878 285.778 748.52 96.343 512.465 98.744" fill="#231F20" p-id="2871"></path></svg><span style="position: relative;top: -93px;left: 10px">校园失物招领平台</span></a>
        <br>
        <a style="color: black;position: relative;top: -240px"><svg style="width: 30px" t="1668940653408" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1947" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1948"></path></svg><span style="position: relative;top: -93px;left: 10px">校园失物招领平台</span></a>
      </div>
    </a-card>
  </div>
  <div class="list" style="width: 1100px;height: 230px;z-index: 1">
    <a-skeleton :loading="loading"/>
    <div class="card" v-for="(item,index) in urgentList">
      <div class="tools">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <div class="card__content" style="">
        <div style="font-size: 26px;position: relative;top: -39px;left: 40%">{{ item.lostName }}</div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">失主名称: &nbsp; &nbsp;{{ item.username }}</div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">
          物品类型: &nbsp; &nbsp;
          <a-tag :color="DEFAULT_TAG_COLOR_ARRAY[index % DEFAULT_TAG_COLOR_ARRAY.length]"
                 v-for="(tag, index) in item.lostType">
            {{ tag }}
          </a-tag>
        </div>

        <div style="font-size: 18px;position: relative;top: -34px;left:25px">
          物品描述: &nbsp; &nbsp;
          <a-typography-text
            :style="ellipsis ? { width: '100px' } : {}"
            :ellipsis="ellipsis ? { tooltip: item.description } : false"
            :content=item.description
        /></div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">丢失时间: &nbsp; &nbsp;{{ dayjs(item.lostDate).format('YYYY-MM-DD') }}</div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">报失时间: &nbsp; &nbsp;{{ dayjs(item.reportTime).format('YYYY-MM-DD') }}</div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">报&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;酬: &nbsp; &nbsp;{{ item.business }}￥</div>
        <div style="font-size: 18px;position: relative;top: -34px;left:25px">联系方式: &nbsp; &nbsp;{{ item.contact }}</div>
        <button class="button2" style="position: relative;top: -267px;left:220px;font-size: 12px;" @click="link2(index)">
          GET MORE
        </button>
        <a-drawer width="640" placement="right" :visible="visible" @close="onClose">
          <div style="height: 30px"></div>
          <div style="width: 400px;position:relative;left: 16%;top: -3%">
            <a-image
                :width="400"
                :src=urgentList[activeId].img
            />
          </div>
          <div style="position: relative;top: -1%">
            <a-row >
              <a-col :span="12">
                <span style="font-size: 24px;position: relative;left:90%">{{ urgentList[activeId].lostName }}</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">失主：{{ urgentList[activeId].username }}</span>
              </a-col>
              <a-col :span="12">
                <div style="margin-left: 20%; font-size: 17px">失物类型：<a-tag v-for="tag in urgentList[activeId].lostType" style="">{{ tag }}</a-tag></div>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">联系电话：{{ urgentList[activeId].contact }}</span>
              </a-col>
              <a-col :span="12" v-if="urgentList[activeId].business !== 0">
                <span style="position: relative;left: 30%;font-size: 17px">有偿金额：{{ urgentList[activeId].business }}RMB</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">上报时间：{{ dayjs(urgentList[activeId].reportTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="24">
                <span style="position: relative;left: 15%;font-size: 17px">物品描述：{{ urgentList[activeId].description }}</span>
              </a-col>
            </a-row>
          </div>

        </a-drawer>
      </div>
    </div>
  </div>
  <div style="height: 75px;position: relative;top: -10px">
    <arrow-down-outlined style="color: black;position: relative;top: -60px;left: 40%;fontSize: 60px;" class="down"/>
    <button class="button1" style="position: relative;top: -10px;left: 32%">
      <span style="font-weight: bold;font-size: 20px" @click="link">GET MORE</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import dayjs from "dayjs";
import { DownOutlined,LinkOutlined,ArrowDownOutlined,GithubOutlined } from '@ant-design/icons-vue';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import {animate} from "popmotion";
// import {Typewriter} from "vue-ui-libs"
import {useRouter} from "vue-router";
import _default from "ant-design-vue/lib/color-picker";
import { inject } from 'vue'
import myAxios from "../plugins/myAxios";
const router = useRouter();
const reload = inject('reload')
const ellipsis = ref(true)

// 滚动到评论的列表区域
const scrollToCmtList = () => {
  // 1. 当前滚动条的位置
  const now = window.scrollY
  // 2. 目标位置（文章信息区域的高度）
  const dist = 750

  // 3. 实现滚动动画
  animate({
    from: now, // 当前的位置
    to: dist,  // 目标位置
    duration: 1000,
    onUpdate: latest => window.scrollTo(0, latest)
  })
}
/**
 * 默认标签颜色列表
 */
const DEFAULT_TAG_COLOR_ARRAY = [
  'red',
  'orange',
  'green',
  'cyan',
  'blue',
  'purple',]
const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 3,
};
const urgentList = ref([])
const loading = ref(true)
const loadData = async () => {
  const res = await myAxios.get("/lost/getUrgent")
  if (res.code === 200) {
    urgentList.value = res.data;
  } else {
    alert('数据加载失败，请登录')
    await router.push('/login')
  }
  loading.value = false
}

onMounted(()=>{
  loadData();
})

const urgentList1 = [
  {
    userName: 1,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },
  {
    userName: 2,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 3,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 4,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 5,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 6,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 7,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },
  {
    userName: 8,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },{
    userName: 9,
    lostName: "钥匙",
    lostType: ['学习', 'Java'],
    lostDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    contact: 123456,
    reportTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    description: "厉害",
    img: "https://joeschmoe.io/api/v1/random",
    business: 100
  },
]

const rankLst = [
  {
    rank: 1,
    img: "https://joeschmoe.io/api/v1/random",
    userName: 'dogDJk1',
    Integral: 17,
  },
  {
    rank: 2,
    img: "https://joeschmoe.io/api/v1/random",
    userName: 'dogDJk2',
    Integral: 16,
  },{
    rank: 3,
    img: "https://joeschmoe.io/api/v1/random",
    userName: 'dogDJk3',
    Integral: 15,
  },{
    rank: 4,
    img: "https://joeschmoe.io/api/v1/random",
    userName: 'dogDJk4',
    Integral: 14,
  },{
    rank: 5,
    img: "https://joeschmoe.io/api/v1/random",
    userName: 'dogDJk5',
    Integral: 13,
  },
]

const onChange = (current: number) => {
  console.log(current);
};

const link = () => {
  router.push('/lost')
}
const activeId = ref()
const visible = ref<boolean>(false);
const link2 = (id:number) => {
  activeId.value = id;
  visible.value = true;
}
const onClose = () => {
  visible.value = false;
  reload()
};


</script>

<style scoped>
.list{
  position: relative;
  left: 48px;
  top: -680px;
  /*border-radius: 1rem;*/
    display: flex;

  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  flex: 0 0 30%;
  width: 180px;
  height: 254px;
  margin: 0 20px 20px 0;
  background-color: #F8FBFE;
  /*background-color: #f2b9b2;*/
  border-radius: 1rem;
  /*z-index: 1;*/
}
.card:hover{
  margin-top: 0px;/*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}

/* From uiverse.io by @barisdogansutcu */
.button1 {
  border: none;
  position: relative;
  width: 200px;
  height: 73px;
  padding: 0;
  z-index: 2;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
  -webkit-mask-size: 100%;
  cursor: pointer;
  background-color: transparent;
  transform: translateY(8px)
}

.button1:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0 0 0 white;
  transition: all 2s ease;
}

.button1:hover:after {
  box-shadow: 0px -13px 56px 12px #ffffffa6;
}

.button1 span {
  position: absolute;
  width: 100%;
  font-size: 15px;
  font-weight: 100;
  left: 50%;
  top: 39%;
  letter-spacing: 3px;
  text-align: center;
  transform: translate(-50%,-50%);
  color: black;
  transition: all 2s ease;
}

.button1:hover span {
  color: white;
}

.button1:before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
}

.button1:hover:before {
  width: 100%;
}


/**/

/* From uiverse.io by @adamgiebl */
.button2 {
  background: #FBCA1F;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
}

.button2:hover {
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
}

.button2:active {
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
}

/**/

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

/**/
.container{
  position: relative;
  padding-right: 100px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
  height: 744.5px;
  /*top: 64px;*/
  background-image: url("../assets/9.jpg");
  background-size: 100% 100%;
}
.title{
  position: relative;
  font-size: 90px;
  top: 150px;
  left: 23%;
  /*background-image: radial-gradient(circle, #f5b550, #e7c351, #d6d058, #c3dd66, #ade87a, #a9ed7c, #a4f17f, #9ef682, #aef66d, #c0f557, #d3f23e, #e8ef1b);*/
  /*-webkit-background-clip: text;*/
  /*color: transparent;*/
  color: white;
  font-weight:bold;
  /*font-family: "Times New Roman",Times,serif;*/
}



.urgent{
  position: relative;
  left: 45px;
  top: 89px;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 350px;
  line-height: 160px;
  background: #83cbac;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide div) {
  color: #ffffff;
}
.down{
  animation: myfirst 2s infinite;
}
@keyframes myfirst {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.more{
  position: relative;
  top: -38px;
  left: 980px;
  font-size: 20px;
  /*height: 100px*/
}
.rank{
  position: relative;
  width: 0px;
  /*border-radius: 1rem;*/
  left: 1180px;
  top: -6px;
}
.introduce{
  position: relative;
  width: 0px;
  /*border-radius: 1rem;*/
  top: 28px;
  left: 1180px;
  /*left: 1100px;*/
  /*border-radius: 1rem;*/
}

</style>
