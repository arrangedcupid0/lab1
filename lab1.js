var test1 = [4,2,6,23,64,1,7,32,4,32,64];
var test2 = [5,21,345,2,36,3,75,8,29,3134,53,2535];
var test3 = [8,8,8,8,8,8,4,5,8,8,8,8,8,34,2,8];

function insertionTest(arr)
{
	console.log("insertionSort passed array: " + arr);
	var sorted = true;
	var test = insertionSort(arr);
	console.log("insertionSort returned array: " + test);
	console.log("return true if sorted, false if not");
	for(var i = 1; i < arr.length; i++)
	{
		if(test[i] < test[i-1])
		{
			sorted = false;
		}
	}
	return sorted;
}

function revInsertionTest(arr)
{
        console.log("insertionSortReverse passed array: " + arr);
        var sorted = true;
        var test = insertionSortReverse(arr);
        console.log("insertionSortReverse returned array: " + test);
        console.log("return true if sorted, false if not");
        for(var i = 1; i < arr.length; i++)
        {
                if(test[i] < test[i-1])
                {
                        sorted = false;
                }
        }
        return sorted;
}

function insertionSort(arr) {
	for(var i = 1; i < arr.length; i++) {
		var val = arr[i];
		var j;
		for(j = i; j > 0 && arr[j-1] > val; j--) {
			arr[j] = arr[j-1];
		}
		arr[j] = val;
	}
	
	return arr;
}

function insertionSortReverse(arr)
{
	for(var i = (arr.length - 1); i >= 0; i--)
	{
		var val = arr[i];
		var j;
		for(j = i; j < arr.length && arr[j+1] < val; j++)
		{
			arr[j] = arr[j+1]; 
		}
		arr[j] = val;
	}
	return arr;
}



console.log(revInsertionTest(test2));
console.log(revInsertionTest(test1));

