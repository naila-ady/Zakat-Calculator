import inquirer from "inquirer";
import chalk from "chalk";

//78692

let zakatPercentage=2.5;//percentage of zakat
let zakatApplicable=7.5;//amount of gold tola applicable for zakat
let goldValueperTola=250000;//price per tola
//creating propmpt to get gold value in tola
let zakatAmount=await inquirer.prompt([{
        message:"Enter your gold weight?",
       name:"zakat",
        type:"number",
    }]);
//checking for the correct tola weight applicable and calculating zakat
if(zakatAmount.zakat >=zakatApplicable){
    let zakatAmountApplicable=(zakatAmount.zakat*goldValueperTola)*(zakatPercentage/100);
    console.log(`The total amount of zakat will be Rs.${zakatAmountApplicable} for the${zakatAmount.zakat}tola.`);

}else{
    console.log(`Zakat is not applicable for the ${zakatAmount.zakat}tola`);

}
