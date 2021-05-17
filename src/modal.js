import MicroModal from 'micromodal';
MicroModal.init({disableScroll:true})
// MicroModal.init({
// onShow:() => {
//     // document.body.classList.add("no-overflow")
//     console.log("show");
// }, 
// onClose: () => {
//     // document.body.classList.remove("no-overflow")
//     console.log("close");

// }});
const governmentButton = document.getElementById("government-button")
const justiceButton = document.getElementById("justice-button")
const immigrationButton = document.getElementById("immigration-button")

// console.log('governmentButton, justiceButton, immigrationButton :>> ', governmentButton, justiceButton, immigrationButton);
governmentButton.addEventListener("click", () => {
    MicroModal.show('modal-1', {disableScroll:true}); 
    document.getElementById("modal-1").focus()
})
justiceButton.addEventListener("click", () => {
    MicroModal.show('modal-2', {disableScroll:true});    
})
immigrationButton.addEventListener("click", () => {
    MicroModal.show('modal-3',{disableScroll:true});    
})