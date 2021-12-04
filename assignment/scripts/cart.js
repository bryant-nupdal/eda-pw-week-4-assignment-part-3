console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ){
  basket.push( 'pear' );
  basket.push( 'apple' );
  basket.push( 'orange' );
  basket.push( 'banana' );
  basket.push( 'plum' );
  basket.push( 'peach' );
  basket.push( 'grape' );

  if ( basket.length > 0){
    return true;
  }//End of if
  else {
    return false;
  }//End of else
}//end 'addItem' function

function listItems (){
  for (item of basket) {
    console.log('The item in the basket is: ', item);
  }//End of for loop
}//End of 'listItem' Function

function empty (){
  basket = [];
  console.log(' Your basket is empty! ');
}//End of 'empty' Function

const maxItems = 5
function isFull (){
  if ( basket.length >= maxItems){
    return true;
  }//End if
  else{
    return false;
  }//End else
  console.log(basket.length);
}//End 'maxItems' function

function removeItem ( item ){
  basket = basket.filter(
    (item, pos) => basket.indexOf(item) === pos
  );
  console.log('All repeating items have been removed from the basket ' );
}//End 'removeItem' function
