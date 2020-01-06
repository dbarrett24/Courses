export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    } // constructor is a built in function every class has, executed when you create a new instance of the class.
}
// basic model/ blueprint
