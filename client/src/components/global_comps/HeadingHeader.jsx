// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/HeadingHeader.module.css";

// COMPONENTE

/**
 * @param {string} headingTitle - Titulo del heading
 * @param {string} headingDescription - Descripcion del heading
 */

const HeadingHeader = ({ headingTitle, headingDescription }) => {
    return (
        <div className={styles.headingHeaderContainer}>
            <span className={styles.headingTitle}>{headingTitle}</span>
            <p className={styles.headingDescription}>{headingDescription}</p>
        </div>
    );
};

export default HeadingHeader;
