// （2）获得绘制上下文并且设置维度信息。
// 获得canvas容器元素
const canvas = document.getElementById("canvas");
// 设置canvas的样式宽高。这决定了canvas在画布上的大小呈现
canvas.style.width = 400 + "px";
canvas.style.height = 200 + "px";

// 设置canvas画布宽高，这个宽高是可以画图的区域大小，样式宽高默认等于画布宽高
canvas.width = 400;
canvas.height = 200;

// 获得绘制的上下文。之后的API都是通过context获得
const context = canvas.getContext("2d");

// //绘制一个矩形
// context.fillStyle = "red";//设置填充色
// context.strokeStyle = "yellow";//设置边框颜色
// context.lineWidth = 10;//设置边框线宽
// context.strokeRect(0, 0, 100, 100);//绘制边框
// context.fillRect(5, 5, 95, 95);//绘制填充颜色

// // 绘制一段文字
// context.fillStyle = "black";//设置文字的颜色
// context.font = "25px PingFangSC-Regular,sans-serif";//设置文字的字体和大小
// context.fillText("hello world", 150, 100);//绘制文字

/*
 * 这里需要补上获得绘制上下文并且设置维度信息的内容。
 */
context.fillStyle = "red";
context.fillRect(0, 0, 50, 50);
// 进行一系列坐标变换
context.fillStyle = "blue";
context.translate(50, 50);
context.rotate(-Math.PI / 6);
context.scale(2, 3);
context.fillRect(0, 0, 50, 50);