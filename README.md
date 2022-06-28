## typescript  
```
  interface Me {     
     interest: number;
     use: string;
     hope: string;
  }
  
  const getThink = (think: Me)=> {
     return think;
  }
  
  getThink( {interest: -10, use: `react`, hope: `throw the typescript` })
```
