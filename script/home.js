// load-Issues
const loadIssues = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch (url)
    .then (res => res.json ())
    .then (data => displayLoadIssues (data.data))
}

// display load-issue
const displayLoadIssues = (issues) => {
    const issueCardContainer = document.getElementById ('issueCard-container');
    // issueCardContainer.innerHTML = '';

    issues.forEach (issue => {
        const issueCard = document.createElement ('div');
        issueCard.className = 'rounded-md shadow-md border-t-4 border-t-[#00A96E] bg-white';
        issueCard.innerHTML = `
        <div class="p-6 space-y-5">
                <div class="flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="">
                    <p class="text-sm text-[#EF4444] font-medium bg-[#FEECEC] rounded-full px-10 py-2">HIGH</p>
                </div>

                <div>
                    <h2 class="text-lg font-semibold text-[#1F2937] mb-2">Fix navigation menu on mobile devices</h2>
                    <p class="text-sm text-[#64748B]">The navigation menu doesn't collapse properly on mobile devices...</p>
                </div>

                <div class="space-x-1">
                    <span class="rounded-3xl bg-[#FEECEC] text-sm text-[#EF4444] font-medium border border-[#FECACA] px-4 py-1"><i class="fa-solid fa-bug"></i> BUG</span>
                    <span class="rounded-3xl bg-[#FFF8DB] text-sm text-[#D97706] font-medium border border-[#FDE68A] px-4 py-1"><i class="fa-solid fa-life-ring"></i> HELP WANTED</span>
                </div>
            </div>

            <hr class="border border-gray-200">

            <div class="p-6 space-y-2">
                <p class="text-[#64748B]">#1 by john_doe</p>
                <p class="text-[#64748B]">1/15/2024</p>
            </div>
        `;
        issueCardContainer.appendChild (issueCard);
    })
    
}

loadIssues ();