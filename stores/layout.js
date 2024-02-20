export const useLayoutStore = defineStore("counter", () => {
  const isClient = typeof window !== 'undefined';
  const localStorageKey = 'sidebarState';
  const isLocalStorageAvailable = isClient && typeof localStorage !== 'undefined';

  const isCollapse = ref(isLocalStorageAvailable ? localStorage.getItem(localStorageKey) === 'true' : 'false');
  const getIsCollapse = computed(() => isCollapse.value);
  const getSidebarWidth = computed(() => {
    if (isLocalStorageAvailable) {
      const storedValue = localStorage.getItem(localStorageKey);
      return storedValue !== null ? storedValue : "5%";
    } else {
      return "5%";
    }
  });

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, isCollapse.value.toString());
      // console.log(localStorage.getItem(localStorageKey));
    }
  };

  return {
    getIsCollapse,
    getSidebarWidth,
    toggleCollapse,
  };
});
