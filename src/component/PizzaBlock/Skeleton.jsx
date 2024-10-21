import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./PizzaBlock.module.scss";

export const Skeleton = (props) => (
    <ContentLoader
        className={styles["pizza-block"]}
        speed={2}
        width={280}
        height={454}
        viewBox="0 0 280 454"
        backgroundColor="#f5f5f5"
        foregroundColor="#ffdf8c"
        {...props}
    >
        <circle cx="136" cy="120" r="120" />
        <rect x="0" y="259" rx="10" ry="10" width="280" height="31" />
        <rect x="0" y="313" rx="10" ry="10" width="280" height="72" />
        <rect x="1" y="416" rx="10" ry="10" width="88" height="30" />
        <rect x="131" y="409" rx="21" ry="21" width="149" height="42" />
    </ContentLoader>
);
