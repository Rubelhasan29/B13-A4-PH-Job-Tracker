let currentTab = "all";
const tabActive = ['bg-blue-400', 'border-gray-300', 'shadow-sm', 'py-3', 'px-11', 'rounded-md', 'text-xl']
const tabInactive = ['bg-white', 'border', 'border-gray-300', 'shadow-sm', 'py-3', 'px-11', 'rounded-md', 'text-xl']

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')

const emptySection = document.getElementById('empty')


function changeTab(tab) {

    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;


    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.add(...tabInactive);
        }
    }


    const sections = [allContainer, interviewContainer, rejectedContainer];

    for (const section of sections) {
        section.classList.add('hidden');
    }


    emptySection.classList.add('hidden')


    if (tab === 'all') {
        allContainer.classList.remove('hidden');
        if (allContainer.children.length < 1){
            emptySection.classList.remove('hidden')
        }
        
    } else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
        if (interviewContainer.children.length < 1){
            emptySection.classList.remove('hidden')
        }
    } else {
        rejectedContainer.classList.remove('hidden');
        if (rejectedContainer.children.length < 1){
            emptySection.classList.remove('hidden')
        }
    }
    updateCount();
}


// count update
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const availableCount =document.getElementById('available'); 
 

changeTab(currentTab);

document.getElementById('Job-container')
    .addEventListener('click', function (event) {
        const clickedElement = event.target;

        const card = clickedElement.closest(".card");
        const status = card.querySelector(".status")

        const parent = card.parentNode;



        if (clickedElement.classList.contains('interview-btn')) {
            status.innerText = "INTERVIEW"
            interviewContainer.append(card);


        }
        if (clickedElement.classList.contains('rejected-btn')) {
            status.innerText = "REJECTED"
            rejectedContainer.append(card);

        }
        if (clickedElement.classList.contains('delete-btn')) {
            parent.removeChild(card);

        }
        updateCount();
    })


function updateCount() {
    const counts = {
        all : allContainer.children.length,
        interview : interviewContainer.children.length,
        rejected : rejectedContainer.children.length,
    }

    totalCount.innerText = counts.all;
    interviewCount.innerText = counts.interview;
    rejectedCount.innerText = counts.rejected;

    availableCount.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptySection.classList.remove('hidden');
    }else{
        emptySection.classList.add('hidden');

    }


}
updateCount();