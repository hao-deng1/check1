<template>
  <div  style="padding-top: 64px;">
    <br>
    <div class="avatar" style="position: relative;left: 130px;width: 300px;;top: 30px">
      <a-avatar :size="{ xs: 250, sm: 250, md: 250, lg: 250, xl: 250, xxl: 250 }" >
        <template #icon @click="changeUrl" >
          <img :src=userFrom.avatarUrl alt="" >
        </template>
      </a-avatar>
      <a-upload
          name="file"
          action="/qiniu/uploadImg"
          :before-upload="beforeUpload"
          :customRequest="customRequest"
      >
        <a-button style="font-size: 14px;border-radius: 0.5rem;background-color: white;position: relative;top: -30px;left: 180px">
          <edit-outlined />Edit
        </a-button>
      </a-upload>
      <div class="name" style="font-size: 28px">{{ userFrom.username }}</div>
      <br>
      <a-button type="text" class="more" style="font-size: 18px;width:250px;border-radius: 0.5rem;background-color: white;" @click="showDrawer"><span style="position: relative;top: -3px">Edit profile</span></a-button>
      <a-drawer
          title="Create a new account"
          :width="720"
          :visible="visible"
          :body-style="{ paddingBottom: '80px' }"
          :footer-style="{ textAlign: 'right' }"
          @close="onClose"
      >
        <a-form :model="userFrom" :rules="rules" layout="vertical">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Id" name="id" >
                <a-input v-model:value="userFrom.id" disabled/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Name" name="name">
                <a-input v-model:value="userFrom.username" placeholder="Please enter user name" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Phone" name="phone">
                <a-input
                    v-model:value="userFrom.phone"
                    style="width: 100%"
                    placeholder="please enter phone"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Email" name="email">
                <a-input
                    v-model:value="userFrom.email"
                    style="width: 100%"
                    placeholder="please enter email"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <template #extra>
          <a-space>
            <a-button @click="onClose">Cancel</a-button>
            <a-button type="primary" @click="onClose">Submit</a-button>
          </a-space>
        </template>
      </a-drawer>
    </div>
    <div style="font-size: 28px; background-color: white;position: relative;top: -330px;width: 800px;left: 500px;border-radius: 0.8rem;z-index: 1">
      <a-collapse v-model:activeKey="activeKey" :bordered="false">
        <template #expandIcon="{ isActive }">
          <caret-right-outlined :rotate="isActive ? 90 : 0" />
        </template>
        <a-collapse-panel key="1" header="个人资料" :style="customStyle">
          <div style="font-size: 15px">
            <br>
            <p>姓名：{{ userFrom.username }}</p>
            <p>性别：{{ userFrom.gender }}</p>
            <p>联系电话：{{ userFrom.phone }}</p>
            <p>邮箱：{{ userFrom.email }}</p>
            <p>积分：{{ userFrom.integral }}</p>
            <p>本周积分：{{ userFrom.temporary }}</p>
            <p>注册时间：{{ dayjs(userFrom.createTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="我的失物" :style="customStyle">
          <div>
            <a-list item-layout="vertical" :data-source="lostOrderList" style="">
              <template #renderItem="{ item }">
                <a-list-item>
                  <template #actions>
                    <div style="">
                      <a-tooltip :title="dayjs(item.reportTime).format('YYYY-MM-DD HH:mm:ss')">
                        <span >{{ dayjs(item.reportTime).fromNow() }}</span>
                      </a-tooltip>
                    </div>
                  </template>
                  <a-list-item-meta
                  >
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.lostName }}</a>
                      <a-tag style="margin-left: 5%" v-for="tag in item.lostType">{{ tag }}</a-tag>
                      <span style="margin-left: 5%">{{ item.description }}</span>
                      <a-button v-if="item.status === '1'" type="text" style="margin-left: 40px" disabled>已完成</a-button>
                      <a-button v-if="item.status === '0'" type="dashed" danger style="margin-left: 40px" @click="finish(item.id)">未完成</a-button>
                    </template>
                  </a-list-item-meta>

                </a-list-item>
              </template>
            </a-list>
          </div>

        </a-collapse-panel>
        <a-collapse-panel key="3" header="我的招领" :style="customStyle">
          <div>
            <a-list item-layout="vertical" :data-source="pickOrderList" style="">
              <template #renderItem="{ item }">
                <a-list-item>
                  <template #actions>
                    <div style="">
                      <a-tooltip :title="dayjs(item.reportTime).format('YYYY-MM-DD HH:mm:ss')">
                        <span >{{ dayjs(item.reportTime).fromNow() }}</span>
                      </a-tooltip>
                    </div>
                  </template>
                  <a-list-item-meta
                  >
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.pickName }}</a>
                      <a-tag style="margin-left: 5%" v-for="tag in item.pickType">{{ tag }}</a-tag>
                      <span style="margin-left: 5%">{{ item.description }}</span>
                      <span>{{ item.pickPlace}}</span>
                      <a-button v-if="item.status === '1'" type="text" style="margin-left: 40px" disabled>已完成</a-button>
                      <a-button v-if="item.status === '0'" type="dashed" danger style="margin-left: 40px" @click="finish2(item.id)">未完成</a-button>
                    </template>
                  </a-list-item-meta>

                </a-list-item>
              </template>
            </a-list>
          </div>
        </a-collapse-panel>
      </a-collapse>

    </div>
  </div>

</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watch ,inject} from "vue";
import { CaretRightOutlined,EditOutlined } from '@ant-design/icons-vue';
import myAxios from "../../plugins/myAxios";
import {useRouter} from "vue-router";
import { PlusOutlined } from '@ant-design/icons-vue';
import {message, UploadProps} from "ant-design-vue";
import {FileType} from "ant-design-vue/lib/upload/interface";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const reload = inject('reload')
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');


const userFrom = ref([])
const router = useRouter();
const user = ref();
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const activeKey = ref(['1']);
const activeUrl = ref('');
const visible = ref<boolean>(false);
const visible1 = ref<boolean>(false);
const lostOrderList = ref([])
const pickOrderList = ref([])

const finish = async (id:number)=>{
  const res = await myAxios.post('/lost/updateState/'+id)
  if(res.code === 0)
  {
    reload();
  }

}
const finish2 = async (id:number)=>{
  alert(id)
  const res = await myAxios.post('/pick/updateState/'+id)
  if(res.code === 0)
  {
    reload();
  }

}
watch(activeKey, val => {
  console.log(val);
});
const loadData = async () => {
  const res = await myAxios.get('/user/current')
  if (res.code === 0) {
    userFrom.value = res.data;
    activeUrl.value = res.data.avatarUrl
  } else {
    alert('数据加载失败，请重新登录')
    await router.push('/login')
    return
  }
  const order1 = await myAxios.get('/lost/getMy')
  if (order1.code === 200) {
    lostOrderList.value = order1.data;
  } else {
    alert('数据加载失败，请重新登录')
    await router.push('/login')
  }
  const order2 = await myAxios.get('/pick/getMy')
  if (order2.code === 200) {
    pickOrderList.value = order2.data;
  } else {
    alert('数据加载失败，请重新登录')
    await router.push('/login')
  }
}
const customStyle =
    'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden;font-size:20px';
const userFrom1 = {
  username: 'dogdjk',
  phone: '123456',
  email: '123456',
  createTime: new Date(),
  gender: '1',
  integral: 30,
  temporary: 2
}
onMounted(()=>{
  loadData();
})

const showDrawer = () => {
  visible.value = true;
};

const onClose = async () => {
  const res = await myAxios.post("/user/update", {
    "avatarUrl": userFrom.value.avatarUrl,
    "email": userFrom.value.email,
    "id": userFrom.value.id,
    "phone": userFrom.value.phone,
    "username": userFrom.value.username
  })
  if (res?.code === 0 && res.data){
    alert('更新成功')
    visible.value = false;
    reload()
  } else {
    alert('更新失败')
  }
};



const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
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
  userFrom.value.avatarUrl = result.data
  console.log(userFrom.value.avatarUrl)
  const res = await myAxios.post('/user/updateUrl',userFrom.value.avatarUrl)
  console.log(res);
  let base64 = getBase64(file);
  // 调用 onSuccess 不然会一直显示loadning
  onSuccess()
}

const changeUrl = () =>{
  visible1.value = false;
}
</script>

<style scoped>
.item2{
  height: 100%;
  position: relative;
  left: 150px;
  /*padding-left: 40px;*/
  font-size: 20px;
  /*padding-top: 15px;*/
}
/*.item2:hover {*/
/*  color: white;*/
/*}*/

.more:hover{
  margin-top: 0px;/*和hover的margin-top有对比，原无30,现在0，相当于上移了,30px*/
  box-shadow: 0 0 20px 2px #918f8f;/*盒子阴影*/
  transition: all 0.5s;/*持续时间*/
}
</style>
