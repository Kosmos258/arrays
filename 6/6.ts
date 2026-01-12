function countSheeps(sheepArray: (boolean | null | undefined)[]): number {
    if (!sheepArray) {
        return 0;
    }
    
    return sheepArray.filter(sheep => sheep === true).length;
}