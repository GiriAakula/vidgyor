import videojs from "video.js"

function overlay() {
    console.log(this)
    document.button = (genre) => {
        if(genre == "Horror"){
            horror++;
        } else if(genre == "Comedy"){
            comedy++;
        }else {
            action++;
        }
        myModal.close();
        this.play()
    };
    var newElement = document.createElement('div');
    newElement.innerHTML = `<h1 style="font-size:40px">What do you like?</h1> <button class="overlay-btn" onclick="button('Horror')">Horror</button> <button class="overlay-btn" onclick="button('Comedy')">Comedy</button> <button class="overlay-btn" onclick="button('Action')">Action</button><script></script>`;
    var ModalDialog = videojs.getComponent('ModalDialog');
    var myModal = new ModalDialog(this, {
        content: newElement,
        temporary: false
    });

    let horror = 0;
    let comedy = 0;
    let action = 0;


   let previousTime = null;
   const round = (currentTime) => {
       if(Math.floor(previousTime) !== Math.floor(currentTime)){
           previousTime = currentTime;
           return Math.floor(currentTime);
       } else {
        previousTime = currentTime;
           return 0;
       }
   };

   this.on('timeupdate', () => {
       if([5, 10, 15].includes(round(this.currentTime()))){
        this.addChild(myModal);
        myModal.open();
       }
   });

   this.on('ended', () => {
       var newElement2 = document.createElement('div');
       newElement2.innerHTML = ` <h1>Poll Result</h1> <p>Horror ---> ${horror} Vote</p> <p>Comedy ---> ${comedy} Vote</p> <p>Action ---> ${action} Vote</p>`;
       var ModalDialog2 = videojs.getComponent('ModalDialog');
       var myModal2 = new ModalDialog2(this, {
           content: newElement2,
           temporary: false
       });
       this.addChild(myModal2);
       myModal2.open()
   })
};

export default overlay;