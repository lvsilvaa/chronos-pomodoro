export function getNextCycle(currentCycle: number) {
  return (currentCycle % 8) + 1;
}
