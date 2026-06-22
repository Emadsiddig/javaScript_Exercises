function test_From(year1,year2){
    let leap_years= [];

    for(let i = year1 ; i <= year2 ; i++){
        if((i % 4 === 0 && i%100 !== 0) ||  i%400===0){
            leap_years.push(i);
        }
    }
    console.log(leap_years);
}

test_From(2000,2012);