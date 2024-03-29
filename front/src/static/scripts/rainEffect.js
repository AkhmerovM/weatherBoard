const makeItRain = function (rain) {
    // clear out everything
    rain.innerHTML = '';

    let increment = 0;
    let drops = '';
    let backDrops = '';

    while (increment < 100) {
        // couple random numbers to use for various randomizations
        // random number between 98 and 1
        const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        // random number between 5 and 2
        const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        // increment
        increment += randoFiver;
        // add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.8' + randoHundo + 's;"></div></div>';
    }

    rain.innerHTML = drops;
};
const makeItRainStart = () => {
    const rains = document.getElementsByClassName('rain');
    for (const rain of rains) {
        makeItRain(rain);
    }
};
