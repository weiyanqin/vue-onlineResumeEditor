<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5,]" v-bind:class="{active:currentTab === i}" v-on:click="currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>

            <!-- <ol>
              <li v-bind:class="{active: currentTab === 0}" v-on:click="currentTab = 0">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shenfenzheng"></use>
                  </svg>
              </li>
              <li v-bind:class="{active: currentTab === 1}" v-on:click="currentTab = 1">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-iconset0190"></use>
                  </svg>
              </li>             
              <li v-bind:class="{active: currentTab === 2}" v-on:click="currentTab = 2">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shu"></use>
                  </svg>
              </li>             
              <li v-bind:class="{active: currentTab === 3}" v-on:click="currentTab = 3">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shoucang"></use>
                  </svg>
              </li>             
              <li v-bind:class="{active: currentTab === 4}" v-on:click="currentTab = 4">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-jiangbei"></use>
                  </svg>
              </li>             
              <li v-bind:class="{active: currentTab === 5}" v-on:click="currentTab = 5">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-weibiaoti-"></use>
                  </svg>
              </li>
            </ol> -->

        </nav>

        <ol class="panes">
          <!-- <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}"> Tab {{i}} </li> -->
          <li v-bind:class="{active: currentTab === 0}">
            <ProfileEditor v-bind:profile="resume.profile"/>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
            <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company: '公司', content: '工作内容'}" title="工作经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 2}">
            <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school: '学习', duration: '时间', degree: '学位'}" title="学习经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 3}">
            <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name: '项目名称', content: '工作内容'}" title="项目经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 4}">
            <ArrayEditor v-bind:items="resume.awards" title="获奖情况" v-bind:labels="{name: '获奖详情'}"/>
          </li>
          <li v-bind:class="{active: currentTab === 5}">
            <h2>联系方式</h2>
            <el-form>
                <el-form-item label="QQ">
                    <el-input v-model="resume.contacts.qq"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input v-model="resume.contacts.wechat"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="resume.contacts.email"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="resume.contacts.phone"></el-input>
                </el-form-item>
            </el-form>
          </li>

        </ol>
    </div>
</template>

<script>
import ProfileEditor from "./ProfileEditor";
import ArrayEditor from "./ArrayEditor";
export default {
  components: { ProfileEditor, ArrayEditor },
  // props: ['resume'],
  data() {
    return {
      currentTab: 0,
      icons: [ "shenfenzheng", "iconset0190", "shu", "shoucang", "jiangbei", "weibiaoti-" ],
    }
  },
  computed: {
    resume (){
      return this.$store.state.resume
    },
    
  },
  active:{
    get(){
      return this.$store.state.active
    },
    set(value){
      return this.$store.commit('switchTab', value)
    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  > nav {
    background: #000;
    width: 80px;
    > ol > li {
      list-style-type: none;
      border: 1px solid red;
      padding: 16px 0;
      text-align: center;
      > .icon {
        width: 24px;
        height: 24px;
        fill: white;
      }
      &.active {
        background: white;
        > .icon {
          fill: black;
        }
      }
    }
  }
  > .panes {
    flex: 1;
    .container {
      position: relative;
      .el-icon-remove {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    > li {
      display: none;
      padding: 32px;
      height: 100%;
      overflow: auto;
      &.active {
        display: block;
      }
    }
  }
}
</style>