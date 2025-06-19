const item=document.querySelector('#item');
const TodoBox=document.querySelector('#Todo-Box');

item.addEventListener(
    "keyup",
    function(event){
       if(event.key == "Enter"){
        addTodo(this.value);
        this.value = ""
       };

    }
)

const addTodo=(item)=>{
    const listitem =document.createElement('li');
    listitem.innerHTML=`
    
    ${item}
    <i class="fa-solid fa-xmark fa-sm"></i>


    `;

    listitem.addEventListener(
        
        'click',
        function(){

            this.classList.toggle("done")

    }
)

listitem.querySelector('i').addEventListener(
    'click',
    function(){
        listitem.remove();
    }
)
    TodoBox.appendChild(listitem)
}