let currentTab = "all";
const tabActive = ['bg-blue-400', 'border-gray-300', 'shadow-sm', 'py-3', 'px-11', 'rounded-md', 'text-xl']
const tabInactive = ['bg-white', 'border', 'border-gray-300', 'shadow-sm', 'py-3', 'px-11', 'rounded-md', 'text-xl']

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('rejected-container')


function changeTab(tab) {

    const tabs = ['all', 'interview', 'rejected'];

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
    if (tab === 'all') {
        allContainer.classList.remove('hidden');
    } else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
    } else {
        rejectedContainer.classList.remove('hidden');
    }
}


// count update
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');

totalCount.innerText = allContainer.children.length

changeTab(currentTab);

