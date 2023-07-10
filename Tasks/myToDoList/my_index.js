
/* 添加item到列表里 */
function addItem(event){
    if(event.keyCode === 13){
        var inputValue = inputItem.value;

        var todoList = document.querySelector('.todo-list');
        var newItem = document.createElement('li');
        
        var viewDiv = document.createElement('div');
        viewDiv.className = 'view';
        
        var toggleCheckbox = document.createElement('input');
        toggleCheckbox.type = 'checkbox';
        toggleCheckbox.className = 'toggle';
        viewDiv.appendChild(toggleCheckbox);
        toggleCheckbox.addEventListener('change',handleToggle);
        toggleCheckbox.addEventListener('change',displayClear);
        
        var label = document.createElement('label');
        label.textContent = inputValue;
        viewDiv.appendChild(label);
        
        var destroyButton = document.createElement('button');
        destroyButton.className = 'destroy';
        viewDiv.appendChild(destroyButton);
        destroyButton.addEventListener('click', delectItem);

        newItem.appendChild(viewDiv);

        todoList.appendChild(newItem);

        inputItem.value = ""; 
        countItem();    
    }
}
var inputItem = document.querySelector('.new-todo');
inputItem.addEventListener("keydown",addItem);


// 删除item
function delectItem() {
    var delectLi = this.parentNode.parentNode;
    delectLi.parentNode.removeChild(delectLi);
    countItem();
}


// 勾选添加line-through
function handleToggle(){
    var liCompleted = this.parentNode.parentNode;
    liCompleted.classList.toggle('completed');
    countItem();

}


// 记录剩余的item
function countItem(){
    
    countSpan.parentNode.appendChild(countText);
    var count = 0;
    var items = document.querySelectorAll('.todo-list li');
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if(!item.classList.contains('completed')){
            count ++ ;
        }
    }
    countSpan.textContent = count;
    var itemText = (count === 1) ? 'item' : 'items';
    countText.textContent = ' ' + itemText + ' left';
}
var countSpan = document.querySelector('.todo-count strong');
var countText = document.createTextNode("");
countItem();


// 全部勾选
function toggleAll(){
    var items = document.querySelectorAll('.todo-list li');
    var toggleCheckboxes = document.querySelectorAll('.toggle');

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var toggleCheckbox = toggleCheckboxes[i];
        if(toggleAllCheckbox.checked){
            item.classList.add('completed');
            toggleCheckbox.checked = true;
    }
        else {
            item.classList.remove('completed');
            toggleCheckbox.checked = false;
        }
        }     
    countItem();
}
var toggleAllCheckbox = document.querySelector('.toggle-all');
toggleAllCheckbox.addEventListener('change',toggleAll);


// clear completed的显示
function displayClear(){
    var completed = false;
    var liAll = document.querySelectorAll('.todo-list li');
    for (var i = 0; i < liAll.length; i++) {
        var eli = liAll[i];
        if (eli.classList.contains('completed')) {
            completed = true;
            break;
        }
    }
    var clearButton = document.querySelector('.clear-completed');
    clearButton.textContent = (completed) ? "Clear completed" : "" ; 
}
displayClear();


// 清除已勾选的
function clearCompleted(){
    var items = document.querySelectorAll('.todo-list li');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if(item.classList.contains('completed')){
            item.parentNode.removeChild(item);
        }
    }     
}
var clearButton = document.querySelector('.clear-completed');
clearButton.addEventListener('click',clearCompleted);


// 选择不同链接，有不同表现
function filterItems(event){
    var selectedLink = event.target;
    var selectedValue = selectedLink.getAttribute('href');
    var items = document.querySelectorAll('.todo-list li');

    for (var i = 0; i < items.length; i++){
        var item = items[i];
        
        if (selectedValue === "#/"){
            item.style.display = 'block';
        }
        else if (selectedValue === "#/active"){
            item.style.display = (item.classList.contains('completed')) ? 'none' : 'block' ;
        }
        else if (selectedValue === "#/completed") {
            item.style.display = (item.classList.contains('completed')) ? 'block' : 'none' ;
        }
    }  
    for (var link of filterLinks){
        link.classList.remove('selected');
    } 
    selectedLink.classList.add('selected');

}

var filters = document.querySelector('.filters');
var filterLinks = filters.querySelectorAll('a');
for (var link of filterLinks) {
    link.addEventListener('click',filterItems);
}

