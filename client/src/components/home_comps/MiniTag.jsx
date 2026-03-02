// IMPORTACIONES

import styles from "../../modules/comps_module/home_module/MiniTag.module.css";
import { Icon } from "@iconify/react";

// COMPONENTE

/**
 * @param {string} tagText - Texto del tag
 * @param {string} tagIcon - Icono del tag
 */

const MiniTag = ({ tagText, tagIcon, className }) => {
    return (
        <div className={`${styles.MiniTagContainer} ${className}`}>
            <p>{tagText}</p>
            {tagIcon && <Icon icon={`gravity-ui:${tagIcon}`} />}
        </div>
    );
};

export default MiniTag;
