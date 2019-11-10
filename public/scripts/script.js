
function myMenuFunction(x){
    x.classList.toggle('change')
}

function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}

$('#menuBar').addEventListener('click', function(e){
    const x = $('#navBar');
    if(x.style.display === 'block'){
        x.style.display = "none";
        $$('.bar').forEach((function(el){
            el.style.background = "white";
        }));
    
    }else {
        x.style.display = "block";
        $$('.bar').forEach((function(el){
            el.style.background = "white";
        }));
    }
});

