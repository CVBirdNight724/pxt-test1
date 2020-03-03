namespace Mecanum{
    let m1A: number
    let m1B: number
    let m2A: number
    let m2B: number
    export function setMotor(M1A: DigitalPin, M1B: DigitalPin,
        M2A: DigitalPin, M2B: DigitalPin): void{
            m1A = M1A
            m1B = M1B
            m2A = M2A
            m2B = M2B
    }
}
