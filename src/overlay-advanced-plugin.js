import videojs from "video.js";
const Plugin = videojs.getPlugin('plugin');

class AdvancedPlugin extends Plugin{
    constructor(player, options){
        super(player, options)
        var newElement = document.createElement('div');
        newElement.innerHTML = `<h1>What do you like?</h1> <button onclick="button('Horror')">Horror</button> <button onclick="button('Comedy')">Comedy</button> <button onclick="button('Action')">Action</button>`;
        var ModalDialog = videojs.getComponent('ModalDialog');
        var myModal = new ModalDialog(this.player, {
            content: newElement,
            temporary: false
        });

        let horror = 0;
        let comedy = 0;
        let action = 0;
        document.button = (genre) => {
           if(genre == "Horror"){
               horror++;
           } else if(genre == "Comedy"){
               comedy++;
           }else {
               action++;
           }
           myModal.close();
           this.player.play()
       };

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

       this.player.on('timeupdate', () => {
           if([5, 10, 15].includes(round(this.player.currentTime()))){
            this.player.addChild(myModal);
            myModal.open();
           }
       });

       this.player.on('ended', () => {
           var newElement2 = document.createElement('div');
           newElement2.innerHTML = ` <h1>Poll Result</h1> <p>Horror ---> ${horror} Vote</p> <p>Comedy ---> ${comedy} Vote</p> <p>Action ---> ${action} Vote</p>`;
           var ModalDialog2 = videojs.getComponent('ModalDialog');
           var myModal2 = new ModalDialog2(this.player, {
               content: newElement2,
               temporary: false
           });
           this.player.addChild(myModal2);
           myModal2.open()
       })
    };
}

export default AdvancedPlugin;