const fetchItem = (): Promise<String[]> => {
    let items: string[] = ['a','b','c']
    return new Promise(resolve=>{
        resolve(items);
    })
}

fetchItem();