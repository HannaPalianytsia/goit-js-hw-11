import { refs } from "./refs";

export function onFormSubmit(event) {
    event.preventDefault();
    const userText = refs.input.value.trim();
    if (userText !== "") {
        console.log(userText);
    };
}