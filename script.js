let interviewCount = [];
let rejectedCount = [];

let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectedFilterBtn = document.getElementById('rejected-filter-btn')



let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count')
let rejected = document.getElementById('rejected-count')



let allCardSection = document.getElementById('allCard');


function calculate (){

    total.innerText = allCardSection.children.length;
    interview.innerText = interviewCount.length;
    rejected.innerText = rejectedCount.length;
}
calculate();


function filtering (id){
    allFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')


    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-500', 'text-white');
}

let mainContainer = document.querySelector('main')


mainContainer.addEventListener('click', function(event){
    console.log(event.target);
})





let deleteBtn = document.getElementById('delete-btn');
let card = document.getElementById('card')
