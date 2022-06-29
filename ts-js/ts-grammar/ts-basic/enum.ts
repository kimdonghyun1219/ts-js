/**
 *  number
 */
enum HobyRank {
    SING,
    DANCE,
    BILLIARDS,
    FLY
}
const myPhone = HobyRank.SING; // 0 , .. HobyRank.DANCE: 1 ,.. index

/**
 *  string
 */
enum FoodMenu {
    beverage = '음료',
    cookie = '쿠키',
    bread = '빵'
}
const getFoodMenu = FoodMenu.cookie; // 쿠키


enum Answer {
    GukBab = 'Y',
    Pasta = 'N',
    Anything = 'F'
}

const whatDoUwantToEat = (answer: Answer)=> {
    let reply:string;

    switch(answer) {
        case Answer.GukBab : reply = 'good'
        break
        case Answer.Pasta : reply = 'bad'
        break
        case Answer.Anything : reply = 'get out here'
        break
    }
    return reply;
}
whatDoUwantToEat(Answer.GukBab);
// whatDoUwantToEat('GukBab') (x)
// whatDoUwantToEat('국밥') (x)
// whatDoUwantToEat('뚝배기') (x)