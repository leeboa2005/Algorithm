function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    const lostPerson = lost.filter((student) => !reserve.includes(student));
    const reservePerson = reserve.filter((student) => !lost.includes(student));

    reservePerson.forEach((student) => {
        if (lostPerson.includes(student - 1)) {
            lostPerson.splice(lostPerson.indexOf(student - 1), 1);
        } else if (lostPerson.includes(student + 1)) {
            lostPerson.splice(lostPerson.indexOf(student + 1), 1);
        }
    });
    return n - lostPerson.length;
}
