// IMPORTACIONES

import styles from "../../modules/comps_module/global_module/RegularBtn.module.css";
import { Icon } from "@iconify/react";

// COMPONENTE

/**
 * @param {string} btnText - Texto del botón
 * @param {string} btnIcon - Icono del botón
 * @param {string} btnContext - Contexto del botón
 * @param {string} btnBg - Color de fondo del botón
 */

const RegularBtn = ({ btnText, btnIcon, btnContext, btnBg }) => {
    return (
        <div
            className={
                styles.RegularBtnContainer +
                " " +
                styles[btnContext]
                // " " +
                // styles[btnBg]
            }
        >
            <span>{btnText}</span>
            {btnIcon && (
                <Icon
                    icon={`gravity-ui:${btnIcon}`}
                    // style={{ color: btnIconColor }}
                />
            )}
        </div>
    );
};

export default RegularBtn;
