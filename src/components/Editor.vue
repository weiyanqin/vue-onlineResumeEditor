<template>
    <div id="editor">
        <nav>
            <ol>
              <li class="active">
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shenfenzheng"></use>
                  </svg>
              </li>
               <li>
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-iconset0190"></use>
                  </svg>
              </li>             
               <li>
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shu"></use>
                  </svg>
              </li>             
               <li>
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-shoucang"></use>
                  </svg>
              </li>             
               <li>
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-jiangbei"></use>
                  </svg>
              </li>             
               <li>
                  <svg class="icon" aria-hidden="">
                    <use xlink:href="#icon-weibiaoti-"></use>
                  </svg>
              </li>             
            </ol>
        </nav>
        <ol class="panes"></ol>
    </div>
</template>

<style lang="scss">
#editor {
    min-height: 100px;
    display: flex;
    >nav{
        background: #000;    
        width: 80px;
        > ol > li{
            border: 1px solid red;
            padding: 8px 0;
            text-align: center;
        }
         .icon{
            width: 24px;
            height: 24px;    
            fill: white;

            
        }
        &.active{
            background: white;
            >.icon{
                fill: black;
            }
        }
    }

}
</style>