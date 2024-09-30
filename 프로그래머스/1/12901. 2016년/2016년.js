function solution(a, b) {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDay = 0;

    for (let month = 0; month < a - 1; month++) {
        totalDay += daysInMonth[month];
    }

    totalDay += b - 1;

    const dayIndex = (totalDay + 5) % 7;

    return daysOfWeek[dayIndex];
}