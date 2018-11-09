<template>
    <div id="topbar">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <div v-if="logined" class="userActions">
              <span class="welcome">你好，{{user.username}}</span>
              <a class="button" href="#" @click.prevent="signOut">登出</a>
            </div>
            <div v-else class="userActions">
              <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
              <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
            </div>
            <el-button v-on:click="login">保存</el-button>
            <el-button v-on:click="preview">预览</el-button>
        </div>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="signIn($event)"/>
        </MyDialog>
        <MyDialog title="登录" :visible="signInDialogVisible"
          @close="signInDialogVisible = false">
          <SignInForm @success="signIn($event)"/>
        </MyDialog>
    </div>

</template>

<script>
import MyDialog from "./MyDialog";
import SignUpForm from "./SignUpForm";
import AV from '../lib/leancloud'
import SignInForm from './SignInForm'

export default {
  name: 'Topbar',
  methods: {
    preview() {
      this.$emit("preview");
    },
    login() {
      this.$emit("login");
    },
    signUp() {
      this.$emit("signUp");
    },
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user) {
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit("setUser", user);
    }
  },
  components: { MyDialog, SignUpForm, SignInForm },
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    logined(){
      return this.user.id
    }
  }
};
</script>

<style>
#topbar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  font-size: 20px;
}
#topbar .login {
  display: none;
  position: fixed;
  width: 40%;
  min-width: 300px;
  min-height: 400px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
#topbar .form {
  width: 100%;
  border-radius: 5px;
  margin: 0 0 20px 0;
}
#topbar .form h2 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0 20px 0;
}
#topbar.form .row {
  margin: 5px;
}

#topbar .form .row label {
  display: block;
  margin: 0 0 5px 0;
}
#topbar .form .row input {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
#topbar .form .row .submit {
  display: block;
  width: 100%;
  background: #cb4d4e;
  color: #fff;
  padding: 5px;
  text-align: center;
  line-height: 1.5;
  margin-top: 20px;
  font-weight: 400px;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
}
#topbar .login .toSignUp {
  padding: 10px;
  text-align: center;
}
#topbar .login .toSignUp a {
  color: #cb4d4e;
  font-weight: 700;
}
#topbar .signUp {
  display: none;
  position: fixed;
  width: 40%;
  min-width: 300px;
  min-height: 400px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
#topbar .signUp .toLogin {
  padding: 10px;
  text-align: center;
}
#tobar .signUp .toLogin a {
  color: #cb4d4e;
  font-weight: 700;
}
.button {
  width: 72px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  background: #ddd;
  color: #222;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
</style> 

