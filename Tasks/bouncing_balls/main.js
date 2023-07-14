// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 随机生成颜色
function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}

// 建立一个形状模型
function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

// 定义小球
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this,x, y, velX, velY, exists);
    this.exists = exists;
    this.color = color;
    this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;


// 定义恶魔圈
function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 30, 30, exists);
    this.color = 'white';
    this.size = 20;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;



// 画小球
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

// 首先，我们使用 beginPath() 来声明我们现在要开始在纸上画一个图形了。
// 然后，我们使用 fillStyle 来定义这个图形的颜色 — 这个值正是小球的颜色属性。
// 接下来，我们使用 arc() 方法来在纸上画出一段圆弧。有这些参数：
// x 和 y 是圆弧的中心的坐标 —— 也就是小球的中心坐标。
// 圆弧的半径 —— 小球的半径。
// 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 2 * PI，也就是 360 度（如果你设置成 0 和 1 * PI，则只会出现一个半圆，也就是 180 度）
// 最后，我们使用 fill() 方法，也就是声明我们结束了以 beginPath() 开始的绘画，并且使用我们之前设置的颜色进行填充。


Ball.prototype.update = function () {
    // 函数的前四个部分用来检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    // 最后两行，我们将 velX 的值加到 x 的坐标上，将 velY 的值加到 y 坐标上 —— 每次调用这个方法的时候小球就移动这么多。
    this.x += this.velX;
    this.y += this.velY;


    // 添加碰撞测验
    Ball.prototype.collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
            if (this !== balls[j]) {
                // 使用一个 if 语句来检查遍历的小球是否是当前的小球
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = randomColor();
                    // 我们使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和。
                }
            }
        }
    }


}

// 储存小球
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        randomColor(),
        size
        
    );
    balls.push(ball);
}


// 画恶魔圈
EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

// 检查恶魔圈
EvilCircle.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.x -= (this.size);
    }

    if ((this.x - this.size) <= 0) {
        this.x += (this.size);
    }

    if ((this.y + this.size) >= height) {
        this.y -= (this.size);
    }

    if ((this.y - this.size) <= 0) {
        this.y += (this.size);
    }
}



// 移动恶魔圈
EvilCircle.prototype.setControls = function () {
    window.addEventListener('keydown',(event) =>{
        switch(event.key) {
            case 'a':
                this.x -= this.velX;
                break;
            case 'd':
                this.x += this.velX;
                break;
            case 'w':
                this.y -= this.velY;
                break;
            case 's':
                this.y += this.velY;
                break;
        }
    });
}

// 添加恶魔圈碰撞测验
EvilCircle.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (balls[j].exists === true) {
            // 使用一个 if 语句来检查小球是否存在
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
                
            }
        }
    }
}

var evilcircle = new EvilCircle (
        random(0, width),
        random(0, height),
        true,
    );
console.log("Evil Circle:", evilcircle);

evilcircle.setControls();

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    // 将整个画布的颜色设置成半透明的黑色。然后使用 fillRect()（这四个参数分别是起始的坐标、绘制的矩形的宽和高）画出一个填充满整个画布的矩形。这是在下一个视图画出来时用来遮住之前的视图的。如果不这样做得话，你就会在屏幕上看到一条蛇的形状而不是小球的运动了。用来填充的颜色设置成半透明的rgba(0,0,0,0.25)，也就是让之前的视图留下来一点点，从而你可以看到小球运动时的轨迹。如果你将 0.25 设置成 1 时，你就完全看不到了。试着改变其中的值查看造成的影响
    
    
    for (let i = 0; i < balls.length; i++) {
        if(balls[i].exists){
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    // 当且仅当小球数量小于 25 时，将 random() 函数产生的数字传入新的小球实例从而创建一个新的小球，并且加入到数组中。因此当屏幕上有 25 个小球时，不会再出现更多小球。你可以改变这个值，从而看到不同小球个数造成的影响。如果你的电脑或者浏览器性能不怎么样的话，几千个小球的速度就会明显慢下来。
    // 遍历数组中的所有小球，并且让存在的小球调用 draw() 和 update() 函数来将自己画出来，并且再接下来的每一帧都按照其速度进行位置的更新。

    evilcircle.draw();
    evilcircle.update();
    evilcircle.collisionDetect();

    requestAnimationFrame(loop);
    // 使用 requestAnimationFrame() 方法再运行一次函数 —— 当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，这样我们可以得到一个平滑的动画效果。这主要是通过递归完成的 —— 也就是说函数每次运行的时候都会调用自己，从而可以一遍又一遍得运行。
}

loop();


