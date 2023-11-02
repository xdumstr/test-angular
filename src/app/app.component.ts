import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [],
    template: `<h1>Hello world!</h1>`,
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    title = "homes";

    ngOnInit() {
        // Your JavaScript code to run when the component loads
        console.log("The component has been loaded.");
        // Other JavaScript logic here...
        debugger;
        let url =
            "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/27D332AC6D43352E0928B9A1FCAF4AB0"; // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}
        let dossier; // Variable to store the dossier created. Used by Event Handler do not remove!
        let config; // Variable to store the configuration settings for dossier.
        async function runCode() {
            // For more details on configuration properties, see https://microstrategy.github.io/embedding-sdk-docs/add-functionality/methods-and-properties
            config = {
                url: url,
                placeholder: document.getElementById("embedding-dossier-container"),
            };
            // INSERT PROPERTIES BELOW HERE

            // INSERT PROPERTIES ABOVE HERE

            // Embed the dossier with the configuration settings
            try {
                const microstrategy: any = (window as any).microstrategy;
                dossier = await microstrategy.dossier.create(config);
            } catch (error) {
                console.error(error);
            }

            // INSERT METHODS BELOW HERE

            // INSERT METHODS ABOVE HERE
        }
        runCode();
    }
}
