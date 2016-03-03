module Navigation {
    interface iNavigation {
        navigation:string;
    }

    class Navigation implements iNavigation {
        navigation:string = "navigation";

        constructor(public name:string = 'No name') {

        };
    }
}