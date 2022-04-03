/*タスク入力時に記入されていなったときとされていた時*/
document.querySelector('.task_submit').onclick = function(){
    if(document.querySelector('.task_value').value.length == 0){
        alert("入力されていません")
    }
    else{
        document.querySelector('#tasks').innerHTML
        +=`<div class ="task">
                <span id="taskname">
                    ${document.querySelector('.task_value').value}
                </span>
                <button class="deleate">削除</button>
            </div>`;

            var current_tasks = document.querySelectorAll(".deleate");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                    }
                }
            
            var tasks = document.querySelectorAll(".task");
            for(var i=0; i<tasks.length; i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed');
                    }
                }
    }
}

/*var current_tasks = document.querySelectorAll(".deleate");
for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();
        }
    }

var tasks = document.querySelectorAll(".task");
for(var i=0; i<tasks.length; i++){
    tasks[i].onclick = function(){
        this.classList.toggle('completed');
        }
    }*/