const priorityStyle = {
    high :'text-[#EF4444] bg-[#FEECEC]',
    medium :'text-[#F59E0B] bg-[#FFF6D1]',
    low :'text-[#9CA3AF] bg-[#EEEFF2]'
}

const createElement = (array) => {
    const htmlElement = array.map (el => {
        return `<span class="rounded-3xl bg-[#FEECEC] text-sm text-[#EF4444] font-medium border border-[#FECACA] px-4 py-1"><i class="fa-solid fa-bug"></i>${el}</span>`;
    })
    return htmlElement.join (' ');
}

// load-Issues
const loadIssues = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch (url)
    .then (res => res.json ())
    .then (data => displayLoadIssues (data.data))
}

// display load-issue
const displayLoadIssues = (issues) => {
    console.log(issues);
    
    const issueCardContainer = document.getElementById ('issueCard-container');
    issueCardContainer.innerHTML = '';

    issues.forEach (issue => {
        console.log(issue);

        const priorityKey = issue.priority.toLowerCase ();
        const currentStyle = priorityStyle[priorityKey];
        
        const issueCard = document.createElement ('div');

        let borderColor = 'border-t-4 border-[#00A96E]';
        if (issue.status === 'closed') {
             borderColor = 'border-t-4 border-[#A855F7]';
        }
       
        issueCard.className = `rounded-md shadow-md bg-white ${borderColor}`;
        issueCard.innerHTML = `
        <div class="p-6 space-y-5">
                <div class="flex justify-between items-center">
                    <div>
                    ${issue.status === 'open' 
                        ?`<img src="./assets/Open-Status.png" alt=""/>` 
                        :`<img src="./assets/Closed- Status .png" alt=""/>`}
                    </div>
                    <p class="text-sm font-medium rounded-full px-4 py-1 uppercase ${currentStyle}">${issue.priority}</p>
                 </div>

                <div>
                    <h2 class="text-[16px] font-semibold text-[#1F2937] mb-2">${issue.title}</h2>
                    <p class="text-[13px] text-[#64748B]">${issue.description}</p>
                </div>

                <div class="space-x-1">${createElement (issue.labels)}</div>
            </div>

            <hr class="border border-gray-200">

            <div class="p-6 space-y-2">
                <p class="text-[#64748B]">#${issue.id} ${issue.author}</p>
                <p class="text-[#64748B]">${issue.createdAt}</p>
            </div>
        `;
        issueCardContainer.appendChild (issueCard);
    })
    
}

loadIssues ();
