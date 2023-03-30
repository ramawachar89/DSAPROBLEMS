let arr = [1, 1, 2, 1, 1, 2, 1]
let visited={};
for(let i=0;i<arr.length;i++){
    if(visited[i]==true)continue;
    let count=1;
    for (let j=i+1; j<arr.length;j++){
        if(arr[i]==arr[j]){
            visited[j]==true;
            count++
        }else if(visited[i]=arr[i]){
            continue;
        }
    }
    console.log(arr[i],"", count)
}

