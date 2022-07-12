AFRAME.registerComponent("car",{
    schema: {
        modelRef: {type: "string", default: "carmodel/scene.gltf"},
        clickCounter: {type: "number", default: 0}
    },
    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position = {x:0,y:-1.5,z:-10};
        const rotation = {x:0,y:0,z:0};
        const scale = {x:0.01,y:0.01,z:0.01}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
        this.el.setAttribute("scale",scale)
    },
    update: function(){
        window.addEventListener("click", e =>{
        this.data.clickCounter = this.data.clickCounter + 1;
        if (this.data.clickCounter === 1) {
            const rotation = {x:0,y:10,z:0};
            this.el.setAttribute("rotation",rotation);
        }else if(this.data.clickCounter === 2){
            const rotation = {x: 0, y: 20, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 3){
            const rotation = {x: 0, y: 30, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 4){
            const rotation = {x: 0, y: 40, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 5){
            const rotation = {x: 0, y: 50, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 6){
            const rotation = {x: 0, y: 60, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 7){
            const rotation = {x: 0, y: 70, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 8){
            const rotation = {x: 0, y: 80, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 9){
            const rotation = {x: 0, y: 90, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 10){
            const rotation = {x: 0, y: 100, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 11){
            const rotation = {x: 0, y: 110, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 12){
            const rotation = {x: 0, y: 120, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 13){
            const rotation = {x: 0, y: 130, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 14){
            const rotation = {x: 0, y: 140, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 15){
            const rotation = {x: 0, y: 150, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 16){
            const rotation = {x: 0, y: 160, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 17){
            const rotation = {x: 0, y: 170, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 18){
            const rotation = {x: 0, y: 180, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 19){
            const rotation = {x: 0, y: 190, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 20){
            const rotation = {x: 0, y: 200, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 21){
            const rotation = {x: 0, y: 210, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 22){
            const rotation = {x: 0, y: 220, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 23){
            const rotation = {x: 0, y: 230, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 24){
            const rotation = {x: 0, y: 240, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 25){
            const rotation = {x: 0, y: 250, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 26){
            const rotation = {x: 0, y: 260, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 27){
            const rotation = {x: 0, y: 270, z: 0}
            this.el.setAttribute("rotation",rotation);
        } 
        else if(this.data.clickCounter === 28){
            const rotation = {x: 0, y: 280, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 29){
            const rotation = {x: 0, y: 290, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 30){
            const rotation = {x: 0, y: 300, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 31){
            const rotation = {x: 0, y: 310, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 32){
            const rotation = {x: 0, y: 320, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 33){
            const rotation = {x: 0, y: 330, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 34){
            const rotation = {x: 0, y: 340, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 35){
            const rotation = {x: 0, y: 350, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 36){
            const rotation = {x: 0, y: 360, z: 0}
            this.el.setAttribute("rotation",rotation);
        }
        else if(this.data.clickCounter === 37){
            this.data.clickCounter = 0;
        } 
        })
    }
})