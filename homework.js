//bài 1: nhập vào 2 mảng gồm các số, gộp 2 mảng đó thành 1 mảng có các số được sắp xếp theo thứ tự tăng dần
var arr1 = [];
var arr2 = [];
var list1 = 0;
var list2 = 0;
function inputArray() {
    list1 = Number(prompt('Số số hạng bạn muốn cho dãy 1 là: '))
    list2 = Number(prompt('Số số hạng bạn muốn cho dãy 2 là: '))
    if(list1 <= 0 || list2 <= 0) return false;
    for(let i = 0; i < list1; i++) {
        let num = Number(prompt('Mời bạn nhập vào số cho dãy 1: '))
        arr1.push(num);
    }
    for(let j = 0; j < list2; j++) {
        let num = Number(prompt('Mời bạn nhập vào số cho dãy 2: '))
        arr2.push(num);
    }
console.log ("Mảng 1: ", arr1);
console.log ("Mảng 2: ", arr2);
}


function merge(arr1, arr2) {
    let finalArr = [];
    var i = 0;
    var j = 0;
    for(i; i < arr1.length; i++) {
        for(j; j < arr2.length; j++) {
            if(arr1[i] < arr2[j]) {
                finalArr.push(arr1[i])
                j--;
                i++;
            }else {
                finalArr.push(arr2[j])
            }
        }  
    }

    if(list1 < list2) {
        for(let k = j; k < arr2.length; k++) {
            finalArr.push(arr2[k]);
        }
    }else if(list2 < list1){ 
        var m = 0;
        for(m = i - 1; m < arr1.length; m++) {
            finalArr.push(arr1[m])
        }
    }

    return finalArr;
}

inputArray()
console.log(merge(arr1, arr2))

//bài 2 em chưa biết làm ạ
