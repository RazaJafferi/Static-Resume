var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // no likhai no dikhai
    //input data element
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // profile img
    var profileImageInput = document.getElementById('profileImage');
    var profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0]; // file kidr hai re baba
    var profileImageSrc = '';
    if (profileImageFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // tasveer ley 
            displayResume();
        };
        reader.readAsDataURL(profileImageFile); // anprh gawar url dekh
    }
    else {
        displayResume(); // shkl dekha bey tu hai kon
    }
    // output
    function displayResume() {
        var resumeOutput = "\n            <h2>Resume</h2>\n            <h3>".concat(name, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            ").concat(profileImageSrc ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Image\" style=\"max-width: 150px; height: auto;\"/>") : '', "\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // kidr dekhna hai
        document.getElementById('resumeoutput').innerHTML = resumeOutput;
    }
});
