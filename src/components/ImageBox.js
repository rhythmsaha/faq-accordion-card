import classes from "./ImageBox.module.css";
import illustrationDesktop from "../images/illustration-woman-online-desktop.svg";
import illustrationMobile from "../images/illustration-woman-online-mobile.svg";
import cube from "../images/illustration-box-desktop.svg";

const ImageBox = () => {
    return (
        <div className={classes.ImageBox}>
            <div className={classes.WomenBox}>
                <img
                    src={illustrationDesktop}
                    alt="illustration-woman-online-desktop"
                    className={classes.WomanDesktop}
                />
                <img
                    src={illustrationMobile}
                    alt="illustration-woman-online-Mobile"
                    className={classes.WomanMobile}
                />
            </div>
            <img src={cube} alt="cube" className={classes.Cube} />
        </div>
    );
};

export default ImageBox;
