export function getRandomDate() {
    const startDate = new Date('2024-04-01');
    const endDate = new Date('2024-04-30');
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toISOString().split('T')[0];
}
