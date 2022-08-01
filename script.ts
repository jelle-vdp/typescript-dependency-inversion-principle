interface Cooker {
    start(): void;
    stop(): void;
    bake(item: string): void;
}

class Stove implements Cooker {
    private _isOn : boolean = false;

    public start() : void
    {
        setTimeout(function (){
            const target = <HTMLElement>document.getElementById("target");
            target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS ON!</p>";
        }, 1000);
        this._isOn = true;
    }

    public stop() : void
    {
        setTimeout(function (){
            const target = <HTMLElement>document.getElementById("target");
            target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELECTRICITY IS OFF!</p><hr>";
        }, 3000);
        this._isOn = false;
    }

    public bake(item : string) : void
    {
        if(this._isOn) {
            setTimeout(function (){
                const target = <HTMLElement>document.getElementById("target");
                target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
        }
        else
        {
            setTimeout(function (){
                const target = <HTMLElement>document.getElementById("target");
                target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no electricity!</p>";
            }, 2000);
        }
    }
}

class Oven implements Cooker {
    private _isOn : boolean = false;

    public start() : void
    {
        setTimeout(function (){
            const target = <HTMLElement>document.getElementById("target");
            target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        this._isOn = true;
    }

    public stop() : void
    {
        setTimeout(function (){
            const target = <HTMLElement>document.getElementById("target");
            target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        this._isOn = false;
    }

    public bake(item : string) : void
    {
        if(this._isOn) {
            setTimeout(function (){
                const target = <HTMLElement>document.getElementById("target");
                target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
        }
        else
        {
            setTimeout(function (){
                const target = <HTMLElement>document.getElementById("target");
                target.innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
        }
    }
}


class Restaurant {
    private _name : string;
    private _oven : Cooker;
  
    constructor(name : string, oven : Cooker) {
        this._name = name;
        this._oven = oven;
    }

    public cook(item : string) {
        this._oven.start();
        this._oven.bake(item);
        this._oven.stop();
    }
}


// let bakery = new Restaurant("Bakery");
// bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

let bakery = new Restaurant("Bakery", new Oven());
bakery.cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.cook("crepes");

