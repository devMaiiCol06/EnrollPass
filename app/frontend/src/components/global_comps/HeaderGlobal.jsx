// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/HeaderGlobal.module.css";
import { useLocation, Link } from "react-router-dom";
import RegularBtn from "./RegularBtn";

// COMPONENTE

/**
 * @param {string} headingLogo - Muestra el logo de EnrollPass
 * @param {string} headingTitle - Texto del heading
 * @param {string} headingDescription - Descripcion del heading
 * @param {string} headerRightContent - Contenido del lado derecho del header
 */

const HeaderGlobal = ({
    headingLogo,
    headingTitle,
    headingDescription,
    headerRightContent,
}) => {
    const location = useLocation();

    return (
        <header
            className={styles.headerContainer}
        >
            {location.pathname !== "/" && (
                <Link to={-1} className={styles.backBtnLink}>
                    <RegularBtn
                        btnContext="btnHeaderBack"
                        btnText="Volver"
                        btnIcon="arrow-left"
                    />
                </Link>
            )}
            <section className={styles.headingHeaderContainer}>
                {headingLogo && (
                    <img
                        className={styles.headingLogo}
                        src="../../EnrollPass_Logotipo.png"
                        alt="Logo EnrollPass"
                    />
                )}
                <div className={styles.headingContent}>
                    <span className={styles.headingTitle}>{headingTitle}</span>
                    <p className={styles.headingDescription}>
                        {headingDescription}
                    </p>
                </div>
            </section>
            <section className={styles.headerRightPart}>
                {headerRightContent}
            </section>
        </header>
    );
};

export default HeaderGlobal;
