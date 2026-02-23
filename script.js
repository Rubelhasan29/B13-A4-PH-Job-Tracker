let interviewCount = [];
let rejectedCount = [];
let currentStatus = 'all'

let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectedFilterBtn = document.getElementById('rejected-filter-btn')



let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count')
let rejected = document.getElementById('rejected-count')



let allCardSection = document.getElementById('allCard');



let mainContainer = document.querySelector('main')
let filteredSection = document.getElementById('filteredSection')



function calculate() {

    
    interview.innerText = interviewCount.length;
    rejected.innerText = rejectedCount.length;
}
calculate();


function filtering(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'bg-white', 'text-white')


    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-500', 'text-white');

    currentStatus = id

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}



mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const workPosition = parentNode.querySelector('.workPosition').innerText
        const jobPosition = parentNode.querySelector('.jobPosition').innerText
        const jobDetails = parentNode.querySelector('.jobDetails').innerText
        const status = parentNode.querySelector('.status').innerText
        const jobDescription = parentNode.querySelector('.jobDescription').innerText



        parentNode.querySelector('.status').innerText = "INTERVIEW";

        const cardInfo = {
            workPosition,
            jobPosition,
            jobDetails,
            status: 'INTERVIEW',
            jobDescription
        }

        const workPositionExist = interviewCount.find(item => item.workPosition == cardInfo.workPosition);

        if (!workPositionExist) {
            interviewCount.push(cardInfo);
        }

        rejectedCount = rejectedCount.filter(item => item.workPosition != cardInfo.workPosition);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

        calculate();
    }





    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        console.log(parentNode);

        const workPosition = parentNode.querySelector('.workPosition').innerText
        const jobPosition = parentNode.querySelector('.jobPosition').innerText
        const jobDetails = parentNode.querySelector('.jobDetails').innerText
        const status = parentNode.querySelector('.status').innerText
        const jobDescription = parentNode.querySelector('.jobDescription').innerText

        parentNode.querySelector('.status').innerText = 'REJECTED';



        const cardInfo = {
            workPosition,
            jobPosition,
            jobDetails,
            status: 'REJECTED',
            jobDescription
        }
        console.log(status);

        const workPositionExist = rejectedCount.find(item => item.workPosition == cardInfo.workPosition);

        if (!workPositionExist) {
            rejectedCount.push(cardInfo);
        }

        interviewCount = interviewCount.filter(item => item.workPosition != cardInfo.workPosition)


        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }
        calculate();

    }

})

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewCount) {

        let div = document.createElement('div')
        div.className = 'card flex justify-between p-8 shadow-md bg-white border border-gray-200 rounded-lg'
        div.innerHTML = `
                        <div class="card left space-y-6">

                    <div class="left-top space-y-4">
                        <p class="workPosition text-2xl font-bold opacity-80">${interview.workPosition}</p>
                        <p class="jobPosition opacity-60">${interview.jobPosition}</p>
                        <p class="jobDetails opacity-60">${interview.jobDetails}</p>
                    </div>


                    <div>
                        <p class="status bg-blue-100 opacity-80 inline px-[14px] py-3 font-semibold text-black">${interview.status}</p>
                    </div>
                    <div>
                        <p class="jobDescription opacity-80 ">${interview.jobDescription}</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-6">
                        <button
                            class="interview-btn px-5 py-2 text-green-500 border-[2px] border-green-500 text-lg font-semibold rounded-md">INTERVIEW</button>
                        <button
                            class="rejected-btn px-6 py-2 text-red-500 border-[2px] border-red-500 text-lg font-semibold rounded-md">REJECTED</button>
                    </div>
                </div>

                <div class="card-right text-center">
                    <button onclick="deleteApplication('delete-btn')"
                        class="border-2 border-gray-200 p-[10px] px-[11px] rounded-full text-[13px]" id="delete-btn"><i
                            class="fa-solid fa-trash"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }
}



function renderRejected() {
    filteredSection.innerHTML = ''

    for (let rejected of rejectedCount) {

        let div = document.createElement('div')
        div.className = 'card flex justify-between p-8 shadow-md bg-white border border-gray-200 rounded-lg'
        div.innerHTML = `
                        <div class="card left space-y-6">

                    <div class="left-top space-y-4">
                        <p class="workPosition text-2xl font-bold opacity-80">${rejected.workPosition}</p>
                        <p class="jobPosition opacity-60">${rejected.jobPosition}</p>
                        <p class="jobDetails opacity-60">${rejected.jobDetails}</p>
                    </div>


                    <div>
                        <p class="status bg-blue-100 opacity-80 inline px-[14px] py-3 font-semibold text-black">${rejected.status}</p>
                    </div>
                    <div>
                        <p class="jobDescription opacity-80 ">${rejected.jobDescription}</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-6">
                        <button
                            class="interview-btn px-5 py-2 text-green-500 border-[2px] border-green-500 text-lg font-semibold rounded-md">INTERVIEW</button>
                        <button
                            class="rejected-btn px-6 py-2 text-red-500 border-[2px] border-red-500 text-lg font-semibold rounded-md">REJECTED</button>
                    </div>
                </div>

                <div class="card-right text-center">
                    <button onclick="deleteApplication('delete-btn')"
                        class="border-2 border-gray-200 p-[10px] px-[11px] rounded-full text-[13px]" id="delete-btn"><i
                            class="fa-solid fa-trash"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }
}


function deleteApplication(id) {
const card = document.getElementById(id);
card.remove(); 

const cards = document.getElementById('allCard')
console.log(cards);

total.innerText = cards.children.length;

const jobCount = document.getElementById('jobs-count')
jobCount.innerText = cards.children.length;


 if(cards.children.length === 0){
    const empty =  document.getElementById('empty')
    empty.classList.remove('hidden');
 }
}


