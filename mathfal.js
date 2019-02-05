/**
 * @project name: mathfal
 * @author 权那他(Krait)
 * @link https://krait.cn
 * @description: Mathematical Derivative Verification Code of the Math Function and Limit
 */
/*! https://github.com/kraity/mathfal */
!(function(window, document) {
    function mathfal(mathfal) {
        /* Default mathfal parameter values */
        this.mathfal = {
            identity:{
                id: "", /* id */
                canvasId: "" /* canvas id */
            },
            structure:{
                power:{
                    /* 构造幂函数个数 */
                    powerBase:{
                        0: [9,1,7,5], 1: [9,1,5,3], 2: [9,1,3,1]
                    },
                    /* 幂函数求导阶数 范围 */
                    powerRankMax:{
                        0:1, 1:4
                    },
                    /* 幂函数的导数赋值运算 范围 */
                    assignment:{
                        0:1, 1:3
                    }
                }
            },
            framework:{
                width: "270", height: "270"
            },
            calculation: ""
        };
        /* Modify the default parameter values based on the incoming parameters */
        for(var i in mathfal) {
            this.mathfal[i] = mathfal[i];
        }
        this._init();
        this.refresh();
    }
    mathfal.prototype = {
        /* name */
        name: "Math Function and Limit",
        /* version */
        version: '0.1',
        /* Initialization method */
        _init: function() {
            var con = document.getElementById(this.mathfal.identity.id);
            var canvas = document.createElement("canvas");
            canvas.id = this.mathfal.identity.canvasId;
            canvas.width = this.mathfal.framework.width;
            canvas.height = this.mathfal.framework.height;
            canvas.style.cursor = "pointer";
            canvas.innerHTML = "Canvas is not supported in your browser version!";
            con.appendChild(canvas);
            var parent = this;
            canvas.onclick = function(){
                parent.refresh();
            }
        },
        /* Creative expression */
        refresh: function() {
            this.mathfal.calculation = "";
            var canvas = document.getElementById(this.mathfal.identity.canvasId);
            if(canvas.getContext) {
                var ctx = canvas.getContext('2d');
            }else{
                return;
            }
            var expArray = new Array();

            for(var i in this.mathfal.structure.power.powerBase) {
                expArray[i] = powerCreate(this.mathfal.structure.power.powerBase[i]);
            }

            var base = randomNum(
                this.mathfal.structure.power.assignment["0"],
                Number(this.mathfal.structure.power.assignment["1"]+1)
                ),
                rank = randomNum(
                    this.mathfal.structure.power.powerRankMax["0"],
                    Number(this.mathfal.structure.power.powerRankMax["1"]+1)
                ),
                rankRank = "";
            for (var i=0;i<rank ;i++) {
                rankRank += "'";
            }

            this.mathfal.calculation = calculationPower(expArray,base,rank); // Validation object
            console.log(this.mathfal.calculation);

            var Expression = "φ(x)=";
            for(var index in expArray){
                Expression += expArray[index][0]+"x^"+expArray[index][1]+"+";
            }


            Expression += randomNum(0, 100);
            ExpressionCal = "Calculation φ"+rankRank+"("+base+")";
            /* Drawing expressions */
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, this.mathfal.framework.width, this.mathfal.framework.height);
            ctx.textBaseline = "center";
            ctx.font = "18px Arial";
            ctx.fillStyle = "#000000";
            ctx.fillText(Expression,30,120);
            ctx.textBaseline = "center";
            ctx.fillText(ExpressionCal,70,160);
        },
        /* Verification of numerical results */
        validate: function(calculation){
            var calculation = Number(calculation);
            var v_calculation = Number(this.mathfal.calculation);
            if(calculation == v_calculation){
                return true;
            }else{
                this.refresh();
                return false;
            }
        }
    };
    /* 创建幂函数 简单型 */
    function powerCreate(array) {
        var coefficient, //系数
            frequency, //次数
            powerArray; //加入数组
        coefficient = randomNum(array[1], array[0]); /* 0的概率极小 */
        frequency = randomNum(array[3], array[2]);
        powerArray = [coefficient,frequency];
        return powerArray; //抛出
    }
    /* 幂函数 求导法则 */
    function derivationPower(array) {
        var coe = array[0], //系数
            fre = array[1], //次数
            powDer; //加入数组
        coe = coe * fre;
        fre = fre>0?fre-1:-1;
        powDer = [coe,fre];
        return powDer;
    }
    /* 计算幂函数结果 */
    function calculationPower(array,x,rank) {
        var cal = Number(0),
            val = new Array();
        for(var index in array){
            /* 幂函数高阶求导 */
            var oneFor = array[index];
            for (var i=0;i<rank;i++) {
                oneFor = derivationPower(oneFor);
            }
            val[index] = oneFor;
            /* 赋值运算 */
            var coe = Number(val[index][1])>=0?Number(1):Number(0);
            for (var i=0;i< Number(val[index][1]);i++) {
                coe *= Number(x);
            }
            /* 累加运算 */
            cal += Number(val[index][0]) * Number(coe);
        }
        return cal;
    }
    /* 生成一个随机数 */
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    window.mathfal = mathfal;
})(window, document);