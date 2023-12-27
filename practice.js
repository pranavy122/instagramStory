// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let length = fruits[fruits.length-1];
// fruits.push("grapes");

// console.log((fruits));

// const myArr = [[1,2],[3,4],[5,6]];
// console.log(fruits.reverse());

// let point= points.sort(function(a,b){return a-b});

// const points = [40, 100, 1, 5, 25, 10];

// console.log(point);

//  console.log(myArrMax(points));

// function myArrMax(arr)
// {
//    let len = arr.length;
//    let max = -Infinity;
//    for(let i=0; i<len; len--)
//    {

//     if(arr[len]>max)
//     {
//         max=arr[len];
//     }
//    }
//    return max;
// }

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   let sorte= cars.sort(function(a,b){return a.year -b.year });
//   console.log(sorte);

//   console.log("hello everyone");
//   console.log('hello everyone');
//   console.log(`hello
//                everyone`);

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);
// const numbers3 = numbers1.filter(myFunction);

// console.log(numbers1);
// console.log(numbers2);
// console.log(numbers3);

// function myFunction(value, index, array) {
//     // console.log(`index no is ${index} and value is ${value} of array ${array}`);
//     return value > 20;
// }

// const points = [40, 100, 1, 5, 25, 10];

// const sum = points.reduce(findSum);

// console.log(sum);

// function findSum(total, value, index, array)

// {
//     return total += value;
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text ="";
// for(let i =0; i<cars.length; i++)
// {
//     text += cars[i] + ' ';
// }
// console.log(text);

// const person = { fname: "John", lname: "Doe", age: 25 };

// let text = "";

// for(let x in person)
// {
//     text += person[x] + " ";
// }
// console.log(text);

// const letters = new Set([1,2,3,4,5,6]);
// let text="";
//  letters.add(6);

// letters.forEach(value => {
//     text += value + " ";
// });
// console.log(text);

// console.log(5==="5");

// "use strict";
// x=5;
// console.log(x);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.id;
//     }
//   };
//   console.log(person.fullName);

// let hello = "";

// hello= (val) => {
//     console.log("Hello " + val);
// }

// hello("Universe");

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }

//   let fullName = person.fullName.bind(member);

// let b= a(1,2,3,4,5,6);

// function a(val,sum,hum,dumb,...pump)
// {
//  console.log(val,sum,hum,dumb,pump);
// }

// var p1  = new Promise(function(res, rej)
// {
//     return res("task 1 Completed");
// })

// var p2 =p1.then(function(data)
// {
//     console.log(data);
//     return new Promise(function(res, rej)
//     {
//         return res("task 2 completed");
//     })
// })

// p2.then((data)=>{
//     console.log(data);

// })

// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//     let max = -Infinity;

//     for(let i= 0; i< arguments.length; i++)
//     {
//         if(max<arguments[i])
//         {
//             max=arguments[i];
//         }
//     }
//     return max;
// }
// console.log(x);

// let x = myFunction();            // x will be the window object

// function myFunction() {
//   return this;
// }

// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   console.log(myObject.fullName());

//PROJECT 1
// {
// let istatus = document.querySelector("h5");

// let addFriend = document.querySelector("#add");

// let flag=0;

//     addFriend.addEventListener("click", function(){
//         if(flag==0){
//             istatus.innerHTML="Friends";
//             istatus.style.color="green";
//             addFriend.innerHTML="Remove";
//             flag=1;

//         }
//         else
//         {

//                 istatus.innerHTML="Stranger";
//                 istatus.style.color="Red";
//                 addFriend.innerHTML="Add Friend";
//                 flag=0;

//         }
//     })
// }

// PROJECT 2

// let con = document.querySelector("#container");
// let love = document.querySelector("i");

// con.addEventListener("dblclick", function()
// {
//     love.style.transform= "translate(-50%, -50%) scale(1)";
//     love.style.opacity=1;
//     love.style.color="red";

//     setTimeout(function(){
//         love.style.opacity=0;
//     },1000)

//     setTimeout(function(){
//         love.style.transform="translate(-50%, -50%) scale(0)";
//     },2000)

// })

//project 3

// let elem = document.querySelectorAll(".elem");

// elem.forEach(function(val){

//     val.addEventListener("mouseenter", function(){
//         val.childNodes[3].style.opacity=1;
//     });
//     val.addEventListener("mouseleave", function(){
//         val.childNodes[3].style.opacity=0;
//     });
//     val.addEventListener("mousemove", function(dets){
//         val.childNodes[3].style.left=dets.x+"px";
//     });
//     val.addEventListener("mouseleave", function(dets){
//         val.childNodes[3].style.top=dets.y+"px";
//     });
// });

// console.log("hello");

//project 4

let arr = [
  {
    dp: "https://images.unsplash.com/photo-1693129551108-c1e0ab10f10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    story:
      "https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    story:
      "https://images.unsplash.com/photo-1693900269364-d99aa0385c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1891&q=80",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1690515065463-515f8c7642c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1693550840866-54df27a151af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1690515065463-515f8c7642c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    story:
      "https://images.unsplash.com/photo-1693550840866-54df27a151af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  },
];

let clutter = "";
let storiyan = document.querySelector("#storiyan")
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""/>
  </div>`
    
});
storiyan.innerHTML=clutter;

storiyan.addEventListener("click", function(dets) {
   document.querySelector("#full-screen").style.display="block";
   document.querySelector("#full-screen").style.backgroundImage= `url(${(arr[dets.target.id].story)})`

   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
   }, 3000);

});