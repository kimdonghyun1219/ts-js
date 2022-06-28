type Home = {
    address: string;
    zipcode: number;
}

const ipark: Home = {
    address: 'bukgaja',
    zipcode: 17721
}

const getHome = (name: Home)=> {}
getHome(ipark);

/**
 *  type !== interface
 *  extends: type(x), interface(o) 
 */