import ATMDispenserChain from './atm-dispenser-chain'

const ATM = new ATMDispenserChain()
console.log('Enter amount to withdrawal : ')
process.stdin.on('data', (data: string) => {
    if (parseInt(data)) {
        const amount = parseInt(data)
        if (amount < 10 || amount % 10 != 0) {
            console.log('Amount should be positive and in multiple of 10s.')
        } else {
            ATM.chain1.handle(amount)
            console.log('Now go spoil yourself')
            process.exit()
        }
    } else {
        console.log('Please enter a number.')
    }
})
