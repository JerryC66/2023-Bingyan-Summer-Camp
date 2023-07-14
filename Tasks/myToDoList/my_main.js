
/* 添加item到列表里 */
function addItem(todotext){
   
        var todoList = document.querySelector('.todo-list');
        var newItem = document.createElement('li');

        // 创建新的todo对象
        var todo = {
            id: Date.now(),// 为每个 todo 自动生成一个唯一的 id
            text: todotext,
            completed: false
        };
        newItem.setAttribute('data-id', todo.id);

        
        var viewDiv = document.createElement('div');
        viewDiv.className = 'view';
        
        var toggleCheckbox = document.createElement('input');
        toggleCheckbox.type = 'checkbox';
        toggleCheckbox.className = 'toggle';
        viewDiv.appendChild(toggleCheckbox);
        toggleCheckbox.addEventListener('change',handleToggle);
        toggleCheckbox.addEventListener('change',displayClear);
        
        var label = document.createElement('label');
        label.textContent = todotext;
        viewDiv.appendChild(label);
        
        var destroyButton = document.createElement('button');
        destroyButton.className = 'destroy';
        viewDiv.appendChild(destroyButton);
        destroyButton.addEventListener('click', delectItem);

        newItem.appendChild(viewDiv);
        todoList.appendChild(newItem);

        // 获取现有的存储的数据
        var storedData = getStoredData();

        // 将新的todo添加到数据里
        storedData.push(todo);

        // 存储更新后的数据
        storeData(storedData);

        countItem();    
    
}
var inputItem = document.querySelector('.new-todo');
inputItem.addEventListener("keydown",handleKeydown);


function handleKeydown(event) {
    if (event.keyCode === 13) {
        var inputValue = inputItem.value;
        addItem(inputValue);
        inputItem.value = "";
    }
}

// 删除item
function delectItem() {
    var delectLi = this.parentNode.parentNode;
    delectLi.parentNode.removeChild(delectLi);

    // 获取现有的存储的数据
    var storedData = getStoredData();

    // 过滤要删除的数据
    var updatedData = storedData.filter(function(todo) {
        return todo.id !== parseInt(delectLi.getAttribute('data-id'));
    });

    // 存储更新后的数据
    storeData(updatedData);

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
    displayClear();
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


// 双击编辑功能的实现
function startEditing() {

    console.log('进入双击编辑函数');

    var li = this;
    li.classList.add('editing');

    var label = li.querySelector('label');
    label.style.display = 'none';
    console.log('label');

    var originalText = label.textContent;

    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'edit';
    newInput.value = originalText;

    li.appendChild(newInput);
    newInput.focus();

    newInput.addEventListener('keydown',function(event) {
        if (event.keyCode === 13) {
            var newText = newInput.value;
            label.textContent = newText;
            label.style.display = '';
            li.classList.remove('editing');
            li.removeChild(newInput);
        }
    })
}

// 将双击事件监听器绑定在父元素上
var todoList = document.querySelector('.todo-list');
todoList.addEventListener('dblclick', startEditing);

// 从localStorage中获取数据
function getStoredData() {
    var storedData = localStorage.getItem('todos');
    return storedData ? JSON.parse(storedData) : [];
}

// 将数据存储到localStorage中
function storeData(data) {
    localStorage.setItem('todos',JSON.stringify(data));
}

// 初始化页面加载时从localStorage加载数据
function loadStoredData() {
    console.log('进入加载函数');
    var storedData = getStoredData();
    var addedItems = {}; // 记录已添加的 todo id

    var todoList = document.querySelector('.todo-list');
    todoList.innerHTML = ""; // 清空 todo 列表中的所有项
    console.log('已清空');

    var todoItems = document.querySelectorAll('.todo-list li');
    todoItems.forEach(function (item) {
        var itemId = parseInt(item.getAttribute('data-id'));
        addedItems[itemId] = true; // 已存在的项标记为 true
    });

    storedData.forEach(function (todo) {
        if (!addedItems[todo.id]) {
            addItem(todo.text);
            addedItems[todo.id] = true;
        }
    });

    countItem();
}



function clearStoredData() {
    localStorage.removeItem('todos');
}

clearStoredData()

loadStoredData();

