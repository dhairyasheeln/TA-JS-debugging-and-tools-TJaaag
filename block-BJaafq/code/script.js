function test(message,cb)
{
    try{
        cb();
        console.log(message+" Testing successful");
    }
    catch(error)
    {
        console.log(error);
        console.log(message+" Testing Unsucessfull");
    }
}

function expect(actual){
    return{
        toEqual:function (expected)
        {
            if(actual!==expected)
            {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toType:function (expected)
        {
            if(typeof actual!==expected)
            {
                throw new Error(`${actual} is not a ${expected}`);
            }
        }
    }
}

function add(num1,num2)
{
    return num1+num2;
}

function multiply(num1,num2)
{
    return num1*num2;
}

function testAdd()
{
    let result=add(4,6);
    expect(result).toEqual(10);
}


function testMul()
{
    let result=multiply(4,6);
    expect(result).toEqual(11);
}

test("addition of 4 and 6",testAdd);
test("Multiplication of 4 and 6",testMul);