<script lang="ts" setup>

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
                        <el-input type="text" placeholder="用户名" size="large" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="密码" size="large" show-password />
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