export const header = function(){
    let div = document.createElement('div');
    div.classList.add('header');

    let opt = document.createElement('div');
    opt.classList.add('options');

    let all = document.createElement('div');
    all.classList.add('opt_all');
    all.innerHTML='All';

    opt.appendChild(all);

    let newNote = document.createElement('div');
    newNote.classList.add('new_note');
    newNote.innerHTML='+ Add a New Note';

    div.appendChild(opt);
    div.appendChild(newNote);

    return div;
}