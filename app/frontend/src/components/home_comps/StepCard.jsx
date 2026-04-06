// IMPORTACIONES

import styles from "../../modules/comps_module/home_module/StepCard.module.css";
import { Icon } from "@iconify/react";

// COMPONENTE

/**
 * @param {string} stepIcon - Icono del step
 * @param {string} stepIconColor - Color Icono del step
 * @param {string} stepIconSize - Tamaño Icono del step
 * @param {string} stepHeading - Texto del  step
 * @param {string} stepDescription - Descripcion del  step
 */

const StepCard = ({
    stepIcon,
    stepIconColor,
    stepIconBgColor,
    stepIconSize,
    stepHeading,
    stepDescription,
}) => {
    if (!stepIconSize) {
        stepIconSize = "42px";
    }
    return (
        <div
            className={styles.stepCardContainer}
            style={{ "--hoverColor": stepIconColor }}
        >
            <section className={styles.stepCardHeader}>
                <span
                    className={styles.stepIcon}
                    style={{ backgroundColor: stepIconBgColor }}
                >
                    <Icon
                        icon={`gravity-ui:${stepIcon}`}
                        style={{
                            color: stepIconColor,
                            fontSize: stepIconSize,
                        }}
                    />
                </span>
                <span className={styles.stepHeading}>{stepHeading}</span>
            </section>
            <section className={styles.stepCardBody}>
                <p className={styles.stepDescription}>{stepDescription}</p>
            </section>
        </div>
    );
};

export default StepCard;
