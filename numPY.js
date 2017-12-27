function numPY(s){
    //s.toLowerCase;
    var p_c=0;
    var y_c=0;
    for(var i=0;i<s.length;i++)
    {

        if(s[i]==="p"||s[i]==="P")
        {
            p_c++;
        }
        else if(s[i]==="y"||s[i]==="Y")
        {
            y_c++;
        }
    }
    if(p_c===y_c)
        return true;
    return false;

}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") );
console.log( numPY("Pyy") );