import { createSliderTemplate, checkSettings } from "./utilities.js";
import Model from "./mvc/model.js";
import View from "./mvc/view.js";
import Controller from "./mvc/controller.js";

export default class App {
    constructor(input, settings) {
        if(!checkSettings(settings)) throw new Error("You must set correct parameters");
        
        this.template = createSliderTemplate(settings);

        input.insertAdjacentHTML("beforeBegin", this.template);
        input.style.display = "none";

        this.model = new Model(settings);
        this.view = new View(input, input.previousElementSibling);
        this.controller = new Controller(this.model, this.view);
    }
}