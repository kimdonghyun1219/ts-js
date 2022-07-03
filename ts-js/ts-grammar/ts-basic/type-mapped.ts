type Computer = 'monitor' | 'keyboard' | 'mouse'
type Price = { [T in Computer]: number }
const price: Price = {
    monitor: 458000,
    keyboard: 230000,
    mouse: 125000
}