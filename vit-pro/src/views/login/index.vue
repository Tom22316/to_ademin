<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('登录成功!')
        } else {
            console.log('登录失败!')
        }
    })
}

</script>

<template>
    <div class="login-container">
        <div class="login-card">
            <div class="content">
                <el-form ref="ruleFormRef" :model="ruleForm">
                    <el-form-item label="账号" prop="pass">
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="age">
                        <el-input v-model.number="ruleForm.age" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>


</template>

<style lang="scss" scoped>
.login-container {
    // border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;

    .login-card {
        width: 480px;
        height: 444px;
        border-radius: 20px;
        box-shadow: 0 0 10px #dcdfe6;
        background-color: var(--el-bg-color);
        overflow: hidden;

        .content {
            padding: 20px 50px 50px 50px;
        }
    }
}
</style>