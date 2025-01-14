/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import styles from "./Description.module.scss";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Description: FC = () => {
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        description: string;
        price: number;
    }>();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const { data } = await axios.get(
                    `https://66f2d5e071c84d805876ef77.mockapi.io/pizzas/${params.id}`
                );
                setPizza(data);
            } catch (error) {
                alert("Пицца не нашлась!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        };

        fetchDescription();
    }, []);

    return pizza ? (
        <div className={styles.Description}>
            <img src={pizza.imageUrl} alt="pizza" />
            <div className={styles.right}>
                <h3>{pizza.title}</h3>
                <p>{pizza.description}</p>
                <div className={styles.bottom}>
                    <div>
                        от <span>{pizza.price}</span> ₽
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>"Downloading..."</div>
    );
};
