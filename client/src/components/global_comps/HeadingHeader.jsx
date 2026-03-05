// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/HeadingHeader.module.css";

// COMPONENTE

/**
 * @param {string} headingLogo - Icono del heading
 * @param {string} headingTitle - Titulo del heading
 * @param {string} headingDescription - Descripcion del heading
 */

const HeadingHeader = ({ headingLogo, headingTitle, headingDescription }) => {
    return (
        <div className={styles.headingHeaderContainer}>
            {headingLogo && (
                <img
                    className={styles.headingLogo}
                    src="../../IndeAccess_Logotipo.png"
                    alt="Logo IndeAccess"
                />
            )}
            <div className={styles.headingContent}>
                <span className={styles.headingTitle}>{headingTitle}</span>
                <p className={styles.headingDescription}>
                    {headingDescription}
                </p>
            </div>
        </div>
    );
};

export default HeadingHeader;
