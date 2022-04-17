var img = {
    floor : {1 : new Image(), 2: new Image()},
    thing : [],
    portal : new Image(),
    card : {
   }
};

function imageLoad() {
    img.floor[1].src = 'Image/Map/Floor/Floor001.png';
    img.floor[2].src = 'Image/Map/Floor/Floor002.png';

    img.portal.src = 'Image/Map/Thing/Portal.png';
}
