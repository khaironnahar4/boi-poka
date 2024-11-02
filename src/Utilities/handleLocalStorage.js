

const getStoredList = (name)=>{
    const readBooksList = localStorage.getItem(name);
    if(readBooksList){
        const storedList = JSON.parse(readBooksList);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredList = (id, name)=>{
    const storedList = getStoredList(name);
    if(storedList.includes(id)){
        console.log(id," already exist");        
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem(name, storedListStr);
    }
}

export {addToStoredList, getStoredList}
