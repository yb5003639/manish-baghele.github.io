AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
                Idle='idle'
                die ='Take 001'
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                //const scale = aEntity.getAttribute('scale');
                //Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.01);
                aEntity.setAttribute('animation-mixer', { clip: die });
                
                    setTimeout(function(){

                            aEntity.setAttribute('animation-mixer', { clip: Idle });
                    }, 6000);
            }
        });
}});
