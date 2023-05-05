<template>
  <div class="clearfix" style="padding-top: 300px">
    <a-upload
      v-model:file-list="fileList"
      action="/qiniu/uploadImg"
      list-type="picture-card"
      @preview="handlePreview"
      :before-upload="beforeUpload"
      :customRequest="customRequest"
      style="background-color: transparent"
    >
      <a-avatar :size="64">
        <template #icon
          ><img src="https://s1.ax1x.com/2022/07/27/vSTnWd.jpg" alt=""
        /></template>
      </a-avatar>
    </a-upload>
    <a-modal
      :visible="previewVisible"
      :title="previewTitle"
      :footer="null"
      @cancel="handleCancel"
    >
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined } from "@ant-design/icons-vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { message, UploadProps } from "ant-design-vue";
import { FileType } from "ant-design-vue/lib/upload/interface";
import myAxios from "../plugins/myAxios";

const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");

const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const fileList = ref<UploadProps["fileList"]>([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};
const handlePreview = async (file: UploadProps["fileList"][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
const beforeUpload = (file: FileType) => {
  // console.log('beforeUpload')
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG file! ");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
};
const customRequest = async (options: any) => {
  // console.log('customRequest', options)
  const { filename, file, action, data, onSuccess } = options;
  // 定义上传的文件
  const formData = new FormData();
  formData.append(filename, file);
  // 发送请求
  const result: any = await myAxios.post(
    "/qiniu/uploadImg",
    {
      file: file,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  // console.log(result)
  let base64 = getBase64(file);
  // 调用 onSuccess 不然会一直显示loadning
  onSuccess();
};
</script>

<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
