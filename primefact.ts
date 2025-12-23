var n=Number(prompt("enter the n:"))
    for(var i=2;i<n;i++)
    {
        while(n%i==0)
        {
            console.log("prime fact is"+i); 
            n=n/i;  
        }
    }