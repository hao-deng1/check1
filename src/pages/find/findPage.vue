<template>
  <div  style="height: 64px; ">
    <div class='ad'>
      <i class="iconfont">&#xe633;</i>
      <p class='content'>
        <span class="text">欢迎使用校园失物招领平台，本页面为招领信息栏！ </span>
      </p>
    </div>
  </div>
  <div style="height: 2000px;background-color: transparent;position: relative;top: 20px">
    <div style="height: 300px;background-color: white;position: relative;z-index: 1;box-shadow: 0px 2px 0px grey;">
      <span style="padding-left: 44%;font-size: 20px;position: relative;top: 5%">热门招领类别</span>
      <div style="background-color: white;height: 100px;position: relative;top: 5%">
        <div class="cardList1" style="width: 80%;background-color: white;position: relative;left: 23.5%;display: flex;top: 40%">
          <div class="card" style="width: 50px;">
            <a><div style="border-radius: 1.5rem;background-color: pink;width: 50px;height: 50px"><img src="../../assets/动物.png" alt="" style="width: 41px;position: relative;left: 3px;top: 2px"></div>
              <br>
              <span style="padding-left: 10px;color: black;position: relative;top: -18px">动物</span></a></div>
          <div class="card" style="width: 50px;position: relative;left: 10%">
            <a><div style="background-color: yellowgreen;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/口袋.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 6px"></div>
              <br>
              <span style="padding-left: 15px;color: black;position: relative;top: -20px">袋</span></a></div>
          <div class="card" style="width: 50px;position: relative;left: 20%">
            <a><div style="background-color: skyblue;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/衣服.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 7px"></div>
              <br>
              <span style="padding-left: 10px;color: black;position: relative;top: -20px">服装</span></a></div>
          <div class="card" style="width: 60px;position: relative;left: 30%">
            <a><div style="background-color: coral;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/奖杯.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 7px"></div>
              <br>
              <span style="padding-left: 4px;color: black;position: relative;top: -20px">收藏品</span></a></div>
          <div class="card" style="position: relative;left: 40%">
            <a><div style="background-color: coral;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/电子产品.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 7px"></div>
              <br>
              <span style="color: black;position: relative;top: -20px;left: -3px">电子产品</span></a></div>
        </div>
        <div class="cardList2" style="width: 80%;background-color: white;position: relative;left: 23.5%;display: flex;top: 60%">
          <div class="card" style="width: 50px;">
            <a><div style="border-radius: 1.5rem;background-color: skyblue;width: 50px;height: 50px"><img src="../../assets/珠宝饰品.png" alt="" style="width: 40px;position: relative;left: 5px;top: 5px"></div>
              <br>
              <span style=";padding-left:10px;color: black;position: relative;top: -18px;width: 55px">饰品</span></a></div>
          <div class="card" style="width: 50px;position: relative;left: 10%">
            <a><div style="background-color: yellowgreen;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/校园卡.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 6px"></div>
              <br>
              <span style="padding-left: 6px;color: black;position: relative;top: -20px">校园卡</span></a></div>
          <div class="card" style="width: 50px;position: relative;left: 20%">
            <a><div style="background-color: skyblue;border-radius: 2rem;width: 50px;height: 50px"><img src="../../assets/其他.png" alt="" style="width: 43px;padding-left: 8px;padding-top: 7px"></div>
              <br>
              <span style="padding-left: 10px;color: black;position: relative;top: -20px">其他</span></a></div>
        </div>
      </div>
    </div>
    <div class="content1">
      <div style="width: 75%;height: 30px;padding-top: 22px;padding-left: 30px;">
        <a-input :bordered="false" v-model:value="value" placeholder="搜索招领物品名称" style="background-color: transparent;border: 0;font-size: 19px" allow-clear/>
        <a-button style="font-size:16px;position: relative;left: 963px;top:-38px;width: 200px;height: 40px;border-radius: 0.3rem;background-color: mediumpurple;color: white" @click="onSearch">搜索</a-button>
      </div>
    </div>
    <div class="content2">
      <div class="selectList" style="background-color: white;height: 150px;position: relative;top:20%;z-index: 1;">
        <div class="card-container" style="box-shadow: 0px 2px 0px grey;">
          <div style="text-align: center;font-size: 20px">
            <span style="position: relative;top: 10px">请选择物品类型</span>
          </div>
          <a-tabs v-model:activeKey="activeKey" type="card"  centered style="padding-top: 30px">
            <a-tab-pane v-for="(list , index) in selectList" :key="list.key"  :tab="list.title">
              <div style="position:relative;text-align: center">
                <template v-for="(tag, index2) in list.content" :key="tag" >
                  <a-checkable-tag
                      :checked="list.selectedTags.indexOf(tag) > -1"
                      @change="checked => handleChange(tag, checked, index2, index)"
                      style="font-size: 20px"
                  >
                    {{ tag }}
                  </a-checkable-tag>
                </template>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <div style="position: relative;top: 40%;width: 60%;left: 20%;z-index: 1">
        <a-list style="background-color: white" item-layout="vertical" size="large" :pagination="pagination" :data-source="cardList">
          <a-spin v-if="loading" />
          <template #renderItem="{ item,index }">
            <a-list-item key="item.title">
              <template #actions>
                <div style="width: 100px;margin-left: -15%">
                  <a-tooltip :title="dayjs(item.reportTime).format('YYYY-MM-DD HH:mm:ss')">
                    <span >{{ dayjs(item.reportTime).fromNow() }}</span>
                  </a-tooltip>
                </div>
                <a @click="showDrawer(index)" >了解更多</a>
              </template>
              <template #extra>
                <a-image
                    v-if="item.img"
                    :width="150"
                    :src=item.img
                />
                <a-image
                    v-if="!item.img"
                    :width="150"
                    :height="150"
                    src="https://www.antdv.com/#error"
                    fallback="data:image/png;base64,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"
                />
              </template>
              <a-list-item-meta>
                <template #title>
                  <a @click="showDrawer(index)" style="font-size: 20px">{{ item.pickName }}</a>
                </template>
                <template #description>
                  <a-tag v-for="tag in item.pickType">{{ tag }}</a-tag>
                </template>
              </a-list-item-meta>
              {{ item.description }}
            </a-list-item>
          </template>
        </a-list>
        <a-drawer width="640" placement="right" :visible="visible" @close="onClose">
          <div style="height: 30px"></div>
          <div  style="width: 400px;position:relative;left: 16%;top: -3%"><a-image :width="400" :src="cardList[activeId].img"/></div>
          <div style="position: relative;top: -1%">
            <a-row >
              <a-col :span="12">
                <span style="font-size: 24px;position: relative;left:90%">{{ cardList[activeId].pickName }}</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">发布者：{{ cardList[activeId].username }}</span>
              </a-col>
              <a-col :span="12">
                <div style="margin-left: 20%; font-size: 17px">拾物类型：<a-tag v-for="tag in cardList[activeId].pickType" style="">{{ tag }}</a-tag></div>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">联系电话：{{ cardList[activeId].contact }}</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="12">
                <span style="position: relative;left: 30%;font-size: 17px">上报时间：{{ dayjs(cardList[activeId].reportTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
              </a-col>
            </a-row>
            <br>
            <a-row >
              <a-col :span="24">
                <span style="position: relative;left: 15%;font-size: 17px">物品描述：{{ cardList[activeId].description }}</span>
              </a-col>
            </a-row>
          </div>

        </a-drawer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref , inject} from "vue";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import {useRouter} from "vue-router";
import myAxios from "../../plugins/myAxios";
dayjs.extend(relativeTime);

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 6,
};

const reload = inject("reload")
const activeKey = ref('animal')
const activeId = ref()
const value = ref([])
const loading = ref(false)
const selectList = reactive([
  {
    key: 'animal',
    title: '动物',
    content: ['猫','狗','仓鼠','鸟','动物-其他'],
    selectedTags: [] as string[],
  },{
    key: 'cloth',
    title: '服装',
    content: ['皮带&吊带','外套','背心','裙子','手套','帽子','裤子','鞋子','服装-其他'],
    selectedTags: [] as string[],
  },{
    key: 'bag',
    title: '包',
    content: ['背包','公文包','行李袋','运动包','化妆包','手提袋','包-其他'],
    selectedTags: [] as string[],
  },{
    key: 'collection',
    title: '收藏品',
    content: ['海报','硬币','漫画','纪念品','刀&剑','军事','化石','邮票','卡牌','收藏品-其他'],
    selectedTags: [] as string[],
  },{
    key: 'electron',
    title: '电子产品',
    content: ['CD&播放器','耳机','相机','手机','充电器','电脑&平板电脑','无人机&遥控','电子-其他'],
    selectedTags: [] as string[],
  },{
    key: 'Jewelry',
    title: '饰品',
    content: ['手镯','奖章&胸针','项链','耳环','手表','饰品-其他'],
    selectedTags: [] as string[],
  },{
    key: 'other',
    title: '其他',
    content: ['钥匙','水杯','书','药','其他'],
    selectedTags: [] as string[],
  }
])
const showList = ref()
const visible = ref<boolean>(false);

const showDrawer = (id:number) => {
  activeId.value = id;
  visible.value = true;
};
const onClose = () => {
  visible.value = false;
  reload()
};

const router = useRouter();
const cardList = ref([]);
const loadData = async () => {
  loading.value = true
  console.log(activeSearch.value)
  const res = await myAxios.get("/pick/query",{
    params: {
      tagList: activeSearch.value
    },
  })
  if (res?.code === 200){
    cardList.value = res.data
    loading.value = false
    console.log(res.data)
  } else {
    alert('数据加载失败请重新登陆！')
    await router.push('/login')
  }
}

onMounted(()=>{
  loadData();
})

const cardList1 = [
  {
    id:1,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:2,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 5,
    lostType: ['钥匙','钥匙2'],
    description: '马老师你不讲武德1',
    reportTime: dayjs().subtract(2, 'days'),
    business: 0,
    contact: '123456'
  },{
    id:3,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4.5,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(3, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:4,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'month'),
    business: 100,
    contact: '123456'
  },{
    id:5,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'year'),
    business: 100,
    contact: '123456'
  },{
    id:6,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:7,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:8,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:9,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:10,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:11,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },{
    id:12,
    username: 'dogdjk',
    img: 'https://s1.ax1x.com/2022/07/27/vSTnWd.jpg',
    lostName: '钥匙',
    urgent: 4,
    lostType: ['钥匙','钥匙21'],
    description: '马老师你不讲武德',
    reportTime: dayjs().subtract(1, 'days'),
    business: 100,
    contact: '123456'
  },
]
const activeSearch = ref()
const handleChange = async (tag: string, checked: boolean, index2: number, index: number) => {
  const { selectedTags } = selectList[index];
  const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
  console.log('You are interested in: ', nextSelectedTags);
  if(selectList[index].selectedTags.length >1 && checked){
    alert("最多只能选择一种该类型的");
  }
  else {
    selectList[index].selectedTags = nextSelectedTags;
    activeSearch.value = tag
    console.log( tag)
    const res = await myAxios.get("/pick/query", {
      params: {
        tagList: activeSearch.value
      },
    })
    if(res?.code === 200){
      cardList.value = res.data
      return
    }else {
      alert(6)
    }
  }
};

const onSearch = async () => {
  const res = await myAxios.get("/pick/query",{
    params: {
      searchText: value.value
    },
  })
  if (res?.code === 200){
    cardList.value = res.data
    console.log(res.data)
  } else {
    alert('数据加载失败请重新登陆！')
    // await router.push('/login')
  }
}

</script>
<style scoped>
.content1{
  z-index: 1;
  background-color: white;
  border-radius: 0.7rem;
  height: 80px;
  width: 80%;
  position: relative;
  top: 40px;
  left: 10%;
  box-shadow: 0px 2px 0px grey;
}
.content2{
  height: 300px;
}
.card-container p {
  margin: 0;
}
.card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}
.card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  padding: 16px;
  background: #fff;
}
.card-container > .ant-tabs-card > .ant-tabs-nav::before {
  display: none;
}
.card-container > .ant-tabs-card .ant-tabs-tab,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}
.card-container > .ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}
#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}
[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}
[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  background: #141414;
}
[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}

.ad {
  width: 30%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: #353535;
  box-shadow: 2px 1px 8px 1px rgb(228, 232, 235);
  margin: 80px auto;
  z-index: 1
}
.content {
  flex: 1;
  overflow: hidden;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.text {
  display: block;
  width: auto;
  padding-top: 15px;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  padding-left: 105%;
  padding-right: 110%;
}
.text:hover{
  animation-play-state: paused;
}
@font-face {
  font-family: "iconfont"; /* Project id 2516453 */
  src: url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff2?t=1620545333370")
  format("woff2"),
  url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.woff?t=1620545333370")
  format("woff"),
  url("//at.alicdn.com/t/font_2516453_g6qjhhqblt9.ttf?t=1620545333370")
  format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  /*font-size: 16px;*/
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
i {
  color: #ff6146;
  font-size: 16px;
  margin-right: 10px;
}
</style>
