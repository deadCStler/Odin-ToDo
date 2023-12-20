import { newCategory } from "./categoryDOM";

export const navigation_menu=function(){
    let div = document.createElement('div');
    div.classList.add('navigation_menu');

    let logo = document.createElement('h1');
    logo.innerHTML='TaskTrackr';
    logo.classList.add('logo');

    let options = document.createElement('div');
    options.classList.add('navigation_options');

    let overview = document.createElement('div');
    overview.classList.add('overview');
    overview.innerHTML='Overview';

    let categories = document.createElement('div');
    categories.classList.add('categories');
    categories.innerHTML='<ul>Categories</ul>';

    let add_new_category = document.createElement('div');
    add_new_category.classList.add('new_category');
    add_new_category.innerHTML='+ Add New Category';

    categories.appendChild(add_new_category);

    options.appendChild(overview);
    options.appendChild(categories);

    let links = document.createElement('div');
    links.classList.add('links');

    let github = document.createElement('div');
    github.innerHTML = "<a href='https://github.com/deadCStler'>GitHub</a>";
    github.classList.add('github');

    links.appendChild(github);

    div.appendChild(logo);
    div.appendChild(options);
    div.appendChild(links);
  
    add_new_category.addEventListener("click", () => {
      newCategory();
    });

    return div;
}