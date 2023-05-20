import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface ComentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: ComentProps) => {

    const [likeCount, setLikeCount] = useState(0)

    const handleLikeComment = () => {

        setLikeCount(likeCount + 1)
    }

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/GabrielGCJ.png" 
                alt=""                 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Jorge</strong>
                            <time title="12 de maio às 04:08 " dateTime="2023-05-12 04:08:30">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};
