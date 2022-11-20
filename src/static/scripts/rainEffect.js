function init () {
    const canvases1 = window.document.getElementsByClassName('canvas1');
    const canvases2 = window.document.getElementsByClassName('canvas2');
    const canvases3 = window.document.getElementsByClassName('canvas3');
    for (let i = 0; i < canvases1.length; i++) {
        loop(canvases1[i], canvases2[i], canvases3[i]);
    }

    function loop (canvas1, canvas2, canvas3) {
        const ctx1 = canvas1.getContext('2d');
        const ctx2 = canvas2.getContext('2d');
        const ctx3 = canvas3.getContext('2d');

        const rainthroughnum = 500;
        const speedRainTrough = 25;
        const RainTrough = [];

        const rainnum = 500;
        const rain = [];

        const lightning = [];
        let lightTimeCurrent = 0;
        let lightTimeTotal = 0;

        let w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
        let h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

        window.addEventListener('resize', function () {
            w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
            h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
        });

        function random (min, max) {
            return Math.random() * (max - min + 1) + min;
        }

        function clearcanvas1 () {
            ctx1.clearRect(0, 0, w, h);
        }

        function clearcanvas2 () {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        }

        function clearCanvas3 () {
            ctx3.globalCompositeOperation = 'destination-out';
            ctx3.fillStyle = 'rgba(0,0,0,' + random(1, 30) / 100 + ')';
            ctx3.fillRect(0, 0, w, h);
            ctx3.globalCompositeOperation = 'source-over';
        }

        function createRainTrough () {
            for (let i = 0; i < rainthroughnum; i++) {
                RainTrough[i] = {
                    x: random(0, w),
                    y: random(0, h),
                    length: Math.floor(random(1, 830)),
                    opacity: Math.random() * 0.2,
                    xs: random(-2, 2),
                    ys: random(10, 20)
                };
            }
        }

        function createRain () {
            for (let i = 0; i < rainnum; i++) {
                rain[i] = {
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    xs: -4 + Math.random() * 4 + 2,
                    ys: Math.random() * 10 + 10
                };
            }
        }

        function createLightning () {
            const x = random(100, w - 100);
            const y = random(0, h / 4);

            const createCount = random(1, 3);
            for (let i = 0; i < createCount; i++) {
                const single = {
                    x,
                    y,
                    xRange: random(5, 30),
                    yRange: random(10, 25),
                    path: [{
                        x,
                        y
                    }],
                    pathLimit: random(40, 55)
                };
                lightning.push(single);
            }
        }

        function drawRainTrough (i) {
            ctx1.beginPath();
            const grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
            grd.addColorStop(0, 'rgba(255,255,255,0)');
            grd.addColorStop(1, 'rgba(255,255,255,' + RainTrough[i].opacity + ')');

            ctx1.fillStyle = grd;
            ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
            ctx1.fill();
        }

        function drawRain (i) {
            ctx2.beginPath();
            ctx2.moveTo(rain[i].x, rain[i].y);
            ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
            ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
            ctx2.lineWidth = 3;
            ctx2.lineCap = 'round';
            ctx2.stroke();
        }

        function drawLightning () {
            for (let i = 0; i < lightning.length; i++) {
                const light = lightning[i];

                light.path.push({
                    x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
                    y: light.path[light.path.length - 1].y + (random(0, light.yRange))
                });

                if (light.path.length > light.pathLimit) {
                    lightning.splice(i, 1);
                }

                ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
                ctx3.lineWidth = 3;
                if (random(0, 15) === 0) {
                    ctx3.lineWidth = 6;
                }
                if (random(0, 30) === 0) {
                    ctx3.lineWidth = 8;
                }

                ctx3.beginPath();
                ctx3.moveTo(light.x, light.y);
                for (let pc = 0; pc < light.path.length; pc++) {
                    ctx3.lineTo(light.path[pc].x, light.path[pc].y);
                }
                if (Math.floor(random(0, 30)) === 1) { // to fos apo piso
                    ctx3.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
                    ctx3.fillRect(0, 0, w, h);
                }
                ctx3.lineJoin = 'miter';
                ctx3.stroke();
            }
        }

        function animateRainTrough () {
            clearcanvas1();
            for (let i = 0; i < rainthroughnum; i++) {
                if (RainTrough[i].y >= h) {
                    RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
                } else {
                    RainTrough[i].y += speedRainTrough;
                }
                drawRainTrough(i);
            }
        }

        function animateRain () {
            clearcanvas2();
            for (let i = 0; i < rainnum; i++) {
                rain[i].x += rain[i].xs;
                rain[i].y += rain[i].ys;
                if (rain[i].x > w || rain[i].y > h) {
                    rain[i].x = Math.random() * w;
                    rain[i].y = -20;
                }
                drawRain(i);
            }
        }

        function animateLightning () {
            clearCanvas3();
            lightTimeCurrent++;
            if (lightTimeCurrent >= lightTimeTotal) {
                createLightning();
                lightTimeCurrent = 0;
                lightTimeTotal = 200; // rand(100, 200)
            }
            drawLightning();
        }

        function init () {
            createRainTrough();
            createRain();
            window.addEventListener('resize', createRainTrough);
        }

        init();

        function animloop () {
            animateRainTrough();
            animateRain();
            animateLightning();
            requestAnimationFrame(animloop);
        }

        animloop();
    }
}
init();