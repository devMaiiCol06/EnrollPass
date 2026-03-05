// IMPORTACIONES

import styles from "../../modules/comps_module/guide_module/StepCard.module.css";
import { Icon } from "@iconify/react";

// COMPONENTE

const StepCard = ({ step, index, steps }) => {
    return (
        <div className={styles.StepCardContainer}>
            <div className={styles.badgeTimeline}>
                <div
                    className={styles.badgeIcon}
                    style={{
                        border: `1px solid ${step.brBadge}`,
                        backgroundColor: step.badgeBg,
                    }}
                >
                    <Icon
                        icon={step.icon}
                        color={step.color}
                        width={28}
                        height={28}
                    />
                </div>
                {index < steps.length - 1 && (
                    <div className={styles.timeline}></div>
                )}
            </div>
            <div className={styles.step}>
                <span
                    className={styles.miniTagStep}
                    style={{
                        background: step.color,
                    }}
                >
                    Paso {index + 1}
                </span>
                <h3 className={styles.titleStep}>{step.title}</h3>
                <p className={styles.descriptionStep}>{step.description}</p>
                <div className={`cardContainer ${styles.detailsStepCard}`} style={{
                    border: `1px solid ${step.brBadge}`
                }}>
                    <ul className={styles.listDetails}>
                        {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className={styles.detailItem}>
                                <div
                                    className={styles.detailIcon}
                                    style={{
                                        background: step.badgeBg,
                                    }}
                                >
                                    <Icon
                                        icon={detail.icon}
                                        color={step.color}
                                    />
                                </div>
                                <span className={styles.detailText}>
                                    {detail.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StepCard;
