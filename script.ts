document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault(); // no likhai no dikhai

    //input data element
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    // profile img
    const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
    const profileImageFile = profileImageInput.files?.[0]; // file kidr hai re baba
    let profileImageSrc = '';

    if (profileImageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageSrc = e.target?.result as string; // tasveer ley 
            displayResume();
        };
        reader.readAsDataURL(profileImageFile); // anprh gawar url dekh
    } else {
        displayResume(); // shkl dekha bey tu hai kon
    }

    // output
    function displayResume() {
        const resumeOutput = `
            <h2>Resume</h2>
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            ${profileImageSrc ? `<img src="${profileImageSrc}" alt="Profile Image" style="max-width: 150px; height: auto;"/>` : ''}
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // kidr dekhna hai
        document.getElementById('resumeoutput')!.innerHTML = resumeOutput;
    }
});