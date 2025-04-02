/*
If I want to store a Data Local storage we need to 3 function
1.Add to the Local storage 
2.Save To the Local Storage
3.Get From Local Storage
*/

// 1.Get item for call the local storage and get it the formate 
const getFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart_item')
    if(storedCartString){
      const storedCart = JSON.parse(storedCartString)
      return storedCart;
    }
    return []
    }
    
    // 2.Save to the Local Storage Data 
    const saveDataToLocalStorage = (cart_item) =>{
    // Convert the Data to JSON formate on the store the Web Storage 
    const cartStringConvert =JSON.stringify(cart_item)
    localStorage.setItem('cart_item',cartStringConvert)
    }
    
    // 3.AT Last Use This For add item to the local storage 
    const addItemsToLocalstorage =id=>{
        const cart_item  = getFromLocalStorage();
        const newCart = [...cart_item , id];
        // This line send the data to store Local Storage 
        saveDataToLocalStorage(newCart)
    }

    const removeFromLocalStorage = (id) =>{
      const getCartItems = getFromLocalStorage()
      const remainingCartItems =getCartItems.filter(itemsCart => itemsCart !== id)
      saveDataToLocalStorage(remainingCartItems)
    } 

    export {addItemsToLocalstorage as addLocalStore , getFromLocalStorage as getLocalStore
      ,
      removeFromLocalStorage as removeCart
    }