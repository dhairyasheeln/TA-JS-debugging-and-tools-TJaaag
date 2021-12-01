function test(message,cb)
{
    try{
        cb();
        console.log(message+" Testing successful");
    }
    catch(error)
    {
        console.log(error);
        console.log(message,+" Testing Unsucessfull");
    }
}

function expect(actual)
{
    return
    {
        EqualTo:function abc(expected)
        {
            if(actual!==expect)
            {
                throw new Error(`${actual} and ${expected} are not equal`);
            }
        }
    }
}