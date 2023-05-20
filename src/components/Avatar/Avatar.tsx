import styles from "./Avatar.module.css"

interface AvatarProps {
    hasBorder?: boolean;
    src: string
    alt?: string
}

export const Avatar = (props:AvatarProps) => {

    return (
        <img
            className={props.hasBorder === false ? styles.avatar : styles.avatarWithBorder}
            src={props.src}
            alt={props.alt}
        />
    )
}