function countMonkeys(n: number): number[] {
    if (n <= 0) return [];
    
    const monkeys: number[] = [];
    
    for (let i = 1; i <= n; i++) {
        monkeys.push(i);
    }
    
    return monkeys;
}