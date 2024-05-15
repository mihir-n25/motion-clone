import { useEffect, useState } from "react";


const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(true);
    const handleScroll = () => {
        if(window.scrollY > threshold){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)   
      return () => {
        window.removeEventListener("scroll" , handleScroll)
      }
    }, [threshold])
    return scrolled;
}
 
export default useScrollTop;
