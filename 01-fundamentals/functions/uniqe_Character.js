function uniqe_character(str){
    let letters = str.split('');
    // console.log(letters);
    let uniqeletters = [... new Set(letters)];
    console.log(uniqeletters);
}

uniqe_character('eocosnsojjjjj');