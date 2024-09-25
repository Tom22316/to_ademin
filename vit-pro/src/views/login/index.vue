<script lang="ts" setup>
import {Picture, Loading } from "@element-plus/icons-vue"
import { reactive, ref } from "vue";
import { type LoginRequestData } from "../../api/login/type/login"
// 验证码图片
const codeUrl = ref("")

//登录表单数据
// loginFormData: LoginRequestData 限定loginFormData对象的类型是LoginRequestData类型
const loginFormData: LoginRequestData = reactive({
    usename: "admin",
    password : "12345678",
    code:""
})

//创建验证码
const createCode = () => {
    loginFormData.code = "";
    codeUrl.value = "";
    
}
</script>

<template>
    <div class="login-container">
        <div class="switch">11</div>
        <div class="owl"></div>
        <div class="login-card">
            <div class="title">11</div>
            <div class="content">
                <el-form ref="ruleFormRef">
                    <el-form-item prop="username">
                        <el-input type="text" tabindex="1" placeholder="用户名" size="large" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" tabindex="2" placeholder="密码" size="large" show-password />
                    </el-form-item>

                    <el-form-item prop="code">
                        <el-input type="text" tabindex="3" placeholder="验证码" maxlength="7" size="large" />
                        <!-- 验证码 插槽-->
                        <template #append>
                            <el-image :src="codeUrl">
                                <template #placeholder>
                                    <el-icon>
                                        <Picture/>
                                    </el-icon>
                                </template>
                                <template #error>
                                    <el-icon>
                                        <Loading/>
                                    </el-icon>
                                </template>
                            </el-image>
                        </template>
                    </el-form-item>
                    <el-button type="primary" size="large">登录</el-button>
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

    .switch {
        position: fixed;
        top: 5%;
        right: 5%;
        cursor: pointer;
    }

    .owl {
        position: relative;
        width: 120px;
        height: 95px;
        transform: translateY(12%);
        background-image: url(/src/assets/login/face.png);
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .login-card {
        width: 480px;
        max-width: 90%;
        border-radius: 20px;
        box-shadow: 0 0 10px #dcdfe6;
        background-color: var(--el-bg-color);
        overflow: hidden;

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
        }

        .content {
            padding: 20px 50px 50px 50px;

            .el-button {
                width: 100%;
                margin-top: 10px;
            }

        }
    }
}
</style>