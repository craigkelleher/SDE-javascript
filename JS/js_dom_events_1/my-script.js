/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/
// YOUR CODE GOES HERE
let count = 0;
// const btn = document.getElementById("counter_btn");
// const disp = document.getElementById("click_count")
// btn.onclick = function(){
//     count++;
//     disp.innerText = count;
// }

counter_btn.onclick = () => {
    count++;
    click_count.innerText = count;
}

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

// YOUR CODE GOES HERE
// const btn2 = document.getElementById("reset_btn");
// const disp2 = document.getElementById("click_count")
// btn2.onclick = function(){
//     count = 0;
//     disp.innerText = count;
// }

reset_btn.onclick = () => {
    count = 0;
    click_count.innerText = count;
}
