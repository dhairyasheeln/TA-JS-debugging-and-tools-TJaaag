function fullName(firstName,lastName)
{
    return firstName+" "+lastName;
}

//Test

let result=fullName('John','Snow');
let expected="JohnSnow";

if(result!==expected)
{
    throw new Error(`${result} is not equal to ${expected}`);
}


result=fullName("Tony","Stark");
expected="TonyStark";
if(result!==expected)
{
    throw new Error(`${result} is not  equal to ${expected}`);
}



function totalAmount(amount,taxRate)
{
    return amount + (amount * taxRate);
}


result=totalAmount(100,0.10);
expected=100;
if(result!==expected)
{
    throw new Error(`${result} is not equal to ${expected}`);
}

result=totalAmount(200,0.10);
expected=200;
if(result!==expected)
{
    throw new Error(`${result} is not equal to ${expected}`);
}

