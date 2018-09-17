import { View, EventData } from "tns-core-modules/ui/core/view";
import { Frame } from "tns-core-modules/ui/frame";
import {  ShownModallyData } from "tns-core-modules/ui/page";

export function onModalFrame(args: EventData) {
    const view = args.object as View;
    const page = view.page;

    const frame = new Frame();
    
    frame.on("shownModally", (args: ShownModallyData) => {
        frame.navigate({ 
            moduleName: "modal/modal-page", 
            context: args.context // passing the context from showModal
        });
    })

    page.showModal(frame,"Context passed from home-page",
        (context) => {
            console.log("home-page modal frame closed");
            console.log("[home-page] Received context from closeModal callback: ", context);
        }, true);
}
