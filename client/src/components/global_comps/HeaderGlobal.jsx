// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/HeaderGlobal.module.css";
import { Icon } from "@iconify/react";
import { useLocation, Link } from "react-router-dom";

// COMPONENTE

/**
 * @param {string} headingLogo - Muestra el logo de IndeAccess
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
        <header>
            <section className={styles.headerLeftPart}>
                {location.pathname !== "/" && (
                    <Link to={-1}>
                        <div className={styles.backBtn}>
                            <Icon icon="gravity-ui:arrow-left" />
                            <span>Volver</span>
                        </div>
                    </Link>
                )}
                <div className={styles.headingHeaderContainer}>
                    {headingLogo && (
                        <img
                            className={styles.headingLogo}
                            src="../../IndeAccess_Logotipo.png"
                            alt="Logo IndeAccess"
                        />
                    )}
                    <div className={styles.headingContent}>
                        <span className={styles.headingTitle}>
                            {headingTitle}
                        </span>
                        <p className={styles.headingDescription}>
                            {headingDescription}
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.headerRightPart}>
                {headerRightContent}
            </section>
        </header>
    );
};

export default HeaderGlobal;
