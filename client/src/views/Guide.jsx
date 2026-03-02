import styles from "../modules/views_module/Guide.module.css";
import HeadingHeader from "../components/global_comps/HeadingHeader";
import RegularBtn from "../components/global_comps/RegularBtn";
import { Link } from "react-router-dom";

const Guide = () => {
    return (
        <div className={styles.GuideContainer}>
            <header>
                <Link to={-1}>
                    <RegularBtn
                        btnContext="btnHeaderBack"
                        btnIcon="arrow-left"
                        btnText="Volver"
                    />
                </Link>
                <HeadingHeader
                    headingTitle="Guía de Inscripción"
                    headingDescription="Proceso paso a paso"
                />
            </header>
        </div>
    );
};

export default Guide;
