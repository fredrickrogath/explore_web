// navigate.ts

export const useNavigate = () => {
  const router = useRouter();

  const animateAndNavigate = (url: string | null = null) => {
    if (url) {
      router.push({ path: url });
    } else {
      router.go(-1); // Go back one step in the browser history
    }
  };

  return {
    animateAndNavigate
  };
};
