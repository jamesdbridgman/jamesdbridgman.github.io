// Tiny cross-page store, used to hand a starting point calculated on the
// Theorem page over to the Calculator page (mirrors the expo-router
// useLocalSearchParams / router.push({params}) trick in the original app).
const state = {
  pendingStartingPoint: null, // { spYears, spMonths } | null
};

export function setPendingStartingPoint(spYears, spMonths) {
  state.pendingStartingPoint = { spYears, spMonths };
}

export function takePendingStartingPoint() {
  const v = state.pendingStartingPoint;
  state.pendingStartingPoint = null;
  return v;
}
