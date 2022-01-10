window.onload = function () {
    console.log("Loaded excuse")
    document.querySelector("#excuse").innerHTML = generateExcuse();
};

function generateExcuse() {
    let who = ["the dog", "My grandma", "his brother"];
    let reason = ["broke the door", "crushed my homework", "ate the keys"];
    let when = ["before the class.", "right on time.", "during my lunch."];

    let whoPosition = Math.floor(Math.random() * who.length);
    let reasonPosition = Math.floor(Math.random() * reason.length);
    let whenPosition = Math.floor(Math.random() * when.length);

    return who[whoPosition] + " " + reason[reasonPosition] + " " + when[whenPosition];
}
