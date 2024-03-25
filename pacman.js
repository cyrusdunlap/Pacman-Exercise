var pos = 0;
    const pacArray = [
        'pacman1.png', 'pacman2.png',
        'pacman3.png', 'pacman4.png'
    ];
    var direction = 0;
    const pacMen = []; // This array holds all the pacmen

    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    }


    function imgRandom(pacArray) {
        const randomIndex = Math.floor(Math.random() * pacArray.length);
        const randomImage = pacArray[randomIndex];
        return randomImage;
    }

    // Factory to make a PacMan at a random position with random velocity
    function makePac() {
        // returns an object with random values scaled {x: 33, y: 21}
        let velocity = setToRandom(10); // {x:?, y:?}
        let position = setToRandom(800);
        // Add image to div id = game
        let game = document.getElementById('game');
        let newimg = document.createElement('img');
        newimg.style.position = 'absolute';
        newimg.src = imgRandom(pacArray);
        newimg.width = 100;
        newimg.style.left = position.x;
        newimg.style.top = position.y;

        // add new Child image to game
        game.appendChild(newimg);
        // return details in an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newimg.style.left = item.position.x;
            item.newimg.style.top = item.position.y;
        })
        setTimeout(update, 20);
    }

    function updateTwo() {
        pacMen.forEach((item) => {
            if (item.velocity.x > 0) {
                if (item.newimg.src.includes("PacMan1.png")) {
                item.newimg.src = './PacMan2.png';
                } else {
                item.newimg.src = './PacMan1.png';
                }
            } else {
                if (item.newimg.src.includes("PacMan3.png")) {
                item.newimg.src = './PacMan4.png';
                } else {
                item.newimg.src = './PacMan3.png';
                }
            }
        })
        setTimeout(updateTwo, 100);
    }


    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + 110 > window.innerWidth ||
            item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        if (item.position.y + item.velocity.y + 110 > window.innerHeight ||
            item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }