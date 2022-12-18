fetch("http://localhost:3000/candidates",{
    method: "GET"
})
.then(function (candidates) {
    return candidates.json();
})
.then(function (candidates){
    console.log(candidates)
    renderCandidates(candidates);
})

function renderCandidates(candidates){
    for(let candidate of candidates){
        let html = `<tr>
        <td>${candidate.id}</td>
        <td>${candidate.fullName}</td>
        <td>${candidate.trainingName}</td>
        <td>${candidate.email}</td>
        <td>${candidate.phoneNumber}</td>
        <td>${candidate.birthday}</td>
        <td>${candidate.gymExpirience}</td>
        <td><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a></td>
    </tr>`;
    document.getElementById("candidates").innerHTML += html;
    }
}