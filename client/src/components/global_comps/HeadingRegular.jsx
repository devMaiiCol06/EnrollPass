// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/HeadingRegular.module.css";

// COMPONENTE

/**
 * @param {string} headingText - Texto del heading
 * @param {string} headingDescription - Descripcion del heading
 */

const HeadingRegular = ({ headingText, headingDescription }) => {
    return (
        <div className={styles.headingRegularContainer}>
            <span className={styles.headingText}>{headingText}</span>
            <p className={styles.headingDescription}>{headingDescription}</p>
        </div>
    );
}; 

export default HeadingRegular;