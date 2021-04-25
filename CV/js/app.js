/* Header Block */

document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;

/* Expirience */

let expirienceData = '';
expirience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += `<h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});

document.querySelector('.expirience-list').innerHTML = expirienceData;

/* Contacts */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.skype}</a></li>`;
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</a></li>`;
document.querySelector('.adress').innerHTML += `<p>${data.adress}</p>`;
document.querySelector('#my-photo').src = data.photo;

/* Skills */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/* Education */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/* Achivements */

let achivementsData = '';
data.achivements.forEach(item => {
    achivementsData += `<li>${item}</li>`;
});
document.querySelector('.achivements-list').innerHTML = achivementsData;