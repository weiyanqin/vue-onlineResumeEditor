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
            <h2>个人信息</h2>
            <el-form>
                <el-form-item label="姓名">
                  <el-input v-model="profile.name"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                  <el-input v-model="profile.city"></el-input>
                </el-form-item>
                <el-form-item label="出生年月">
                  <el-input v-model="profile.birth"></el-input>
                </el-form-item>
            </el-form>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
            <WorkHistoryEditor v-bind:workHistory="workHistory"/>
          </li>
          <li v-bind:class="{active: currentTab === 2}">学习经历</li>
          <li v-bind:class="{active: currentTab === 3}">项目经历</li>
          <li v-bind:class="{active: currentTab === 4}">获奖情况</li>
          <li v-bind:class="{active: currentTab === 5}">联系方式</li>
        </ol>
    </div>
</template>

<script>
import WorkHistoryEditor from './WorkHistoryEditor'
export default {
  components: {WorkHistoryEditor},
  data() {
    return {
      currentTab: 0,
      icons: [ "shenfenzheng", "iconset0190", "shu", "shoucang", "jiangbei", "weibiaoti-" ],
      profile: { name: "", city: "", birth: "" },
      workHistory: [{ company: "", content: "" }]
    };
  },
  methods:{},
  created(){}
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
    flex:1;
    .container{
      position: relative;
      .el-icon-remove{
        position: absolute;
        right: 0; top: 0;
      }
    }
    > li {
      display: none;
      padding: 32px;
      height:100%;
      overflow: auto;
      &.active {
        display: block;
      }
    }
  }
}
</style>