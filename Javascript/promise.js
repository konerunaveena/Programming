//Callback Hell :
/*Nesting many asynchrounous functions inside callbacks is called callback hell.*/
//Example :
asyncFunction(function(){
    asyncFunction(function(){
        asyncFunction(function(){
            asyncFunction(function(){
                asyncFunction(function(){
                    //....
                });
            });
        });
    });
});
//this recursive structure of callback is called as ‘callback hell’.
/* To slove this kind of issue we have promises */
