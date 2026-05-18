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

// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }

// display load-issue
const displayLoadIssues = (issues) => {
    console.log(issues);
    
    const issueCardContainer = document.getElementById ('issueCard-container');
    issueCardContainer.innerHTML = '';

    issues.forEach (issue => {
        console.log(issue);
        
        const issueCard = document.createElement ('div');
        issueCard.className = 'rounded-md shadow-md border-t-4 border-t-[#00A96E] bg-white';
        issueCard.innerHTML = `
        <div class="p-6 space-y-5">
                <div class="flex justify-between items-center">
                    <div>
                    ${issue.status === 'open' 
                        ?`<img src="./assets/Open-Status.png" alt=""/>` 
                        :`<img src="./assets/Closed- Status .png" alt=""/>`}
                    </div>
                    <p class="text-sm text-[#EF4444] font-medium bg-[#FEECEC] rounded-full px-10 py-2">${issue.priority}</p>
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
