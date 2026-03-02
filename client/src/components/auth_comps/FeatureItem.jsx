// IMPORTACIONES

import styles from "../../modules/comps_module/auth_module/FeatureItem.module.css";

// COMPONENTE

/**
 * @param {string} featureIcon - Icono de la feature
 * @param {string} featureText - Texto de la feature
 */

const FeatureItem = ({ featureIcon, featureText }) => {
    return (
        <div className={styles.featureItemContainer}>
            <span className={styles.featureIcon}>{featureIcon}</span>
            <span className={styles.featureText}>{featureText}</span>
        </div>
    );
};

export default FeatureItem;
