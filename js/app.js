/*
 * Enemy
 */

class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 400);
    }

    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt) {
        if (this.x <= 550) {
            this.x += this.speed * dt;
        } else {
            this.x = -1
        }

        if (player.x >= this.x - 50 &&
            player.x <= this.x + 50 &&
            player.y >= this.y - 50 &&
            player.y <= this.y + 50) {
            player.reset();
        }
    }

    // Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/*
 * Player
 */
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }

    update(keyPress) {}

    reset() {
        this.x = 200;
        this.y = 400;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyPress) {
        if (keyPress == "left" && this.x > 0) {
            this.x -= 100;
        }
        if (keyPress == "up" && this.y > 0) {
            this.y -= 85;
        }
        if (keyPress == "right" && this.x < 305) {
            this.x += 100;
        }
        if (keyPress == "down" && this.y < 320) {
            this.y += 85;
        }
        if (this.y < 0) {
            setTimeout(resetPop, 100);
        }
    }
}

function resetPop() {
    window.confirm("Congratulations!");
    player.reset();

}

const player = new Player(200, 400);
const allEnemies = [new Enemy(200, 225), new Enemy(100, 140), new Enemy(160, 60), new Enemy(120, 140)];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});