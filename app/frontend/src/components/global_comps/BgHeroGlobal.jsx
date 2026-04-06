// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/BgHeroGlobal.module.css";

// COMPONENTE

/**
* @param heroContent - Contenido del hero
*/

const BgHeroGlobal = ({ heroContent }) => {
    return (
        <div className={styles.BgHeroGlobalContainer}>
            <div className={styles.blobGreen} />
            <div className={styles.blobYellow} />
            {heroContent && (
                <div className={styles.heroContent}>{heroContent}</div>
            )}
        </div>
    );
};

export default BgHeroGlobal;
