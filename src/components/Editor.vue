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
            <ProfileEditor v-bind:profile="profile"/>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
            <ArrayEditor v-bind:items="workHistory" v-bind:labels="{company: '公司', content: '工作内容'}" title="工作经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 2}">
            <ArrayEditor v-bind:items="studyHistory" v-bind:labels="{school: '学习', duration: '时间', degree: '学位'}" title="学习经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 3}">
            <ArrayEditor v-bind:items="projects" v-bind:labels="{name: '项目名称', content: '工作内容'}" title="项目经历"/>
          </li>
          <li v-bind:class="{active: currentTab === 4}">获奖情况</li>
          <li v-bind:class="{active: currentTab === 5}">联系方式</li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from "./ProfileEditor";
import ArrayEditor from "./ArrayEditor";
export default {
  components: { ProfileEditor, ArrayEditor },
  data() {
    return {
      currentTab: 0,
      icons: [
        "shenfenzheng",
        "iconset0190",
        "shu",
        "shoucang",
        "jiangbei",
        "weibiaoti-"
      ],
      profile: { name: "", city: "", birth: "" },
      workHistory: [{ company: "", content: "" }],
      studyHistory: [{ school: "", duration: "", degree: "" }],
      projects: [{ name: "", content: "" }]
    };
  },
  methods: {},
  created() {}
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