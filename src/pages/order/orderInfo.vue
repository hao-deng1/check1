<template>
  <div style="height: 64px"></div>
  <div style="height: 410px">
    <div style="margin-top: 200px;text-align: center">
      <a-button style="height: 90px;border-radius: 0.6rem;font-size: 18px" @click="showDrawer">我要发布失物信息</a-button>
      <a-drawer
          title="我要发布失物信息"
          :width="720"
          :visible="visible"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
      >

        <a-form :model="orderFrom" :rules="rules" layout="vertical">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="失物名称" name="lostName" >
                <a-input v-model:value="orderFrom.lostName" placeholder="请输入您的失物名称"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="失物类型" name="lostType">
                <a-tree-select
                    v-model:value="orderFrom.lostType"
                    style="width: 100%"
                    :tree-data="treeData"
                    multiple
                    allow-clear
                    placeholder="请选择您的失物类型"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="失物时间" name="lostDate">
                <a-date-picker style="width: 200px" v-model:value="orderFrom.lostDate" value-format="YYYY-MM-DD" placeholder="请选择您的大致掉落时间"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="联系电话" name="contact">
                <a-input
                    v-model:value="orderFrom.contact"
                    style="width: 100%"
                    placeholder="请留下您的联系电话"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="物品描述" name="description">
                <a-textarea v-model:value="orderFrom.description" placeholder="请描述您的物品"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="物品图片" name="img">
                <a-upload
                    v-model:file-list="fileList"
                    action="/qiniu/uploadImg"
                    list-type="picture-card"
                    @preview="handlePreview"
                    :before-upload="beforeUpload"
                    :customRequest="customRequest1"
                    style="background-color: transparent"
                >
                  <div v-if="fileList.length < 8">
                    <plus-outlined />
                    <div style="margin-top: 8px">Upload</div>
                  </div>
                </a-upload>
              </a-form-item>
              <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="" name="img">
                <a-form-item name="有偿金额" label="business">
                  <a-input v-model:value="orderFrom.business" />
                </a-form-item>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="紧急程度" name="urgent">
                <a-rate v-model:value="orderFrom.urgent" allow-half  style="color: red"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-button type="primary" @click="onClose1">发布失物信息</a-button>
        </a-form>
        <template #extra>
          <a-space>
            <a-button @click="onClose1">Cancel</a-button>
          </a-space>
        </template>
      </a-drawer>

      <a-divider type="vertical" style="height: 80px; border-color: #7cb305" dashed />
      <a-button style="height: 90px;border-radius: 0.6rem;font-size: 18px" @click="showDrawer2">我要发布招领信息</a-button>
      <a-drawer
          title="我要发布招领信息"
          :width="720"
          :visible="visible2"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
      >

        <a-form :model="orderFrom2" :rules="rules" layout="vertical">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="拾物名称" name="pickName" >
                <a-input v-model:value="orderFrom2.pickName" placeholder="请输入您的失物名称"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="拾物类型" name="pickType">
                <a-tree-select
                    v-model:value="orderFrom2.pickType"
                    style="width: 100%"
                    :tree-data="treeData"
                    multiple
                    allow-clear
                    placeholder="请选择您的失物类型"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="拾物时间" name="pickDate">
                <a-date-picker style="width: 200px" v-model:value="orderFrom2.pickDate" value-format="YYYY-MM-DD" placeholder="请选择您的大致掉落时间"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="联系电话" name="contact">
                <a-input
                    v-model:value="orderFrom2.contact"
                    style="width: 100%"
                    placeholder="请留下您的联系电话"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="物品描述" name="description">
                <a-textarea v-model:value="orderFrom2.description" placeholder="请描述您的物品"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="拾物地点" name="pickPlace">
                  <a-input v-model:value="orderFrom2.pickPlace" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="物品图片" name="img">
                <a-upload
                    v-model:file-list="fileList"
                    action="/qiniu/uploadImg"
                    list-type="picture-card"
                    @preview="handlePreview"
                    :before-upload="beforeUpload"
                    :customRequest="customRequest"
                    style="background-color: transparent"
                >
                  <div v-if="fileList.length < 8">
                    <plus-outlined />
                    <div style="margin-top: 8px">Upload</div>
                  </div>
                </a-upload>
              </a-form-item>
              <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-col>
          </a-row>
          <a-button type="primary" @click="onClose2">发布招领信息</a-button>
        </a-form>
        <template #extra>
          <a-space>
            <a-button @click="onClose">Cancel</a-button>
          </a-space>
        </template>
      </a-drawer>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TreeSelectProps } from 'ant-design-vue';
import {message, TreeSelect, UploadProps} from 'ant-design-vue';
import {ref, vModelRadio , inject} from "vue";
import {FileType} from "ant-design-vue/lib/upload/interface";
import myAxios from "../../plugins/myAxios";
import { PlusOutlined } from '@ant-design/icons-vue';

const visible = ref<boolean>(false);
const visible2 = ref<boolean>(false);
const reload = inject("reload")

const orderFrom = ref({
  lostName: '',
  lostType: [],
  lostDate: null,
  contact: '',
  description: '',
  img: '',
  business: 0,
  urgent: 0
})

const orderFrom2 = ref({
  pickName: '',
  pickType: [],
  pickDate: null,
  contact: '',
  description: '',
  img: '',
  pickPlace: ''
})



const treeData: TreeSelectProps['treeData'] = [
  {
    title: '动物',
    value: '动物',
    children: [
      {
        title: '猫',
        value: '猫',
      },{
        title: '狗',
        value: '狗',
      },{
        title: '仓鼠',
        value: '仓鼠',
      },{
        title: '鸟',
        value: '鸟',
      },{
        title: '鸡',
        value: '鸡',
      },{
        title: '动物-其他',
        value: '动物-其他',
      },
    ],
  },
  {
    title: '服装',
    value: '服装',
    children: [
      {
        title: '皮带&吊带',
        value: '皮带&吊带',
      },
      {
        title: '外套',
        value: '外套',
      },
      {
        title: '背心',
        value: '背心',
      },{
        title: '裙子',
        value: '裙子',
      },{
        title: '手套',
        value: '手套',
      },{
        title: '帽子',
        value: '帽子',
      },{
        title: '裤子',
        value: '裤子',
      },{
        title: '鞋子',
        value: '鞋子',
      },{
        title: '服装-其他',
        value: '服装-其他',
      },
    ],
  },
  {
    title: '包',
    value: '包',
    children: [
      {
        title: '背包',
        value: '背包',
      },
      {
        title: '公文包',
        value: '公文包',
      },
      {
        title: '行李袋',
        value: '行李袋',
      },{
        title: '运动包',
        value: '运动包',
      },{
        title: '化妆包',
        value: '化妆包',
      },{
        title: '手提袋',
        value: '手提袋',
      },{
        title: '包-其他',
        value: '包-其他',
      },
    ],
  },
  {
    title: '收藏品',
    value: '收藏品',
    children: [
      {
        title: '海报',
        value: '海报',
      },
      {
        title: '硬币',
        value: '硬币',
      },
      {
        title: '漫画',
        value: '漫画',
      },{
        title: '纪念品',
        value: '纪念品',
      },{
        title: '刀&剑',
        value: '刀&剑',
      },{
        title: '军事',
        value: '军事',
      },{
        title: '化石',
        value: '化石',
      },{
        title: '邮票',
        value: '邮票',
      },{
        title: '卡牌',
        value: '卡牌',
      },{
        title: '收藏品-其他',
        value: '收藏品-其他',
      },
    ],
  },
  {
    title: '电子产品',
    value: '电子产品',
    children: [
      {
        title: 'CD&播放器',
        value: 'CD&播放器',
      },
      {
        title: '耳机',
        value: '耳机',
      },{
        title: '鼠标',
        value: '鼠标',
      },
      {
        title: '相机',
        value: '相机',
      },{
        title: '手机',
        value: '手机',
      },{
        title: '充电器',
        value: '充电器',
      },{
        title: '电脑&平板电脑',
        value: '电脑&平板电脑',
      },{
        title: '无人机&遥控',
        value: '无人机&遥控',
      },{
        title: '电子-其他',
        value: '电子-其他',
      },
    ],
  },
  {
    title: '饰品',
    value: '饰品',
    children: [
      {
        title: '手镯',
        value: '手镯',
      },
      {
        title: '奖章&胸针',
        value: '奖章&胸针',
      },
      {
        title: '项链',
        value: '项链',
      },{
        title: '耳环',
        value: '耳环',
      },{
        title: '手表',
        value: '手表',
      },{
        title: '饰品-其他',
        value: '饰品-其他',
      },
    ],
  },
  {
    title: '其他',
    value: '其他',
  }
];
const showDrawer = () => {
  visible.value = true;
};
const showDrawer2 = () => {
  visible2.value = true;
};

const onClose = () => {
  visible.value = false
  visible2.value = false
  reload()
}
const onClose1 = async () => {
  const res = await myAxios.post("/lost/add", {
    "business": orderFrom.value.business,
    "contact": orderFrom.value.contact,
    "description": orderFrom.value.description,
    "img": orderFrom.value.img,
    "lostDate": orderFrom.value.lostDate,
    "lostName": orderFrom.value.lostName,
    "lostType": orderFrom.value.lostType,
    "urgent": orderFrom.value.urgent,
  })
  if (res?.code === 0 && res.data){
    alert('发布成功')
    visible.value = false;
  } else {
    alert('发布失败')
  }
};

const onClose2 = async () => {
  const res = await myAxios.post("/pick/add", {
    "contact": orderFrom2.value.contact,
    "description": orderFrom2.value.description,
    "img": orderFrom2.value.img,
    "pickDate": orderFrom2.value.pickDate,
    "pickPlace": orderFrom2.value.pickPlace,
    "pickName": orderFrom2.value.pickName,
    "pickType": orderFrom2.value.pickType,
  })
  if (res?.code === 0 && res.data){
    alert('发布成功')
    visible2.value = false;
  } else {
    alert('发布失败')
  }
};


const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const fileList = ref<UploadProps['fileList']>([
]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};
const beforeUpload = (file: FileType) => {
  // console.log('beforeUpload')
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!')
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
    return false;
  }
  return isJpgOrPng && isLt2M
}
const customRequest = async (options: any) => {
  // console.log('customRequest', options)
  const { filename, file, action, data, onSuccess } = options
  // 定义上传的文件
  const formData = new FormData()
  formData.append(filename, file)
  // 发送请求
  const result: any = await myAxios.post('/qiniu/uploadImg',{
        file: file
      },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
  )
  orderFrom2.value.img = result.data
  console.log(orderFrom.value.img)
  let base64 = getBase64(file);
  // 调用 onSuccess 不然会一直显示loadning
  onSuccess()
}
const customRequest1 = async (options: any) => {
  // console.log('customRequest', options)
  const { filename, file, action, data, onSuccess } = options
  // 定义上传的文件
  const formData = new FormData()
  formData.append(filename, file)
  // 发送请求
  const result: any = await myAxios.post('/qiniu/uploadImg',{
        file: file
      },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
  )
  orderFrom.value.img = result.data
  console.log(orderFrom.value.img)
  let base64 = getBase64(file);
  // 调用 onSuccess 不然会一直显示loadning
  onSuccess()
}
</script>

<style scoped>

</style>
