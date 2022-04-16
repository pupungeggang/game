var UIField = {
    info : {
        rect : [160, 160, 960, 400]
    }
};

function loopField() {
    displayField();
}

function displayField() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);

    for (var i = 0; i < field.floor.length; i++) {
        for (var j = 0; j < field.floor[0].length; j++) {
            context.drawImage(img.floor[field.floor[i][j]], (j - field.camera[0]) * 80, (i - field.camera[1]) * 80);
        }
    }

    for (var i = 0; i < field.wall.length; i++) {
        for (var j = 0; j < field.wall[0].length; j++) {
            context.strokeRect((j - field.camera[0]) * 80, (i - field.camera[1]) * 80, 80, 80);
        }
    }

    for (var i = 0; i < field.portal.length; i++) {
        context.drawImage(img.portal, (field.portal[i][1] - field.camera[1]) * 80, (field.portal[i][0] - field.camera[0]) * 80);
    }

    context.fillRect((field.playerPosition[1] - field.camera[1]) * 80, (field.playerPosition[0] - field.camera[0]) * 80, 80, 80);

    if (state === 'Info') {
        context.fillStyle = 'White';
        fillRectArray(UIField.info.rect);
        strokeRectArray(UIField.info.rect);
    }
}

function mouseUpField(x, y) {

}

function keyDownField(key) {
    console.log(key);

    if (state === '') {
        if (key === 73 || key === 105) {
            state = 'Info';
        } else if (key === 87 || key === 119) {
            if (field.playerPosition[0] > 0) {
                var wall = field.wall[field.playerPosition[0] - 1][field.playerPosition[1]];
                console.log(wall);
                
                if (wall === 0) {
                    field.playerPosition[0] -= 1;
                }
            }
        } else if (key === 83 || key === 115) {
            if (field.playerPosition[0] < field.wall.length - 1) {
                var wall = field.wall[field.playerPosition[0] + 1][field.playerPosition[1]];;
                console.log(wall);

                
                if (wall === 0) {
                    field.playerPosition[0] += 1;
                }
            }
        }else if (key === 65 || key === 97) {
            if (field.playerPosition[1] > 0) {
                var wall = field.wall[field.playerPosition[0]][field.playerPosition[1] - 1];
                
                if (wall === 0) {
                    field.playerPosition[1] -= 1;
                }
            }
        } else if (key === 68 || key === 100) {
            if (field.playerPosition[1] < field.wall[0].length - 1) {
                var wall = field.wall[field.playerPosition[0]][field.playerPosition[1] + 1];
                
                if (wall === 0) {
                    field.playerPosition[1] += 1;
                }
            }
        }
    } else if (state === 'Info') {
        if (key === 73 || key === 105) {
            state = '';
        }
    }
}
