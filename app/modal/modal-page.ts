import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import { View, EventData } from "tns-core-modules/ui/core/view";

export function onTap(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;
    page.frame.navigate({ 
        moduleName: "modal-second/modal-second-page", 
        context: "Context passed from modal-page (1)"
    });
}

export function onNavigatedTo(args: NavigatedData) {
    console.log("[modal-page] Received context: ", args.context);
}