import fruit from "./foods";
import {choice, remove} from "./helpers";

function randomFruit(){
    let randomFrt = choice(fruit);
    console.log(`I'd like one ${randomFrt}, please`);
    console.log(`Here you go: ${randomFrt}`);
    console.log("Delicious! May I have another?")
    let leftover = remove(randomFrt, fruit);
    console.log(`I'm sorry, we're all out. We have ${leftover.length}left`)
}