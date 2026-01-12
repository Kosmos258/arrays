function getAverage(grades: number[]) {

    const sum = grades.reduce((total: number, grade: number) => total + grade, 0);
    const average = sum / grades.length;

    return Math.round(average);
}