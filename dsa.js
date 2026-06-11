//stack with push,pop,peek and while loop
let stack=[]
top=-1

function push(value){
top=top+1
stack[top]=value

}

function pop(){
if(top===-1){
return "Stack is Empty"
}
removed=stack[top]
top=top-1
return removed

}

function printStack(){
if(top===-1){
return "Stack is Empty"
}
result=""
for(i=0;i<=top;i=i+1){
result=result+stack[i]+","
}
return result

}

function peek(){
if(top===-1){
return "Stack is Empty"
}
return stack[top]
}

push(10)
push(20)
push(30)
console.log(printStack())
console.log(pop())
console.log(printStack())
console.log(peek())

while(true){
console.log("Enter operations:");
console.log("1. push");
console.log("2. pop");
console.log("3. peek");
console.log("4. printStack");
console.log("5. Exit");

let choice= prompt("Enter choice");
if(choice==="1"){
  let value= prompt("Enter value to push:");
  push(Number(value))
}else if(choice==="2"){
  let choice= prompt("Enter value to pop:");
  console.log("Popped:", pop());
}else if(choice==="3"){
  console.log("Peek:",peek());
}else if(choice=== "4"){
  console.log("Stack:",printStack());
}else if(choice==="5"){
  console.log("EXIT")
}
}
