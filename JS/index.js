document.addEventListener("DOMContentLoaded", function () { 
    let siteNameInput = document.getElementById("siteName"); 
    let siteUrlInput = document.getElementById("siteUrl"); 

    let nameAlert = document.getElementById("alertNameBox"); 
    let urlAlert = document.getElementById("alertURLBox"); 

    // Validate only Site Name
    function validateName() { 
        if (siteNameInput.value.trim().length < 3) { 
            nameAlert.classList.remove("d-none"); 
        } else { 
            nameAlert.classList.add("d-none"); 
        } 
    } 

    // Validate only Site URL
    function validateURL() { 
        let urlPattern = /^(https?:\/\/)?([\w\-]+)(\.[\w\-]+)+[/#?]?.*$/; 
        if (!urlPattern.test(siteUrlInput.value.trim())) { 
            urlAlert.classList.remove("d-none"); 
        } else { 
            urlAlert.classList.add("d-none"); 
        } 
    } 

    // Run each validation separately while typing
    siteNameInput.addEventListener("input", validateName); 
    siteUrlInput.addEventListener("input", validateURL); 
});



// Global variables
var addBtn = document.getElementById('addBtn');
var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var selectedInputs = document.getElementsByClassName('selectedInputs')
var fixedBox = document.getElementById('fixedBox'); 
var alertBox=document.getElementById('alertBox');
var closeBtn = document.getElementById('closeBtn');
var bookmarks = [];
// localStorage Handling
if (localStorage.getItem('BookmarkArr') !== null) {
    bookmarks = JSON.parse(localStorage.getItem('BookmarkArr'));
    displayAllBookmarks();
}else{
    bookmarks = [];
}

// Validations
function validateName(name) {
    return /^[A-Za-z ]{4,}$/.test(name.trim());
}

function validateUrl(url) {
    return /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/.test(url.trim());
}

function addBookmark() {

    // Show the alert box from HTML when the button is clicked
    var bookmarker = {
        siteName: siteName.value,
        siteUrl: siteUrl.value,
    };   

    if (validateName(siteName.value) && validateUrl(siteUrl.value)) {
        bookmarks.push(bookmarker);
        localStorage.setItem('BookmarkArr', JSON.stringify(bookmarks));
        displayAllBookmarks();
        clearForm();
    }else{

fixedBox.classList.replace('d-none' , 'd-flex')


    }
}

// Attach event listener to the Add button
function displayAllBookmarks() 
{
    var Books = "";

    for (var i = 0; i < bookmarks.length; i++) {
        Books += `
            <tr>
                <td>${i + 1}</td>
                <td class="text-capitalize">${bookmarks[i].siteName}</td>
                <td>
                
        <a class="btn btn-visit  m-1 p-2" href="${bookmarks[i].siteUrl}" target="_blank">
                        <i class="  mt-2 fa-solid fa-eye pe-2"></i>Visit
                    </a>
                </td>
                <td>
                

                <button onclick="deleteBookmark(${i})" class="btn btn-delete  m-2 p-2 ">
                        <i class=" fa-solid fa-trash-can pe-2"></i>Delete
                    </button>


                </td>
            </tr>
        `;
    }
    document.getElementById('bookmark-text').innerHTML = Books;
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('BookmarkArr', JSON.stringify(bookmarks));
    displayAllBookmarks();
}
function clearForm() {
    siteName.value = "";
    siteUrl.value = "";
}

// Closing fixedBox
closeBtn.addEventListener('click' ,function()
{

fixedBox.classList.replace('d-flex' , 'd-none');


} );