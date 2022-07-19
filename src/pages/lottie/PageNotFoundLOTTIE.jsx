import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import PageNotFoundJSON from './json/PageNotFound.json';

const PageNotFoundLOTTIE = (props) => {
    const likecontainer = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: likecontainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: PageNotFoundJSON
        });
    }, [])
    return(
        <>
            <div ref={likecontainer}></div>
        </>
    )
}

export default PageNotFoundLOTTIE;