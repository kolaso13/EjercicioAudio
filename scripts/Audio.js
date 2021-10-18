var i = 0;

var canciones = [
    'AC-DC.a9f9cda2.mp3',
    'Aretha.be9e424d.mp3',
    'Bob Marley.f043ecd4.mp3',
    'Red Hot Chili Peppers.1f5ba2e5.mp3'
];

var repro = new Audio(canciones[0]);

function play(){
    if (!repro){
        repro = new Audio(canciones[i]);
    }

    repro.play();
}

function anterior(){
    repro.pause();

    if(i <= 0){
        i = canciones.length - 1;
    }else{
        i--;
    }

    repro = new Audio(canciones[i]);
    repro.play();
}

function pause(){
    repro.pause();
}

function siguiente(){
    repro.pause();

    if(i >= canciones.length - 1){
        i = 0;
    }else{
        i++;
    }

    repro = new Audio(canciones[i]);
    repro.play();
}

function volUp(){
    repro.volume += 0.1;
}

function volDown(){
    repro.volume -= 0.1;
}