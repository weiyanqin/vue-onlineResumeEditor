<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v:on:click="currentTab = i">
                    <svg class="icon" aria-hidden="">
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
            <li v-bind:class="{active: currentTab === 0}">tab1</li>
            <li v-bind:class="{active: currentTab === 0}">tab2</li>
            <li v-bind:class="{active: currentTab === 0}">tab3</li>
            <li v-bind:class="{active: currentTab === 0}">tab4</li>
            <li v-bind:class="{active: currentTab === 0}">tab5</li>
            <li v-bind:class="{active: currentTab === 0}">tab6</li>
        </ol>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0
    };
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
    > li {
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>