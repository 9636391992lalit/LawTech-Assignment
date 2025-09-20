function showCalculator(type) {
    // Hide all calculator sections
    document.querySelectorAll('.calculator-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show selected calculator
    if (type === 'compound') {
        document.getElementById('compound-calculator').classList.add('active');
        document.querySelector('[onclick="showCalculator(\'compound\')"]').classList.add('active');
    } else if (type === 'triangle') {
        document.getElementById('triangle-calculator').classList.add('active');
        document.querySelector('[onclick="showCalculator(\'triangle\')"]').classList.add('active');
    }
}

let btn=document.getElementById('calculate');
function find_gcd(x,y)
{
    while(x!==0)
    {
        temp=x;
        x=y%x;
        y=temp;
    }
    return y;
}
btn.addEventListener('click',()=>
{
intial1=intial=Number(document.getElementById('principal').value);
final1=final=Number(document.getElementById('final').value);
 year=Number(document.getElementById('years').value);
if (intial > final) {
    document.getElementById("error").innerText = 
        "Final Amount should not be less than Principal Amount";
    return;
}

document.getElementById('intial').innerText=intial;
document.getElementById('final_amount').innerText=final;
document.getElementById('year').innerText=year;
document.getElementById('top1').innerText=final;
document.getElementById('bottom1').innerText=intial;
gcd=find_gcd(intial,final);
document.getElementById('top2').innerText=(final/gcd);
document.getElementById('bottom2').innerText=(intial/gcd);
final=final/gcd;
intial=intial/gcd;
final_ans=Number(Math.pow(final,1/year).toFixed(2));
intial_ans=Number(Math.pow(intial,1/year).toFixed(2));
document.getElementById('top3').innerText=final_ans;
document.getElementById('bottom3').innerText=intial_ans;
document.getElementById('black_box').innerText=final_ans;
document.getElementById('black_box_above').innerText=year;
document.getElementById('black_box_ans').innerText=final;
document.getElementById('black_box1').innerText=intial_ans;
document.getElementById('black_box_above1').innerText=year;
document.getElementById('black_box_ans1').innerText=intial;
console.log(final_ans-intial_ans);
document.getElementById('top4').innerText=(final_ans-intial_ans).toFixed(2);
document.getElementById('bottom4').innerText=intial_ans;
let final_rate=(((final_ans-intial_ans)*100)/intial_ans).toFixed(4);
document.getElementById('rate').innerText=final_rate;

document.getElementById('statement_final').innerText=intial1;
document.getElementById('statement_intial').innerText=final1;
document.getElementById('statement_year').innerText=year;
document.getElementById('right_intial').innerText=intial1;
document.getElementById('right_rate').innerText=final_rate;
document.getElementById('left_right').innerText=intial1;
document.getElementById('right_top22').innerText=(Number(final_rate)+100);
document.getElementById('right_down22').innerText=100;

document.getElementById('right_top222').innerText=(Number(final_rate)+100);
document.getElementById('right_down222').innerText=100;
let a1=Number(final_rate)+100;
console.log(a1*a1);
let final_output=(a1*a1)/10000;
console.log(final_output);
console.log(intial1);
document.getElementById('finalOutput').innerText=(Number(intial1)*final_output).toFixed(4);

})


let sub_btn=document.getElementById("triangle");
sub_btn.addEventListener("click",()=>{
    let a=Number(document.getElementById("side-a").value);
    let b=Number(document.getElementById("side-b").value);
    
    
    document.getElementById("bc-label").innerText=b;
    document.getElementById("ac-label").innerText=a;
    document.getElementsByClassName("left")[0].innerText=Math.abs(a-b);
    document.getElementById("side1-display").innerText=a;
    document.getElementById("side2-display").innerText=b;
    document.getElementsByClassName("left")[1].innerText=Math.abs(a-b);
    ans=Number(Math.sqrt(Math.abs(a*a-b*b)));
    if(!Number.isInteger(ans))
    {
        ans=Number(ans.toFixed(2));
    }
    document.getElementById("ab-label").innerText=ans;
    document.getElementById("side1-display1").innerText=a;
    document.getElementById("side2-display1").innerText=b;
    document.getElementById("side3-display1").innerText=ans;
    document.getElementById("final_ans").innerText=`${a}, ${b}, ${ans} is a Pythagorean triplet`
    document.getElementById("sec-num").innerText=a;
    document.getElementById("sec-den").innerText=b;
    document.getElementById("cot-num").innerText=ans;
    document.getElementById("cot-den").innerText=b;
    let n=a+ans;
    let d=b
    
    console.log(typeof(ans));
    gcd=1;
    if(Number.isInteger(n)&&Number.isInteger(d))
    gcd=find_gcd(n,d);
    

    document.getElementById("res_num").innerText=n/gcd;
    document.getElementById("res_den").innerText=b/gcd;
})
