var a = 1263262; 
var b = 553443;   
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a - b;
		//return a;
	}
	else
	{
		b = b - a;
		//return b;
	}
}
gcd = a;
console.log(gcd);1263262,553443