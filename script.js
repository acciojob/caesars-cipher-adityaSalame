// Your Script here.
function fun(ch){
		
	let a="";
	if(ch>='A' && ch<='M')
	a=String.fromCharCode(ch.charCodeAt(0)+13);
	else{
	a=String.fromCharCode((ch.charCodeAt(0))-78+65);
	}
	
	return a;
}


function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	let ans="";

	
for(let i=0;i<encodedStr.length;i++){
	let ch=encodedStr.charAt(i);
	if(ch>='A' && ch<='Z')//decodedArr.push(fun(ch))
	ans=ans+fun(ch);
	else ans=ans+ch;
}
	//document.write(ans+""+typeof(decodedArr));
	decodedArr.push(ans);
	
  return decodedArr;//decodedArr; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

//document.write(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line

window.rot13 = rot13;
