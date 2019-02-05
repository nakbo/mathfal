# mathfal
Mathematical Derivative Verification Code of the Math Function and Limit

# 预览

https://lib.krait.cn/library/mathfal/0.1/demo.html

# 使用方法

 - 引入 mathfal.js
>

``` html

<script src="https://lib.krait.cn/library/mathfal/0.1/mathfal.js"></script>

```

 - 进行初始化 new 一个对象 
 **注意** 验证机制需要结合自己的页面方案，下面仅对结果进行验证

``` JavaScript

var mathfal = new mathfal({
        identity:{
            id: "mathfal_container",
            canvasId: "mathfal_canvas"
        }
    });
    document.getElementById("mathfal_button").onclick = function(){
        var mathfalValue = mathfal.validate(document.getElementById("mathfal_input").value);
        if(mathfalValue){
                alert("求导计算正确");
        }else{
                alert("求导计算错误");
        }
    }

```

 - 在需要处加入,需结合自己的结构进行美化
 ``` html

<div id="mathfal_container"></div>
<input id="mathfal_input" value="" type="text" required/>
<button id="mathfal_button">核对</button>
```
