import { useSyncExternalStore } from "react";

let navBar = false;
let listeners = new Set();

function toggleNavBar() {
    navBar = !navBar;
    listeners.forEach((listener) => listener());
}

function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

// --- custom hook ---
export const useNavBar = () => {
    const navBarState = useSyncExternalStore(subscribe, () => navBar);

    const setNavBar = (value) => {
        navBar = typeof value === "function" ? value(navBar) : value;
        listeners.forEach((listener) => listener());
    };

    const navBarController = () => toggleNavBar();

    return { navBar: navBarState, setNavBar, navBarController };
};
