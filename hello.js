//１.温度チェッカー
function checkTemperature(t){
    if (t >= 30){
        console.log("Hot");
    }else if(15 <= t && t < 30){
        console.log("Warm");
    }else{

        console.log("Cold");
    }
}

checkTemperature(30);
checkTemperature(20);
checkTemperature(1);