function reverseStr(str){
    var listOfChars=str.split(' ');//['h','e','l'.....]
    var reverseListOfChars=listOfChars.reverse();
    var reverseStr=reverseListOfChars.join('');
    return reverseStr;
    // return str.split('').reverse().join('')
}
function isPalindrome(str){
    var reverse=reverseStr(str);
    return str === reverse;
}
function convertDataToStr(data){
    var dateStr={day:'',month:'',year:''}
    if(date.day<10){
        dateStr.day='0'+date.day;
    }

    else{
        dateStr.day=date.day.toString();
    }
    if(date.month<10){
        dateStr.month='0'+date.month;
    }

    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;


    
}


function getAllDateFormats(date){
    var dateStr=convertDataToStr(date);
    var ddmmyyyy =dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy=dateStr.month+dateStr.year+dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2)+dateStr.month+dateStr.day;
    return[ddmmyyyy, mmddyyyy,yyyymmdd,ddmmyyy,mmddyy, yymmdd ]

}



function checkPalindromeForALlDateFormts(date){
    var listOfPalindrome= getAllDateFormats(date);
    var flag =false;
    for(var i=0; i<listOfPalindrome.length;i++){
        if(isPalindrome(listOfPalindrome[i])){
            flag=true;
            break;
        }
    }
    return flag;
}
//check for leap year
function isleapYear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;

    }
    if(year%4===0){
        
    }
}
//get next date
function getNextDate(date){
    var day=date.day+1;
    var month=date.month;
    var year=date.year;
    var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

if(month ===2){
    if(isleapYear(year)){
        if(day>29){
            day=1;
            month++;
        }
    }
    else{
        if(day>20){
            day=1;
            month++;
        }
    }
}
else{
    if(day>daysInMonth[month-1]){//16>31?
        day=1;
        month++;
    }
}
if(month>12){
    month=1;
    year++;

}
return{
    day:day,
    month:month,
    year:year
}
}

function getNextPalindromeDate(data){
    var ctr=0;
    var nextDate=getNextDate(date);
    while(1){
        ctr++;
        var isPalindrome = checkPalindromeForALlDateFormts(nextDate);
        if(isPalindrome){
         break;
        }
        nextDate=getNextDate(nextDate);
    }
    return[ctr,nextDate];

}

var dateInputRef=document.querySelector("#bday-input");
var showBtnRef= document.querySelector("#show-btn");
var resultRef=document.querySelector("#result");
function clickHandler(e){
    var bdayStr=dateInputRef.ariaValue;
    if(bdayStr!==""){
        var listOfDate=bdayStr.split("-");
        var date={
            day:Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0])
        }
        var isPalindrome=checkPalindromeForALlDateFormts(date);
        if(isPalindrome){
            resultRef.innerText="yay your bithday is a palindrome"
        }
        else{
            var[ctr,nextDate]=getNextPalindromeDate(date)
            resultRef.innerText="the next Palindrome is ${nextDate.day} ${resultRef.month},you missed it by ${ctr} days!"
        }
    }
}

showBtnRef.addEventListener("click",clickHandler);
var date={
    day:15,
    month:2,
    year:2000
}
console.log(getNextDate(date));

87 