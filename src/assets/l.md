<a-carousel autoplay effect="fade" :after-change="onChange" style="padding-left: 20%;padding-right: 20%;padding-top: 20px;border-radius: 1.625rem" id="carousel" >
    <div v-for="item in urgentList" style="color: white;">
      <a-descriptions title="物品信息" style="padding-top: 40px;" size="default">
        <a-descriptions-item label="失物名称" style="padding-left: 10px;">{{ item.lostName }}</a-descriptions-item>
        <a-descriptions-item label="失主名称">{{ item.userName }}</a-descriptions-item>
        <a-descriptions-item label="失主联系方式">{{ item.contact }}</a-descriptions-item>
        <a-descriptions-item label="失物类型" style="padding-left: 10px">
          <a-tag :color="DEFAULT_TAG_COLOR_ARRAY[index % DEFAULT_TAG_COLOR_ARRAY.length]"
                 v-for="(tag, index) in item.lostType">
            {{ tag }}
          </a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="丢失时间">{{ item.lostDate }}</a-descriptions-item>
        <a-descriptions-item label="报失时间时间">{{ item.reportTime }}</a-descriptions-item>
        <a-descriptions-item label="物品描述" style="padding-left: 10px">{{ item.description }}</a-descriptions-item>
        <a-descriptions-item label="报酬">{{ item.business }}￥</a-descriptions-item>
      </a-descriptions>
      <a-button style="background-color: #eef7f2">点击了解详情</a-button>
    </div>

  </a-carousel>