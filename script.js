let interviewCount = [];
let rejectedCount = [];


let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectedFilterBtn = document.getElementById('rejected-filter-btn')



let total = document.getElementById('total-count');
let interview = document.getElementById('interview-count')
let rejected = document.getElementById('rejected-count')



let allCardSection = document.getElementById('allCard');


function calculate() {

    total.innerText = allCardSection.children.length;
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

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    }else if (id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
}

let mainContainer = document.querySelector('main')

let filteredSection = document.getElementById('filteredSection')


mainContainer.addEventListener('click', function (event) {


    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const workPosition = parentNode.querySelector('.workPosition').innerText;
        const jobPosition = parentNode.querySelector('.jobPosition').innerText;
        const jobDetails = parentNode.querySelector('.jobDetails').innerText;
        const status = parentNode.querySelector('#status').innerText;
        const jobDescription = parentNode.querySelector('.jobDescription').innerText;


        const cardInfo = {
            workPosition,
            jobPosition,
            jobDetails,
            status,
            jobDescription
        }

        const workPositionExist = interviewCount.find(item => item.workPosition == cardInfo.workPosition);
        
        parentNode.querySelector('#status').classList.remove('bg-blue-100')
        parentNode.querySelector('#status').innerHTML = `
            <p id="status" class="bg-green-200 opacity-80 inline px-[20px] py-3 font-semibold text-black">INTERVIEW</p>
        `
        if (!workPositionExist) {
            interviewCount.push(cardInfo);
        }

        renderInterview()
    }

})

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewCount) {
        console.log(interview);

        let div = document.createElement('div')
        div.className = 'card flex justify-between p-8 shadow-md bg-white border border-gray-200 rounded-lg'
        div.innerHTML = `
                        <div class="card left space-y-6">

                    <div class="left-top space-y-4">
                        <p class="workPosition text-2xl font-bold opacity-80">Mobile First Corp</p>
                        <p class="jobPosition opacity-60">React Native Developer</p>
                        <p class="jobDetails opacity-60">Remote • Full-time • $130,000 - $175,000</p>
                    </div>


                    <div>
                        <p id="status" class="bg-blue-100 opacity-80 inline px-[14px] py-3 font-semibold text-black">NOT
                            APPLIED</p>
                    </div>
                    <div>
                        <p class="jobDescription opacity-80 ">Build cross-platform mobile applications using React Native. Work on
                            products
                            used by millions of
                            users worldwide.</p>
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

