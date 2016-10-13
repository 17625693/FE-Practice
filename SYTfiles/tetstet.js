/**
 * Created by songyuting on 2016/9/18.
 */
// function getResult(n) {
//     var result = 0;
//     if (n < 0) {
//         result = "error";
//     }
//     if (n == 0) {
//         result = 0;
//     }else if (n == 1) {
//         result = 1;
//     }else {
//         result = n;
//         while (n > 1) {
//             result *= (--n);
//         }
//     }
//     return result;
// }
//
// // getResult(0);
// // getResult(7);
//
//
// var line;
// var count = 0;
// var firstNum = 0;
// while(line = read_line()){
//     if (!count) {
//         firstNum = line;
//         count=1;
//     }else {
//         if (firstNum < line) {
//             print("NO");
//         }else {
//             var length = line.length;
//             var arr;
//             for ( var i=0; i < length; i++) {
//                 if ( line.slice(i, i+1) > line.slice(i+1, i+2) ) {
//                     if ( i!=0 || line.slice(1, 2)!=0 ) {
//                         print("NO");
//                         break;
//                     }
//                 }
//             }
//             print("YES");
//         }
//     }
// }
//
//
// var line;
// while(line = read_line()){
//     line = line.trim();
//     print(getDemond(line));
// }
//
// var i = 0;
// while(line = read_line()){
//     var n;
//     if(i%2==0) {
//         line = line.split(' ');
//         print(func(line));
//         i++;
//     }
// }

/**
 * 2016-09-21
 * 股神
 * 经过严密的计算，小赛买了一支股票，他知道从他买股票的那天开始，股票会有以下变化：
 * 第一天不变，以后涨一天，跌一天，涨两天，跌一天，涨三天，跌一天...依此类推。
 * 经过严密的计算，小赛买了一支股票，他知道从他买股票的那天开始，股票会有以下变化：第一天不变，以后涨一天，跌一天，涨两天，跌一天，涨三天，跌一天...依此类推。
 *
 * 思路：寻找i个等差数列求和得到n，也就是找 n 的值所在的范围。
 */


// getValue(3);

function getValue(num) {
    var result = 0;
    if(num < 3) {
        result = num;
    } else {
        var i;
        for ( i=2; i*( i+1)/2 > num || num >= (i+1)*(i+2)/2 ; i++) {
            var j;
        }
        result = num - 2*(i-1);
    }
    return result;
}

/**
 * 翻转数组
 * 给定一个长度为n的整数数组a，元素均不相同，问数组是否存在这样一个片段，只将该片段翻转就可以使整个数组升序排列。
 * 其中数组片段[l,r]表示序列a[l], a[l+1], ..., a[r]。
 * 原始数组为
 * a[1], a[2], ..., a[l-2], a[l-1], a[l], a[l+1], ..., a[r-1], a[r], a[r+1], a[r+2], ..., a[n-1], a[n]，
 * 将片段[l,r]反序后的数组是
 * a[1], a[2], ..., a[l-2], a[l-1], a[r], a[r-1], ..., a[l+1], a[l], a[r+1], a[r+2], ..., a[n-1], a[n]。
 */
//
// console.log(func(4, [1, 3, 0, 3, 4]));

// var n = readline().trim();
// var line = readline().split(' ');
// var arr = [];
// for (var i=0; i<n; i++){
//     arr[i] = parseInt(line[i]);
// }
//
// print(func(n, arr));


function func(n, arr) {
    var l=0, r;
    if ( n ==1 || (n==2 && arr[0] > arr[1])) return "yes";
    while (arr[l] < arr[l+1]){l++}
    r = l+1;
    while (arr[r] > arr[r+1]){r++}
    var k = r+1;
    while ( (arr[k] <= arr[k+1]) && k<n) {k++}
    if ( ( r==n || arr[l] <= arr[r+1] ) && ( l==0 || arr[l-1] <= arr[r]) && k==n ) {
        return "yes";
    }else return "no";
}
//
// var promise1 = new Promise( function (resolve) {
//     resolve(1);
// });
// promise1.then(function (data) {
//     data += 1;
//     return data;
// });
// promise1.then(function (data) {
//     console.log(data);
// });

//var arr = ["one", "two", "two", "three", "three", "three"];
//getMaxCount(arr);
function getMaxCount(arr) {
    var count=1, max=1;
    var index;
    arr.sort();
    for (var i = 0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            count++;
        }else if(count > max){
            max = count;
            count = 1;
            index = arr[i];
        }
    }
    return index;
}


// getDemond("XXXXXATTMBQECPDWWWWW");
function getDemond(line) {
    var n = line.length;
    var arr = [-1];
    // 获取王后喜欢的宝石的位置索引，存入数组
    for (var i=0; i<n; i++){
        var index = line.substr(i,1);
        if(index=='A' || index=='B' || index=='C' || index=='D' || index=='E'){
            arr.push(i);
        }
    }
    if (arr.length < 6){
        // 宝石不够的情况
        return 0;
    }else {
        var head = n - arr[arr.length-1] + arr[1]; // 首尾相连时两端的宝石数
        arr.push(n);
        for (var i=0; i<arr.length; i++){
            // 计算宝石间距
            arr[i] = arr[i+1] - arr[i];
        }
        arr[arr.length-1] = head;
        arr.sort(function (a, b) {
            return b - a;
        });
        return arr[0]-1;
    }
}


//
// while(line = read_line()){
//     line = line.split(' ');
//     print(getDemond(line[0]));
// }

// cutNum(32111115, 3);

// var str1 = read_line().trim();
// var str2 = read_line().trim();
// print(cutNum(str1, +str2));

function cutNum(num, n) {
    var arr = [];
    var indexArr = [];
    var numStr = num.toString();
    for(var i=0; i<numStr.length; i++) {
        arr[i] = numStr.substr(i, 1);
        indexArr[i] = numStr.substr(i, 1);
    }
    indexArr.sort();
    for(var i=0; i<n; i++){
        arr.splice(arr.indexOf(indexArr[i]), 1);
    }
    var result = arr.join("");
    return result;
}

//
// function f1(){
//     var n=999;
//     nAdd = function () {
//         n+=1
//     }
//     function f2() {
//         alert(n);
//     }
//     return f2;
// }
// var result = f1();
// result();
// nAdd();
// result();
//
// var line1 = read_line();
// line1 = line1.split(' ');
// var n = +line1[0];
// var m = +line1[1];
// var line2 = read_line();
// line2 = line2.split(' ');
// var arr = [];
// for (var i=0; i<n; i++){
//     arr[i] = line2[i];
// }
// print(getAnswer(n, m, arr));


function getAnswer(n, m, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr.length - 1 - i; j++)
        {

            var a = arr[i];
            var b = arr[i + j + 1];
            if ( (a^b) > m) {
                count++;
            }
        }
    }
    return count;
}

// var arr = [6, 5, 10];
// getAnswer(3, 10, arr);


var line = "232523534";
getNum(line);


//var n = +readline();
//var line;
//while(line = readline().trim()){
//    print(getNum(line));
//}

function getNum(line){
    var charReg = /ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|ZERO/;
    while (charReg.test(line)){
        var newStr = line.replace(charReg, matchStr)
        function matchStr(match) {
            switch(match){
                case ONE:
                    return 1;
                case TWO:
                    return 2;
                case THREE:
                    return 3;
                case FOUR:
                    return 4;
                case FIVE:
                    return 5;
                case SIX:
                    return 6;
                case SEVEN:
                    return 7;
                case EIGHT:
                    return 8;
                case NINE:
                    return 9;
                case ZERO:
                    return 0;
            }
        }
    }
}



function getPhone(line) {
    var num = line.split('');
    for (var i=0; i<num.length; i++){
        num[i] = ( num[i]%8 >= 8 )?( num[i] - 8 ):( +num[i] + 2 );
    }
    return num.join('');
}


////var line;
//
//var lineArr = "hello xiao mi".split(' ');
//getStr(lineArr);

//var lineArr;
//while(lineArr = read_line()){
//    lineArr = lineArr.split(' ');
//    print(getStr(lineArr));
//}

function getStr(arr) {
    var backArr = [];
    var n = arr.length;
    for (var i=0; i < n; i++){
        backArr[i] = arr[n-i-1];
    }
    return backArr.join(' ');
}

var count = [1, 1];
for (var i = 0; i < 28; i++){
    count[i+2] = count[i+1] + count[i];
}
var line;
while (line = read_line().trim()) {
    var result = "";
    if ( line >=1 || line <= 30){
        result = count.slice(0, line-1).join(" ");
    }else result = "error";
    print(result);
}



function rabbit(num){
    var n = num;
    if ( num > 0) {
        n += rabbit(n-1);
    }
    return n;
}



















