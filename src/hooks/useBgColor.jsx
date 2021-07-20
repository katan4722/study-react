import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  console.log(router);

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
