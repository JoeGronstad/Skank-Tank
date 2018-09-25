class HealthPack {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.div = document.createElement("div");
        this.div.className = "health";
    }

    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}

function setup() {
    let canvas = document.getElementById("canvas");
    let btnStart = document.getElementById("start");

    btnStart.addEventListener("click", start);


    let healthPack = [];

    function start() {
        canvas.removeChild(btnStart);
        setInterval(newHealthBoost, 15000);

        //CodePen start
        let count = 4;
        let countdownNumberEl = document.getElementById("countdown-number");
        let countdown = document.getElementById("countdown");

        setInterval(function () {
            
            if (count == 1){ 
                canvas.removeChild(countdown);   
            }
            count -=1;
            countdownNumberEl.textContent = count; 
        }, 1000);
        //end


        function newHealthBoost() {
            if (healthPack.length > 4) return;
            healthBoost();
        }

        function healthBoost() {
            let x = Math.random() * 1170;
            let y = Math.random() * 570;
            let health = new HealthPack(x, y);
            health.render();
            canvas.appendChild(health.div);
            healthPack.push(health);
        }

        
    }
}