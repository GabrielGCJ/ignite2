import styles from "./Avatar.module.css"

export const Avatar = (props) => {

    return (
        <img
            className={props.hasBorder === false ? styles.avatar : styles.avatarWithBorder}
            src={props.src}
        />
    )
}