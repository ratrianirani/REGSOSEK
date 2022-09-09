/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
function edit_row(no){
    document.getElementById('edit_button'+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var name = document.getElementById('name_row'+no);
    console.log(name);
    var name_data = name.innerHTML;
    
    name.innerHTML = '<input type = "text" class="form-control" id = "name_text'+no+'" value="'+name_data+'">';    
}
function save_row(no){
    var name_val=document.getElementById("name_text"+no).value;
    document.getElementById('name_row'+no).innerHTML=name_val;
    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}
function delete_row(no){
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row(){
    var new_name = document.getElementById('new_name').value;
    console.log(new_name);
    var table = document.getElementById('anggota-keluarga');
    var table_len = (table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML = '<tr id="row'+table_len+'" class="align-items-center"><td></td><td id="name_row'+table_len+'">'+new_name+'</td><td><div class="d-flex flex-row"><input type="button" id="save_button'+table_len+'" value="Save" class="save btn btn-primary btn-sm me-2" style="display:none;" onclick="save_row('+table_len+')"><input type="button" class="btn btn-primary btn-sm entri me-2" id="entri_button'+table_len+'" value="Entri" onclick="entri_row('+table_len+')"><input type="button" class="btn btn-success btn-sm edit me-2" id="edit_button'+table_len+'" value="Edit" onclick="edit_row('+table_len+')"><input type="button" class="btn btn-danger btn-sm delete me-2" id="delete_button'+table_len+'" value="Delete" onclick="delete_row('+table_len+')"></div></td></tr>';
    document.getElementById("new_name").value="";
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
